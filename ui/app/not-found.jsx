"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHouse,
  FaCompass,
  FaArrowRight,
  FaHeadset,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function NotFound() {
  const quickDestinations = [
    { name: "Dubai & UAE", href: "/tour-packages" },
    { name: "Saudi Arabia", href: "/tour-packages" },
    { name: "Azerbaijan", href: "/tour-packages/azerbaijan" },
    { name: "Georgia", href: "/tour-packages/georgia" },
    { name: "Bali Resorts", href: "/tour-packages" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between overflow-hidden relative selection:bg-[#19a64b] selection:text-white">
      {/* Background Decorative Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#19a64b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 py-16 sm:py-20">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Animated 404 Header Badge & Number */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-[#19a64b] text-xs sm:text-sm font-semibold border border-emerald-100 shadow-xs"
            >
              <HiSparkles className="text-base" />
              <span>Error 404 • Destination Not Found</span>
            </motion.div>

            {/* Giant Gradient 404 Text with Floating Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -8, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                opacity: { duration: 0.6 },
              }}
              className="relative"
            >
              <h1 className="text-8xl sm:text-9xl lg:text-[11rem] font-extrabold text-[#021b38] tracking-tighter leading-none select-none">
                4<span className="text-[#19a64b]">0</span>4
              </h1>
            </motion.div>
          </div>

          {/* Text Message */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3 max-w-lg mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#021b38] tracking-tight">
              Oops! You've Wandered Off The Map
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              The page or destination you are looking for doesn't exist, may
              have been relocated, or is temporarily unavailable. Let's guide
              you back to safety!
            </p>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <Link
              href="/"
              className="px-7 py-3.5 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
            >
              <FaHouse className="text-sm" />
              <span>Return to Homepage</span>
            </Link>

          
          </motion.div>

        
        </div>
      </main>
    </div>
  );
}
