"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosAirplane } from "react-icons/io";

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 1700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
          }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center pointer-events-auto select-none font-sans overflow-hidden"
        >
          {/* Soft Radial Glow Accent */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0.2, 0.4, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-96 h-96 bg-[#19a64b]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative flex flex-col items-center gap-4">
            {/* Logo Image */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 10 }}
              animate={{
                scale: [0.95, 1.02, 1],
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative w-52 sm:w-64 h-16 sm:h-16"
            >
              <Image
                src="/middleeast_black_logo.webp"
                alt="Middle East Travels Logo"
                fill
                priority
                sizes="256px"
                className="object-contain"
              />
            </motion.div>

            {/* Flight Progress Bar with Airplane Flying from Start to End */}
            <div className="w-48 sm:w-64 relative flex items-center">
              {/* Background Line Track */}
              <div className="w-full h-[2px] bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
                {/* Green Filling Progress Bar */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-[#19a64b] rounded-full"
                />
              </div>

              {/* Airplane Icon Flying Across Progress Bar Line */}
              <motion.div
                initial={{ left: "0%", opacity: 0 }}
                animate={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 1],
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute -top-[14px] -translate-x-1/2 text-[#19a64b] text-3xl drop-shadow-xs rotate-0 z-20 pointer-events-none"
              >
                <IoIosAirplane />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
