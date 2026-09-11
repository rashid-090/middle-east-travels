"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playball } from "next/font/google";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaShieldHalved,
  FaAward,
  FaHeadset,
  FaLock,
  FaWhatsapp,
  FaArrowRight,
  FaFire,
  FaCrown,
  FaStar,
  FaTag,
  FaHotel,
  FaMugHot,
  FaCar,
  FaBinoculars,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { heroBanners, heroCardsData } from "@/data/allData.js";

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const getBadgeIcon = (type) => {
  switch (type) {
    case "fire-orange":
      return <FaFire className="text-orange-500 text-xs" />;
    case "fire-red":
      return <FaFire className="text-red-500 text-xs" />;
    case "tag-emerald":
      return <FaTag className="text-emerald-500 text-xs" />;
    case "crown-amber":
      return <FaCrown className="text-amber-500 text-xs" />;
    case "sparkles-purple":
      return <HiSparkles className="text-purple-500 text-xs" />;
    default:
      return <FaStar className="text-amber-400 text-xs" />;
  }
};

const getInclusionIcon = (type) => {
  switch (type) {
    case "hotel":
      return <FaHotel className="text-primary text-sm" />;
    case "breakfast":
      return <FaMugHot className="text-primary text-sm" />;
    case "transfer":
      return <FaCar className="text-primary text-sm" />;
    case "sightseeing":
      return <FaBinoculars className="text-primary text-sm" />;
    default:
      return <FaHotel className="text-primary text-sm" />;
  }
};

function renderPackageCardContent(item) {
  return (
    <Link
      href={item.link || `/tour-packages/${item.id}`}
      className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-2xl hover:shadow-2xl transition-all duration-300 p-3 flex flex-col justify-between h-full group block text-left w-full"
    >
      <div>
        {/* Top Smooth Rounded Image Container */}
        <div className="relative w-full aspect-video md:aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-3.5 bg-slate-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, 340px"
            quality={90}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

      
        </div>

        <div className="px-1 pt-1">
          {/* Title & Rating Row */}
          <div className="flex items-start justify-between gap-3 mb-0.5">
            <h3 className="md:text-lg font-semibold text-[#021b38] leading-snug tracking-tight">
              {item.title} <span className="text-primary">Tour Packages</span>
            </h3>
            {item.rating && (
              <div className="flex items-center gap-1 font-medium text-slate-900 text-xs shrink-0 pt-0.5">
                <span>{item.rating}</span>
                <FaStar className="text-amber-400 text-sm fill-amber-400" />
              </div>
            )}
          </div>

          {/* Duration */}
          <p className="text-[10px] md:text-xs text-slate-500 font-medium mb-3">
            {item.duration || "5 Days 4 Nights"}
          </p>


          {/* Bullet Points Highlights */}
          <ul className="space-y-1 text-[10px] md:text-xs text-slate-600 font-normal my-1">
            {item.highlights && item.highlights.length > 0 ? (
              item.highlights.slice(0, 2).map((point, pointIdx) => (
                <li key={pointIdx} className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold text-xs leading-none pt-0.5">
                    •
                  </span>
                  <span className="leading-snug text-xs line-clamp-1">
                    {point}
                  </span>
                </li>
              ))
            ) : (
              <li className="flex items-start gap-1.5">
                <span className="text-slate-400 font-bold text-xs">•</span>
                <span className="leading-snug text-xs">
                  Hotel Stay & Daily Breakfast
                </span>
              </li>
            )}
          </ul>

         

          {/* Bottom Border & Price Section */}
          <div className="border-t border-slate-100 pt-3 mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              {item.oldPrice && (
                <span className="text-xs text-slate-400 line-through font-normal">
                  {item.oldPrice}
                </span>
              )}
              <span className="md:text-xl font-semibold text-slate-950 tracking-tight">
                {item.price}
              </span>
            </div>

          
          </div>
          <button className="bg-primary w-full py-3 px-4 rounded-xl text-white mt-2 text-sm">View Package</button>
        </div>
      </div>
    </Link>
  );
}

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
    <section
      ref={containerRef}
      className="relative w-full h-auto lg:h-screen md:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden font-sans"
    >
      {/* Background Beach Image Slideshow with Smooth Scroll Parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute -inset-y-16 inset-x-0 z-0 h-[125%] w-full pointer-events-none"
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/35 to-black/20 z-10 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 md:w-10/12 mx-auto pt-24 pb-12 lg:py-0">
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
              Explore handpicked holiday packages, instant visa assistance, and
              24/7 dedicated support. Your dream journey starts right here with
              Middle East Travels.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact-us"
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
          <div className="w-full max-w-[300px] mx-auto flex md:hidden flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                {renderPackageCardContent(currentCard)}
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
                      ? "w-4 bg-secondary"
                      : "w-2.5 bg-white hover:bg-white/90 border border-slate-300/80 shadow-xs"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP RIGHT FLOATING PACKAGE CARD (4 Cards) */}
          <div className="hidden md:flex lg:col-span-5 flex-col items-center lg:items-end relative">
            <div className="w-full max-w-[300px] flex flex-col items-center">
              {/* Package Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  {renderPackageCardContent(currentCard)}
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
                        ? "w-4 bg-secondary"
                        : "w-2.5 bg-white hover:bg-white/90 border border-slate-300/80 shadow-xs"
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
