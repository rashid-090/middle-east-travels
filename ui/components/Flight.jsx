"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { geoMercator } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/* -------------------------------------------------------
   MAP CANVAS CONSTANTS
------------------------------------------------------- */
const MAP_W = 1000;
const MAP_H = 600;
const MAP_SCALE = 145;
const MAP_CENTER = [15, 15];

/* -------------------------------------------------------
   FLIGHT TUNING
------------------------------------------------------- */
const CRUISE_SPEED = 140;   // px per second -> constant speed on every leg
const MIN_LEG_MS = 3800;
const MAX_LEG_MS = 8500;
const HOLD_MS = 1100;       // time parked at a city while turning
const TURN_TAU = 110;       // heading smoothing time constant (ms)
const MAX_FRAME_MS = 64;    // clamp dt

const UNIFIED_COLOR = "#040608";

/* -------------------------------------------------------
   FLIGHT 1: LONG-DISTANCE ROUTE A (Americas ↔ Middle East ↔ Asia ↔ Pacific)
------------------------------------------------------- */
const routes1 = [
  {
    id: 1,
    title: "Dubai Luxury Getaway",
    badgeRegion: "Middle East",
    badgeTrip: "5 Days Trip",
    from: { name: "New York", coordinates: [-74.00, 40.71] },
    to: { name: "Dubai", coordinates: [55.27, 25.20] },
    color: UNIFIED_COLOR,
  },
  {
    id: 2,
    title: "Tokyo & Mt Fuji Explorer",
    badgeRegion: "Japan",
    badgeTrip: "7 Days Trip",
    from: { name: "Dubai", coordinates: [55.27, 25.20] },
    to: { name: "Tokyo", coordinates: [139.69, 35.68] },
    color: UNIFIED_COLOR,
  },
  {
    id: 3,
    title: "Pacific Wilds in BC",
    badgeRegion: "Canada",
    badgeTrip: "9 Days Trip",
    from: { name: "Tokyo", coordinates: [139.69, 35.68] },
    to: { name: "Vancouver", coordinates: [-123.12, 49.28] },
    color: UNIFIED_COLOR,
  },
  {
    id: 4,
    title: "New York & East Coast Heritage",
    badgeRegion: "USA",
    badgeTrip: "6 Days Trip",
    from: { name: "Vancouver", coordinates: [-123.12, 49.28] },
    to: { name: "New York", coordinates: [-74.00, 40.71] },
    color: UNIFIED_COLOR,
  },
];

/* -------------------------------------------------------
   FLIGHT 2: LONG-DISTANCE ROUTE B (South America ↔ Europe ↔ SE Asia ↔ Australia)
------------------------------------------------------- */
const routes2 = [
  {
    id: "f2-1",
    from: { name: "Buenos Aires", coordinates: [-58.38, -34.60] },
    to: { name: "Paris", coordinates: [2.35, 48.85] },
    color: UNIFIED_COLOR,
  },
  {
    id: "f2-2",
    from: { name: "Paris", coordinates: [2.35, 48.85] },
    to: { name: "Singapore", coordinates: [103.81, 1.35] },
    color: UNIFIED_COLOR,
  },
  {
    id: "f2-3",
    from: { name: "Singapore", coordinates: [103.81, 1.35] },
    to: { name: "Sydney", coordinates: [151.20, -33.86] },
    color: UNIFIED_COLOR,
  },
  {
    id: "f2-4",
    from: { name: "Sydney", coordinates: [151.20, -33.86] },
    to: { name: "Buenos Aires", coordinates: [-58.38, -34.60] },
    color: UNIFIED_COLOR,
  },
];

/* -------------------------------------------------------
   FLIGHT 3: LONG-DISTANCE ROUTE C (US West Coast ↔ UK ↔ South Africa ↔ Maldives)
------------------------------------------------------- */
const routes3 = [
  {
    id: "f3-1",
    from: { name: "Los Angeles", coordinates: [-118.24, 34.05] },
    to: { name: "London", coordinates: [2.35, 48.85] },
    color: UNIFIED_COLOR,
  },
  {
    id: "f3-2",
    from: { name: "London", coordinates: [2.35, 48.85] },
    to: { name: "Cape Town", coordinates: [18.42, -33.92] },
    color: UNIFIED_COLOR,
  },
  {
    id: "f3-3",
    from: { name: "Cape Town", coordinates: [18.42, -33.92] },
    to: { name: "Maldives", coordinates: [73.50, 4.17] },
    color: UNIFIED_COLOR,
  },
  {
    id: "f3-4",
    from: { name: "Maldives", coordinates: [73.50, 4.17] },
    to: { name: "Los Angeles", coordinates: [-118.24, 34.05] },
    color: UNIFIED_COLOR,
  },
];

/* -------------------------------------------------------
   WORLD LOCATIONS FOR DOT MATRIX MAP
------------------------------------------------------- */
const locations = [
  [-122, 48], [-118, 34], [-95, 29], [-87, 41], [-74, 40],
  [-58, -34], [-47, -15], [-3, 40], [2, 48], [12, 42],
  [18, 59], [28, 41], [37, 55], [44, 33], [55, 25],
  [77, 28], [103, 1], [116, 39], [127, 36], [139, 35],
  [151, -33], [145, -6], [30, 0], [20, -25], [18, 5],
  [79, 7], [90, 23],
];

/* -------------------------------------------------------
   GEOMETRY HELPERS
------------------------------------------------------- */
function getArcControlPoint(p1, p2, bend = 0.35) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;

  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  const lift = Math.min(dist * bend, 140);

  let nx = -dy / dist;
  let ny = dx / dist;

  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }

  return [mx + nx * lift, my + ny * lift];
}

function quadPoint(p1, cp, p2, t) {
  const u = 1 - t;
  return [
    u * u * p1[0] + 2 * u * t * cp[0] + t * t * p2[0],
    u * u * p1[1] + 2 * u * t * cp[1] + t * t * p2[1],
  ];
}

function quadHeading(p1, cp, p2, t) {
  const dx = 2 * (1 - t) * (cp[0] - p1[0]) + 2 * t * (p2[0] - cp[0]);
  const dy = 2 * (1 - t) * (cp[1] - p1[1]) + 2 * t * (p2[1] - cp[1]);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

function quadLength(p1, cp, p2, samples = 32) {
  let len = 0;
  let prev = p1;
  for (let i = 1; i <= samples; i++) {
    const pt = quadPoint(p1, cp, p2, i / samples);
    len += Math.hypot(pt[0] - prev[0], pt[1] - prev[1]);
    prev = pt;
  }
  return len;
}

function shortestAngleDelta(from, to) {
  return (((to - from + 180) % 360) + 360) % 360 - 180;
}

function easeInOutSine(t) {
  return 0.5 - 0.5 * Math.cos(Math.PI * t);
}

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

/* -------------------------------------------------------
   MAIN FLIGHT ROUTE COMPONENT
------------------------------------------------------- */
export default function FlightRouteSection() {
  const [mounted, setMounted] = useState(false);

  const [legIndex, setLegIndex] = useState(0);
  const [leg2Index, setLeg2Index] = useState(0);
  const [leg3Index, setLeg3Index] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projection = useMemo(
    () =>
      geoMercator()
        .scale(MAP_SCALE)
        .center(MAP_CENTER)
        .translate([MAP_W / 2, MAP_H / 2]),
    []
  );

  const buildLegs = useCallback(
    (routesData) =>
      routesData.map((r) => {
        const start = projection(r.from.coordinates) || [0, 0];
        const end = projection(r.to.coordinates) || [0, 0];
        const cp = getArcControlPoint(start, end, 0.35);
        const length = quadLength(start, cp, end);
        return {
          ...r,
          start,
          end,
          cp,
          length,
          durationMs: clamp(
            (length / CRUISE_SPEED) * 1000,
            MIN_LEG_MS,
            MAX_LEG_MS
          ),
          d: `M ${start[0]} ${start[1]} Q ${cp[0]} ${cp[1]} ${end[0]} ${end[1]}`,
        };
      }),
    [projection]
  );

  const legs1 = useMemo(() => buildLegs(routes1), [buildLegs]);
  const legs2 = useMemo(() => buildLegs(routes2), [buildLegs]);
  const legs3 = useMemo(() => buildLegs(routes3), [buildLegs]);

  const leg = legs1[legIndex];
  const leg2 = legs2[leg2Index];
  const leg3 = legs3[leg3Index];

  /* --- FLIGHT 1 REFS --- */
  const legRef = useRef(0);
  const tRef = useRef(0);
  const phaseRef = useRef("cruise");
  const holdRef = useRef(0);
  const angleRef = useRef(null);
  const warpRef = useRef(1);
  const planeRef = useRef(null);
  const shadowRef = useRef(null);
  const cardRef = useRef(null);

  /* --- FLIGHT 2 REFS --- */
  const leg2Ref = useRef(0);
  const t2Ref = useRef(0.35);
  const phase2Ref = useRef("cruise");
  const hold2Ref = useRef(0);
  const angle2Ref = useRef(null);
  const plane2Ref = useRef(null);
  const shadow2Ref = useRef(null);

  /* --- FLIGHT 3 REFS --- */
  const leg3Ref = useRef(0);
  const t3Ref = useRef(0.7);
  const phase3Ref = useRef("cruise");
  const hold3Ref = useRef(0);
  const angle3Ref = useRef(null);
  const plane3Ref = useRef(null);
  const shadow3Ref = useRef(null);

  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const clockRef = useRef(0);

  useEffect(() => {
    if (!mounted) return;

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min(ts - lastTsRef.current, MAX_FRAME_MS);
      lastTsRef.current = ts;
      clockRef.current += dt;

      /* ================= FLIGHT 1 STEP ================= */
      const current1 = legs1[legRef.current];
      const next1Index = (legRef.current + 1) % legs1.length;
      const next1 = legs1[next1Index];

      if (phaseRef.current === "cruise") {
        tRef.current += dt / current1.durationMs;
        if (tRef.current >= 1) {
          tRef.current = 1;
          phaseRef.current = "hold";
          holdRef.current = 0;
        }
      } else {
        holdRef.current += dt;
        if (holdRef.current >= HOLD_MS) {
          legRef.current = next1Index;
          tRef.current = 0;
          phaseRef.current = "cruise";
          holdRef.current = 0;
          setLegIndex(next1Index);
        }
      }

      const activeLeg1 = legs1[legRef.current];
      const e1 = easeInOutSine(tRef.current);
      const [x1, y1] = quadPoint(activeLeg1.start, activeLeg1.cp, activeLeg1.end, e1);

      const targetAngle1 =
        phaseRef.current === "hold"
          ? quadHeading(next1.start, next1.cp, next1.end, 0)
          : quadHeading(activeLeg1.start, activeLeg1.cp, activeLeg1.end, e1);

      let bank1 = 0;
      if (angleRef.current === null) {
        angleRef.current = targetAngle1;
      } else {
        const delta1 = shortestAngleDelta(angleRef.current, targetAngle1);
        const k1 = 1 - Math.exp(-dt / TURN_TAU);
        const applied1 = delta1 * k1;
        angleRef.current += applied1;
        bank1 = clamp((applied1 / Math.max(dt, 1)) * 900, -22, 22);
      }

      const altitude1 = Math.sin(Math.PI * e1);
      const scale1 = 1 + 0.26 * altitude1;
      const bob1 = Math.sin(clockRef.current / 430) * 0.9;
      const squash1 = 1 - (Math.abs(bank1) / 22) * 0.16;

      if (warpRef.current < 1) {
        warpRef.current = Math.min(1, warpRef.current + dt / 320);
      }

      if (planeRef.current) {
        planeRef.current.setAttribute(
          "transform",
          `translate(${x1} ${y1 + bob1}) rotate(${angleRef.current}) scale(${scale1} ${scale1 * squash1})`
        );
        planeRef.current.setAttribute("opacity", String(warpRef.current));
      }

      if (shadowRef.current) {
        shadowRef.current.setAttribute(
          "transform",
          `translate(${x1 + 2 + altitude1 * 12} ${y1 + 3 + altitude1 * 15}) rotate(${angleRef.current}) scale(${0.85 + altitude1 * 0.15})`
        );
        shadowRef.current.setAttribute(
          "opacity",
          String((0.05 + altitude1 * 0.15) * warpRef.current)
        );
      }

      if (cardRef.current) {
        const reveal = clamp((e1 - 0.45) / 0.35, 0, 1);
        cardRef.current.style.opacity = String(reveal * warpRef.current);
        cardRef.current.style.transform = `translateY(${(1 - reveal) * 12}px) scale(${0.94 + 0.06 * reveal})`;
      }

      /* ================= FLIGHT 2 STEP ================= */
      const current2 = legs2[leg2Ref.current];
      const next2Index = (leg2Ref.current + 1) % legs2.length;
      const next2 = legs2[next2Index];

      if (phase2Ref.current === "cruise") {
        t2Ref.current += dt / current2.durationMs;
        if (t2Ref.current >= 1) {
          t2Ref.current = 1;
          phase2Ref.current = "hold";
          hold2Ref.current = 0;
        }
      } else {
        hold2Ref.current += dt;
        if (hold2Ref.current >= HOLD_MS) {
          leg2Ref.current = next2Index;
          t2Ref.current = 0;
          phase2Ref.current = "cruise";
          hold2Ref.current = 0;
          setLeg2Index(next2Index);
        }
      }

      const activeLeg2 = legs2[leg2Ref.current];
      const e2 = easeInOutSine(t2Ref.current);
      const [x2, y2] = quadPoint(activeLeg2.start, activeLeg2.cp, activeLeg2.end, e2);

      const targetAngle2 =
        phase2Ref.current === "hold"
          ? quadHeading(next2.start, next2.cp, next2.end, 0)
          : quadHeading(activeLeg2.start, activeLeg2.cp, activeLeg2.end, e2);

      let bank2 = 0;
      if (angle2Ref.current === null) {
        angle2Ref.current = targetAngle2;
      } else {
        const delta2 = shortestAngleDelta(angle2Ref.current, targetAngle2);
        const k2 = 1 - Math.exp(-dt / TURN_TAU);
        const applied2 = delta2 * k2;
        angle2Ref.current += applied2;
        bank2 = clamp((applied2 / Math.max(dt, 1)) * 900, -22, 22);
      }

      const altitude2 = Math.sin(Math.PI * e2);
      const scale2 = 1 + 0.26 * altitude2;
      const bob2 = Math.sin((clockRef.current + 1200) / 430) * 0.9;
      const squash2 = 1 - (Math.abs(bank2) / 22) * 0.16;

      if (plane2Ref.current) {
        plane2Ref.current.setAttribute(
          "transform",
          `translate(${x2} ${y2 + bob2}) rotate(${angle2Ref.current}) scale(${scale2} ${scale2 * squash2})`
        );
        plane2Ref.current.setAttribute("opacity", String(warpRef.current));
      }

      if (shadow2Ref.current) {
        shadow2Ref.current.setAttribute(
          "transform",
          `translate(${x2 + 2 + altitude2 * 12} ${y2 + 3 + altitude2 * 15}) rotate(${angle2Ref.current}) scale(${0.85 + altitude2 * 0.15})`
        );
        shadow2Ref.current.setAttribute(
          "opacity",
          String((0.05 + altitude2 * 0.15) * warpRef.current)
        );
      }

      /* ================= FLIGHT 3 STEP ================= */
      const current3 = legs3[leg3Ref.current];
      const next3Index = (leg3Ref.current + 1) % legs3.length;
      const next3 = legs3[next3Index];

      if (phase3Ref.current === "cruise") {
        t3Ref.current += dt / current3.durationMs;
        if (t3Ref.current >= 1) {
          t3Ref.current = 1;
          phase3Ref.current = "hold";
          hold3Ref.current = 0;
        }
      } else {
        hold3Ref.current += dt;
        if (hold3Ref.current >= HOLD_MS) {
          leg3Ref.current = next3Index;
          t3Ref.current = 0;
          phase3Ref.current = "cruise";
          hold3Ref.current = 0;
          setLeg3Index(next3Index);
        }
      }

      const activeLeg3 = legs3[leg3Ref.current];
      const e3 = easeInOutSine(t3Ref.current);
      const [x3, y3] = quadPoint(activeLeg3.start, activeLeg3.cp, activeLeg3.end, e3);

      const targetAngle3 =
        phase3Ref.current === "hold"
          ? quadHeading(next3.start, next3.cp, next3.end, 0)
          : quadHeading(activeLeg3.start, activeLeg3.cp, activeLeg3.end, e3);

      let bank3 = 0;
      if (angle3Ref.current === null) {
        angle3Ref.current = targetAngle3;
      } else {
        const delta3 = shortestAngleDelta(angle3Ref.current, targetAngle3);
        const k3 = 1 - Math.exp(-dt / TURN_TAU);
        const applied3 = delta3 * k3;
        angle3Ref.current += applied3;
        bank3 = clamp((applied3 / Math.max(dt, 1)) * 900, -22, 22);
      }

      const altitude3 = Math.sin(Math.PI * e3);
      const scale3 = 1 + 0.26 * altitude3;
      const bob3 = Math.sin((clockRef.current + 2500) / 430) * 0.9;
      const squash3 = 1 - (Math.abs(bank3) / 22) * 0.16;

      if (plane3Ref.current) {
        plane3Ref.current.setAttribute(
          "transform",
          `translate(${x3} ${y3 + bob3}) rotate(${angle3Ref.current}) scale(${scale3} ${scale3 * squash3})`
        );
        plane3Ref.current.setAttribute("opacity", String(warpRef.current));
      }

      if (shadow3Ref.current) {
        shadow3Ref.current.setAttribute(
          "transform",
          `translate(${x3 + 2 + altitude3 * 12} ${y3 + 3 + altitude3 * 15}) rotate(${angle3Ref.current}) scale(${0.85 + altitude3 * 0.15})`
        );
        shadow3Ref.current.setAttribute(
          "opacity",
          String((0.05 + altitude3 * 0.15) * warpRef.current)
        );
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [legs1, legs2, legs3, mounted]);

  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden bg-[#d2e5df] h-[600px] sm:h-[680px] lg:h-[740px]" />
    );
  }

  return (
    <section className="relative w-full pt-12 lg:pt-16 overflow-hidden select-none">
      <div className="space-y-6">
        
        {/* Section Header Row */}
        <div className="w-10/12 mx-auto flex justify-center items-center flex-col gap-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
            Explore Popular <span className="text-primary">Flight Destinations</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
            Discover seamless travel experiences to top global destinations with our expert flight packages and visa assistance.
          </p>
        </div>

        {/* Map Canvas Container */}
        <div className="relative h-[250px] md:h-[600px] overflow-hidden bg-[#d2e5df] w-full">

          {/* Soft World Map Layer */}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: MAP_SCALE,
              center: MAP_CENTER,
            }}
            width={MAP_W}
            height={MAP_H}
            className="absolute inset-0 h-full w-full scale-110 md:scale-100 object-cover"
          >
            {/* Country Landmasses */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#c5ded7"
                    fillOpacity={0.85}
                    stroke="#b3d4cb"
                    strokeWidth={0.6}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Map Location Dots */}
            {locations.map(([longitude, latitude], idx) => (
              <Marker key={idx} coordinates={[longitude, latitude]}>
                <circle
                  r={idx % 4 === 0 ? 2.6 : 1.8}
                  fill="#19A64B"
                  opacity={0.85}
                />
                {idx % 4 === 0 && (
                  <circle
                    r="5"
                    fill="none"
                    stroke="#19A64B"
                    strokeWidth="0.6"
                    opacity="0.25"
                  />
                )}
              </Marker>
            ))}
          </ComposableMap>

          {/* Dynamic Flight Arcs, Trails, & Airplane SVG Layer */}
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <defs>
              <filter id="planeShadowBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.4" />
              </filter>
            </defs>

            {/* FLIGHT 1: Planned route */}
            <path
              d={leg.d}
              fill="none"
              stroke={UNIFIED_COLOR}
              strokeWidth="1.2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* FLIGHT 2: Planned route */}
            <path
              d={leg2.d}
              fill="none"
              stroke={UNIFIED_COLOR}
              strokeWidth="1.2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* FLIGHT 3: Planned route */}
            <path
              d={leg3.d}
              fill="none"
              stroke={UNIFIED_COLOR}
              strokeWidth="1.2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Flight 1 Markers */}
            <g transform={`translate(${leg.start[0]}, ${leg.start[1]})`}>
              <circle r="3" fill="white" stroke={UNIFIED_COLOR} strokeWidth="2.5" />
              <circle r="1" fill={UNIFIED_COLOR} />
            </g>
            <g transform={`translate(${leg.end[0]}, ${leg.end[1]})`}>
              <circle
                r="14"
                fill={UNIFIED_COLOR}
                opacity="0.2"
                className="animate-ping"
              />
              <circle r="3" fill="white" stroke={UNIFIED_COLOR} strokeWidth="3" />
              <circle r="1" fill={UNIFIED_COLOR} />
            </g>

            {/* Flight 2 Markers */}
            <g transform={`translate(${leg2.start[0]}, ${leg2.start[1]})`}>
              <circle r="3" fill="white" stroke={UNIFIED_COLOR} strokeWidth="2.5" />
              <circle r="1" fill={UNIFIED_COLOR} />
            </g>
            <g transform={`translate(${leg2.end[0]}, ${leg2.end[1]})`}>
              <circle r="3" fill="white" stroke={UNIFIED_COLOR} strokeWidth="3" />
              <circle r="1" fill={UNIFIED_COLOR} />
            </g>

            {/* Flight 3 Markers */}
            <g transform={`translate(${leg3.start[0]}, ${leg3.start[1]})`}>
              <circle r="3" fill="white" stroke={UNIFIED_COLOR} strokeWidth="2.5" />
              <circle r="1" fill={UNIFIED_COLOR} />
            </g>
            <g transform={`translate(${leg3.end[0]}, ${leg3.end[1]})`}>
              <circle r="3" fill="white" stroke={UNIFIED_COLOR} strokeWidth="3" />
              <circle r="1" fill={UNIFIED_COLOR} />
            </g>

            {/* Flight 1 Ground Shadow & Airplane */}
            <g ref={shadowRef} opacity="0" filter="url(#planeShadowBlur)">
              <g transform="translate(-15, -15)">
                <IoIosAirplane size={30} color="#0b1f1a" />
              </g>
            </g>
            <g ref={planeRef} opacity="0">
              <g transform="translate(-15, -15)">
                <IoIosAirplane size={30} color={UNIFIED_COLOR} />
              </g>
            </g>

            {/* Flight 2 Ground Shadow & Airplane */}
            <g ref={shadow2Ref} opacity="0" filter="url(#planeShadowBlur)">
              <g transform="translate(-15, -15)">
                <IoIosAirplane size={30} color="#0b1f1a" />
              </g>
            </g>
            <g ref={plane2Ref} opacity="0">
              <g transform="translate(-15, -15)">
                <IoIosAirplane size={30} color={UNIFIED_COLOR} />
              </g>
            </g>

            {/* Flight 3 Ground Shadow & Airplane */}
            <g ref={shadow3Ref} opacity="0" filter="url(#planeShadowBlur)">
              <g transform="translate(-15, -15)">
                <IoIosAirplane size={30} color="#0b1f1a" />
              </g>
            </g>
            <g ref={plane3Ref} opacity="0">
              <g transform="translate(-15, -15)">
                <IoIosAirplane size={30} color={UNIFIED_COLOR} />
              </g>
            </g>
          </svg>

          {/* Floating Destination Information Card (Flight 1) */}
          <div
            className="absolute z-30"
            style={{
              left: `${(leg.end[0] / MAP_W) * 100}%`,
              top: `${(leg.end[1] / MAP_H) * 100}%`,
              transform: "translate(-50%, -128%)",
            }}
          >
            <div ref={cardRef} style={{ opacity: 0, willChange: "opacity, transform" }}>
              <div className="relative bg-white rounded-2xl p-3 shadow-xl border border-slate-100/90 min-w-[150px] md:min-w-[230px]">
                {/* Pointer Caret */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100" />

                {/* Region & Trip Duration Badges */}
                <div className="flex items-center gap-3 mb-1 text-[8px] md:text-xs">
                  <span className="flex items-center gap-1.5 text-primary">
                    <FaMapMarkerAlt className="text-[10px]" />
                    <span>{leg.badgeRegion}</span>
                  </span>

                  <span className="flex text-[8px] md:text-[10px] items-center gap-1 text-slate-500 font-normal">
                    <span>{leg.badgeTrip}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[10px] md:text-sm font-medium text-[#021b38] leading-tight tracking-tight">
                  {leg.title}
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}