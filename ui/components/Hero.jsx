"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playball } from "next/font/google";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  FaShieldHalved,
  FaAward,
  FaHeadset,
  FaLock,
  FaWhatsapp,
} from "react-icons/fa6";
import { heroBanners, heroCardsData } from "@/data/allData.js";

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Hero() {
  const containerRef = useRef(null);

  // Scroll Parallax Effect Setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Y offset & scale shift for background slideshow
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Auto change background banner every 5 seconds (5000ms)
  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setActiveBannerIndex((prevIndex) => (prevIndex + 1) % heroBanners.length);
    }, 5000);

    return () => clearInterval(bannerTimer);
  }, []);

  // Auto change package card every 5 seconds (5000ms)
  useEffect(() => {
    const cardTimer = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % heroCardsData.length);
    }, 5000);

    return () => clearInterval(cardTimer);
  }, []);

  const currentBanner = heroBanners[activeBannerIndex];
  const currentCard = heroCardsData[activeCardIndex];

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex items-center bg-slate-950 overflow-hidden font-sans">
      
      {/* Background Beach Image Slideshow with Smooth Scroll Parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 h-[115%] -top-[5%] w-full pointer-events-none"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentBanner.bgImage}
              alt="Tropical Beach Hero Background"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
            {/* Gradient Overlays for optimal text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-black/10" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 md:w-10/12 mx-auto py-12 lg:py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-3 md:space-y-7">
            {/* Headlines */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.15]">
                Explore The World
              </h1>
              {/* fancy heading using Playball font */}
              <div
                className={`${playball.className} text-4xl sm:text-5xl lg:text-6xl text-primary tracking-wide leading-tight`}
              >
                With Confidence
              </div>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-white text-xs sm:text-sm md:text-base font-normal max-w-md leading-relaxed">
              Explore handpicked holiday packages, instant visa assistance, and 24/7 dedicated support. Your dream journey starts right here with Middle East Travels.
            </p>

          

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="px-10 py-4 rounded-xl bg-primary hover:bg-secondary text-white font-semibold text-xs md:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
              >
             Apply for Visa
              </Link>
              <a
                href="https://wa.me/7025144666"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-4 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold text-xs md:text-sm shadow-xs hover:bg-slate-50 hover:shadow-sm active:scale-95 transition-all duration-200"
              >
                <FaWhatsapp className="text-emerald-500 text-lg" />
                <span>Speak to an Expert</span>
              </a>
             
            </div>
          </div>
          
          {/* MOBILE PACKAGE CARD DISPLAY */}
          <div className="w-full max-w-[250px] mx-auto flex md:hidden flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full bg-white rounded-2xl p-2 shadow-2xl border border-slate-100/90 flex flex-col justify-between"
              >
                <div className="p-3 space-y-2">
                  {/* Title & Duration */}
                  <div>
                    <h3 className="text-base font-semibold text-[#021b38] leading-tight">
                      {currentCard.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1">
                      {currentCard.duration}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400 font-normal block">
                      Starting from
                    </span>
                    <span className="text-xl font-semibold font-google-sans text-[#021b38] tracking-tight">
                      {currentCard.price}
                    </span>
                  </div>
                  {/* View Package Button */}
                  <div>
                    <Link
                      href={currentCard.link}
                      className="w-full py-2 rounded-lg bg-[#021b38] hover:bg-[#062c5a] text-white font-medium text-sm shadow-md active:scale-95 transition-all text-center block"
                    >
                      View Package
                    </Link>
                  </div>
                </div>

                {/* Card Bottom Image Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner pt-2">
                  <Image
                    src={currentCard.image}
                    alt={currentCard.title}
                    fill
                    sizes="300px"
                    quality={90}
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CARD ONLY PAGINATION DOTS (4 Cards) */}
            <div className="flex items-center justify-center gap-2 pt-3">
              {heroCardsData.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCardIndex(idx)}
                  aria-label={`Package card slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCardIndex === idx
                      ? "w-4 bg-[#FFB705]"
                      : "w-2.5 bg-white hover:bg-white/90 border border-slate-300/80 shadow-xs"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP RIGHT FLOATING PACKAGE CARD (4 Cards) */}
          <div className="hidden md:flex lg:col-span-5 flex-col items-center lg:items-end relative">
            <div className="w-full max-w-[280px] sm:max-w-[300px] flex flex-col items-center">
              {/* Package Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full bg-white rounded-2xl p-3 shadow-2xl border border-slate-100/90 flex flex-col justify-between space-y-3"
                >
                  <div className="p-3 space-y-4">
                    {/* Title & Duration */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-primary leading-tight">
                        {currentCard.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {currentCard.duration}
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-400 font-normal block">
                        Starting from
                      </span>
                      <span className="text-2xl font-bold font-google-sans text-[#021b38] tracking-tight">
                        {currentCard.price}
                      </span>
                    </div>
                    {/* View Package Button */}
                    <div>
                      <Link
                        href={currentCard.link}
                        className="w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white font-medium text-xs shadow-md active:scale-95 transition-all text-center block"
                      >
                        View Package
                      </Link>
                    </div>
                  </div>

                  {/* Card Bottom Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner pt-2">
                    <Image
                      src={currentCard.image}
                      alt={currentCard.title}
                      fill
                      sizes="300px"
                      quality={90}
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CARD ONLY PAGINATION DOTS (4 Cards) */}
              <div className="flex items-center justify-center gap-2 pt-3">
                {heroCardsData.map((card, idx) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveCardIndex(idx)}
                    aria-label={`Package card slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeCardIndex === idx
                        ? "w-4 bg-secondary"
                        : "w-2 bg-white hover:bg-white/90 border border-slate-300/80 shadow-xs"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
