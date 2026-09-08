"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { geoMercator } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/* -------------------------------------------------------
   MAP CANVAS CONSTANTS
   These MUST match ComposableMap's width/height/projectionConfig,
   otherwise the arcs drift away from the countries.
   react-simple-maps translates to [width / 2, height / 2].
------------------------------------------------------- */
const MAP_W = 1000;
const MAP_H = 600;
const MAP_SCALE = 145;
const MAP_CENTER = [15, 15];

/* -------------------------------------------------------
   FLIGHT TUNING
------------------------------------------------------- */
const CRUISE_SPEED = 140;   // px per second -> constant speed on every leg
const MIN_LEG_MS = 3200;
const MAX_LEG_MS = 8000;
const HOLD_MS = 1100;       // time parked at a city while it turns to the next heading
const TURN_TAU = 110;       // heading smoothing time constant (ms). Lower = snappier turns.
const MAX_FRAME_MS = 64;    // clamp dt so a backgrounded tab can't teleport the plane

/* -------------------------------------------------------
   FLIGHT ROUTES DATA (Seamless Global Loop Circuit)
   route[i].to === route[i + 1].from, so the plane never
   needs to be repositioned between legs.
------------------------------------------------------- */
const routes = [
  {
    id: 1,
    title: "Pacific Wilds in BC",
    badgeRegion: "Canada",
    badgeTrip: "9 Days Trip",
    from: { name: "Buenos Aires", coordinates: [-58.38, -34.60] },
    to: { name: "Pacific Wilds in BC", coordinates: [-123.12, 49.28] },
    color: "#040608",
  },
  {
    id: 2,
    title: "Feel love in Paris",
    badgeRegion: "Europe",
    badgeTrip: "7 Days Trip",
    from: { name: "Pacific Wilds in BC", coordinates: [-123.12, 49.28] },
    to: { name: "Paris", coordinates: [2.35, 48.85] },
    color: "#040608",
  },
  {
    id: 3,
    title: "Dubai Luxury Getaway",
    badgeRegion: "Middle East",
    badgeTrip: "5 Days Trip",
    from: { name: "Paris", coordinates: [2.35, 48.85] },
    to: { name: "Dubai", coordinates: [55.27, 25.20] },
    color: "#040608",
  },
  {
    id: 4,
    title: "Bali Island Escape",
    badgeRegion: "Indonesia",
    badgeTrip: "7 Days Trip",
    from: { name: "Dubai", coordinates: [55.27, 25.20] },
    to: { name: "Bali", coordinates: [115.18, -8.40] },
    color: "#040608",
  },
  {
    id: 5,
    title: "Tango Night in Buenos",
    badgeRegion: "Argentina",
    badgeTrip: "6 Days Trip",
    from: { name: "Bali", coordinates: [115.18, -8.40] },
    to: { name: "Buenos Aires", coordinates: [-58.38, -34.60] },
    color: "#040608",
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

  // Always bow the arc upward (screen-space -y)
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

/* Arc length by sampling — used to keep ground speed constant across legs */
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

/* Signed shortest rotation between two headings, in (-180, 180] */
function shortestAngleDelta(from, to) {
  return (((to - from + 180) % 360) + 360) % 360 - 180;
}

/* Gentle in/out — smooth takeoff and touchdown, no hard stop mid-air */
function easeInOutSine(t) {
  return 0.5 - 0.5 * Math.cos(Math.PI * t);
}

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

/* -------------------------------------------------------
   MAIN FLIGHT ROUTE COMPONENT
------------------------------------------------------- */
export default function FlightRouteSection() {
  const [mounted, setMounted] = useState(false);

  // Re-renders ONCE per leg (card copy + colors). Never during flight.
  const [legIndex, setLegIndex] = useState(0);

  // Hydration protection
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mirror ComposableMap's projection exactly
  const projection = useMemo(
    () =>
      geoMercator()
        .scale(MAP_SCALE)
        .center(MAP_CENTER)
        .translate([MAP_W / 2, MAP_H / 2]),
    []
  );

  // Precompute every leg once: endpoints, control point, path, arc length
  const legs = useMemo(
    () =>
      routes.map((r) => {
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

  const leg = legs[legIndex];

  /* --- Animation state lives in refs, so the rAF loop never restarts --- */
  const legRef = useRef(0);       // current leg index (authoritative during flight)
  const tRef = useRef(0);         // raw 0..1 progress on current leg
  const phaseRef = useRef("cruise"); // "cruise" | "hold"
  const holdRef = useRef(0);      // ms spent holding at the destination
  const angleRef = useRef(null);  // smoothed heading in degrees
  const warpRef = useRef(1);      // 0..1 fade-in after a manual route pick
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const clockRef = useRef(0);     // total elapsed, drives the idle bob

  /* --- DOM refs we mutate directly (bypassing React's render loop) --- */
  const planeRef = useRef(null);
  const shadowRef = useRef(null);
  const trailRef = useRef(null);
  const cardRef = useRef(null);

  const selectLeg = useCallback((index) => {
    legRef.current = index;
    tRef.current = 0;
    phaseRef.current = "cruise";
    holdRef.current = 0;
    angleRef.current = null; // adopt the new leg's heading immediately
    warpRef.current = 0;     // fade the plane back in instead of hard-teleporting
    setLegIndex(index);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min(ts - lastTsRef.current, MAX_FRAME_MS);
      lastTsRef.current = ts;
      clockRef.current += dt;

      const current = legs[legRef.current];
      const nextIndex = (legRef.current + 1) % legs.length;
      const next = legs[nextIndex];

      /* ---- advance the timeline ---- */
      if (phaseRef.current === "cruise") {
        tRef.current += dt / current.durationMs;
        if (tRef.current >= 1) {
          tRef.current = 1;
          phaseRef.current = "hold";
          holdRef.current = 0;
        }
      } else {
        holdRef.current += dt;
        if (holdRef.current >= HOLD_MS) {
          // The plane is already standing on next.start (=== current.end),
          // so switching legs moves nothing on screen.
          legRef.current = nextIndex;
          tRef.current = 0;
          phaseRef.current = "cruise";
          holdRef.current = 0;
          setLegIndex(nextIndex);
        }
      }

      const activeLeg = legs[legRef.current];
      const e = easeInOutSine(tRef.current);
      const [x, y] = quadPoint(activeLeg.start, activeLeg.cp, activeLeg.end, e);

      /* ---- heading: smoothed, shortest-path, never snapping ---- */
      const targetAngle =
        phaseRef.current === "hold"
          ? // While parked, pivot toward the heading it will depart on
            quadHeading(next.start, next.cp, next.end, 0)
          : quadHeading(activeLeg.start, activeLeg.cp, activeLeg.end, e);

      let bank = 0;
      if (angleRef.current === null) {
        angleRef.current = targetAngle;
      } else {
        const delta = shortestAngleDelta(angleRef.current, targetAngle);
        const k = 1 - Math.exp(-dt / TURN_TAU); // frame-rate independent
        const applied = delta * k;
        angleRef.current += applied;
        bank = clamp((applied / Math.max(dt, 1)) * 900, -22, 22);
      }

      /* ---- altitude, bob, warp fade ---- */
      const altitude = Math.sin(Math.PI * e);                 // 0 at cities, 1 mid-flight
      const scale = 1 + 0.26 * altitude;
      const bob = Math.sin(clockRef.current / 430) * 0.9;
      const squash = 1 - (Math.abs(bank) / 22) * 0.16;        // wings tilting into the turn

      if (warpRef.current < 1) {
        warpRef.current = Math.min(1, warpRef.current + dt / 320);
      }

      /* ---- write straight to the DOM: no React render, no CSS transition ---- */
      const plane = planeRef.current;
      if (plane) {
        plane.setAttribute(
          "transform",
          `translate(${x} ${y + bob}) rotate(${angleRef.current}) scale(${scale} ${scale * squash})`
        );
        plane.setAttribute("opacity", String(warpRef.current));
      }

      const shadow = shadowRef.current;
      if (shadow) {
        shadow.setAttribute(
          "transform",
          `translate(${x + 5 + altitude * 15} ${y + 7 + altitude * 19}) rotate(${angleRef.current}) scale(${1 - altitude * 0.12})`
        );
        shadow.setAttribute(
          "opacity",
          String((0.3 - altitude * 0.17) * warpRef.current)
        );
      }

      // Trail draws itself in behind the plane (pathLength="1" makes this unit-based)
      const trail = trailRef.current;
      if (trail) {
        trail.setAttribute("stroke-dashoffset", String(1 - e));
      }

      // Card rises into view as the plane commits to its approach
      const card = cardRef.current;
      if (card) {
        const reveal = clamp((e - 0.45) / 0.35, 0, 1);
        card.style.opacity = String(reveal * warpRef.current);
        card.style.transform = `translateY(${(1 - reveal) * 12}px) scale(${0.94 + 0.06 * reveal})`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0; // discard the gap so the next mount doesn't leap
    };
    // legs is memoized and mounted flips once — this loop starts exactly once.
  }, [legs, mounted]);

  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden bg-[#d2e5df] h-[600px] sm:h-[680px] lg:h-[740px]" />
    );
  }

  return (
    <section className="relative w-full pt-12 lg:pt-16 overflow-hidden select-none">
      <div className=" space-y-6">
        
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
        <div className="relative  h-[400px] md:h-[600px] overflow-hidden bg-[#d2e5df] w-full">

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
                fill={
                  idx % 5 === 0
                    ? "#19A64B"
                    : idx % 4 === 0
                    ? "#19A64B"
                    : idx % 3 === 0
                    ? "#19A64B"
                    : "#19A64B"
                }
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

        {/* Dynamic Flight Arc, Trail, & Airplane SVG Layer */}
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            <filter id="planeShadowBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
          </defs>

          {/* Planned route (dashed, full length) */}
          <path
            d={leg.d}
            fill="none"
            stroke="#4b6862"
            strokeWidth="1"
            strokeDasharray="6 6"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Flown route — revealed behind the plane via stroke-dashoffset */}
          {/* <path
            ref={trailRef}
            d={leg.d}
            fill="none"
            stroke={leg.color}
            strokeWidth="1.2"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1 1"
            strokeDashoffset="1"
            opacity="0.9"
          /> */}

          {/* Departure Point Marker (Origin) */}
          <g transform={`translate(${leg.start[0]}, ${leg.start[1]})`}>
            <circle r="3" fill="white" stroke={leg.color} strokeWidth="2.5" />
            <circle r="1" fill={leg.color} />
          </g>

          {/* Landing Destination Marker */}
          <g transform={`translate(${leg.end[0]}, ${leg.end[1]})`}>
            <circle
              r="14"
              fill={leg.color}
              opacity="0.2"
              className="animate-ping"
            />
            <circle r="3" fill="white" stroke={leg.color} strokeWidth="3" />
            <circle r="1" fill={leg.color} />
          </g>

          {/* Ground shadow — drifts away and fades as the plane climbs */}
          <g ref={shadowRef} opacity="0" filter="url(#planeShadowBlur)">
            <g transform="translate(-15, -15)">
              <IoIosAirplane size={30} color="#0b1f1a" />
            </g>
          </g>

          {/* Airplane using IoIosAirplane — transform is written imperatively every frame */}
          <g ref={planeRef} opacity="0">
            <g transform="translate(-15, -15)">
              <IoIosAirplane size={30} color={leg.color} />
            </g>
          </g>

        </svg>

        {/* Floating Destination Information Card */}
        <div
          className="absolute z-30"
          style={{
            left: `${(leg.end[0] / MAP_W) * 100}%`,
            top: `${(leg.end[1] / MAP_H) * 100}%`,
            transform: "translate(-50%, -128%)",
          }}
        >
          {/* Inner wrapper is animated by the rAF loop (opacity + transform) */}
          <div ref={cardRef} style={{ opacity: 0, willChange: "opacity, transform" }}>
            <div className="relative bg-white rounded-2xl p-3 shadow-xl border border-slate-100/90 min-w-[210px] sm:min-w-[230px]">
              {/* Pointer Caret */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100" />

              {/* Region & Trip Duration Badges */}
              <div className="flex items-center gap-3 mb-1 text-xs">
                <span className="flex items-center gap-1.5 text-primary">
                  <FaMapMarkerAlt className="text-[10px]" />
                  <span>{leg.badgeRegion}</span>
                </span>

                <span className="flex text-[10px] items-center gap-1 text-slate-500 font-normal">
                  <span>{leg.badgeTrip}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-[#021b38] leading-tight tracking-tight">
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