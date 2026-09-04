"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import {
  FaSuitcaseRolling,
  FaUserCheck,
  FaTags,
  FaHeadset,
} from "react-icons/fa6";

import { countsData, whyChooseFeaturesData } from "@/data/allData.js";

const getFeatureIcon = (iconType) => {
  switch (iconType) {
    case "package":
      return <FaSuitcaseRolling className="text-white text-base flex-shrink-0" />;
    case "consultant":
      return <FaUserCheck className="text-white text-base flex-shrink-0" />;
    case "pricing":
      return <FaTags className="text-white text-base flex-shrink-0" />;
    case "support":
      return <FaHeadset className="text-white text-base flex-shrink-0" />;
    default:
      return <FaSuitcaseRolling className="text-white text-base flex-shrink-0" />;
  }
};

function Counter({ stat }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-30px" });

  const match = stat.match(/^(\d+)(.*)$/);
  const targetNum = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, targetNum, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNum]);

  return (
    <span ref={nodeRef}>
      {count}{suffix}
    </span>
  );
}

export default function Counts() {
  return (
    <section className="w-full py-6 sm:py-10 font-sans">
      <div className="w-11/12 mx-auto">
        
        {/* Dark Navy Main Banner Box */}
        <div className="relative rounded-3xl bg-secondary p-6 md:p-8 text-white shadow-2xl border border-blue-900/40 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* LEFT SIDE: Title & 4 Feature Badges (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
                  <span>Why 2M+ Travellers<br/> Choose Middle East Travels?</span>
                </h2>
              </div>

              {/* 4 Feature Badges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2.5">
                {whyChooseFeaturesData.map((feat) => (
                  <div key={feat.id} className="flex items-center gap-2.5">
                    {getFeatureIcon(feat.iconType)}
                    <span className="text-xs text-slate-200 leading-snug">
                      {feat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: 4 Stats Cards Grid (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {countsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl aspect-square p-2 flex flex-col items-center justify-center text-center space-y-1.5 border border-white/10 hover:bg-white/15 transition-all duration-300"
                >
                  <span className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                    <Counter stat={item.stat} />
                  </span>
                  <span className="text-xs text-slate-200 leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}