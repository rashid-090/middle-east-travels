"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playball } from "next/font/google";
import gsap from "gsap";
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
  FaPlaneDeparture,
  FaSuitcaseRolling,
  FaPassport,
  FaGlobe,
  FaCompass,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

import { HiSparkles } from "react-icons/hi2";
import { heroBanners, heroCardsData } from "@/data/allData.js";
import { client, urlFor } from "@/lib/sanity";

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

function PackageCardSkeleton() {
  return (
    <div className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-2xl p-3 flex flex-col justify-between h-full w-full animate-pulse">
      <div>
        <div className="w-full aspect-video md:aspect-[4/3] rounded-[1.75rem] bg-slate-200 mb-3.5" />
        <div className="px-1 pt-1 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="h-5 bg-slate-200 rounded-md w-3/4" />
            <div className="h-4 bg-slate-200 rounded-md w-1/6" />
          </div>
          <div className="h-3 bg-slate-200 rounded-md w-1/2" />
          <div className="space-y-1.5 pt-1">
            <div className="h-3 bg-slate-200 rounded-md w-5/6" />
            <div className="h-3 bg-slate-200 rounded-md w-4/6" />
          </div>
          <div className="border-t border-slate-100 pt-3 mt-3 flex items-center justify-between">
            <div className="h-6 bg-slate-200 rounded-md w-1/3" />
          </div>
          <div className="h-11 bg-slate-200 rounded-xl w-full mt-2" />
        </div>
      </div>
    </div>
  );
}

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
            priority
            loading="eager"
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
                 INR ₹{item.oldPrice}
                </span>
              )}
              <span className="md:text-xl font-semibold text-slate-950 tracking-tight">
                INR ₹{item.price}
              </span>
            </div>
          </div>
          <button className="bg-primary w-full py-3 px-4 rounded-xl font-medium text-white mt-2 text-sm">
            View Package
          </button>
        </div>
      </div>
    </Link>
  );
}

// Staggered reveal animation variants for text, heading, and buttons
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const revealItemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const changingTravelIcons = [
  { icon: FaPlaneDeparture, key: "plane" },
  { icon: FaSuitcaseRolling, key: "suitcase" },
  { icon: FaPassport, key: "passport" },
  { icon: FaGlobe, key: "globe" },
  { icon: FaCompass, key: "compass" },
  { icon: FaUmbrellaBeach, key: "beach" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const [animateState, setAnimateState] = useState("hidden");
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const iconTimer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % changingTravelIcons.length);
    }, 2000);
    return () => clearInterval(iconTimer);
  }, []);

  useEffect(() => {
    // Function to trigger the reveal animation
    const triggerReveal = () => {
      setAnimateState("visible");
    };

    // Check if initial preloader is active or running
    const isLoaderRunning =
      (typeof window !== "undefined" && window.__INITIAL_LOADER_RUNNING) ||
      (typeof document !== "undefined" &&
        document.body.style.overflow === "hidden");

    let timer;
    if (isLoaderRunning) {
      // Listen for loader completion event
      const handleDone = () => {
        triggerReveal();
      };

      if (typeof window !== "undefined") {
        window.addEventListener("initialLoaderDone", handleDone);
      }

      // Fallback timer (1900ms) to guarantee animation triggers after loader
      timer = setTimeout(triggerReveal, 1900);

      return () => {
        if (timer) clearTimeout(timer);
        if (typeof window !== "undefined") {
          window.removeEventListener("initialLoaderDone", handleDone);
        }
      };
    } else {
      // Fast reveal for standard route navigation
      timer = setTimeout(triggerReveal, 150);
      return () => clearTimeout(timer);
    }
  }, []);

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
  const [cardsList, setCardsList] = useState(() => heroCardsData.slice(0, 4));
  const [isLoading, setIsLoading] = useState(true);

  // Fetch 4 banner cards from Sanity where bannerCard == true
  useEffect(() => {
    async function fetchBannerCards() {
      try {
        setIsLoading(true);
        const query = `*[_type == "tourPackage" && bannerCard == true] | order(orderRank asc, _createdAt desc)[0...4] {
          _id,
          title,
          "id": id.current,
          rating,
          duration,
          price,
          oldPrice,
          image,
          highlights
        }`;
        let data = await client.fetch(query);

        // Fallback if fewer than 4 packages have bannerCard == true
        if (!data || data.length < 4) {
          const fallbackQuery = `*[_type == "tourPackage"] | order(orderRank asc, _createdAt desc)[0...4] {
            _id,
            title,
            "id": id.current,
            rating,
            duration,
            price,
            oldPrice,
            image,
            highlights
          }`;
          const fallbackData = await client.fetch(fallbackQuery);
          if (fallbackData && fallbackData.length > 0) {
            const existingIds = new Set((data || []).map((item) => item._id));
            const extra = fallbackData.filter((item) => !existingIds.has(item._id));
            data = [...(data || []), ...extra].slice(0, 4);
          }
        }

        if (data && data.length > 0) {
          const formatted = data.map((item) => {
            const imageUrl = item.image
              ? urlFor(item.image).width(800).auto("format").quality(80).url()
              : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85";
            return {
              id: item.id || item._id,
              title: item.title,
              rating: item.rating ? Number(item.rating) : 4.8,
              duration: item.duration || "5 Days 4 Nights",
              price: item.price || "INR 45,500",
              oldPrice: item.oldPrice || "",
              image: imageUrl,
              highlights: item.highlights || [],
              link: `/tour-packages/${item.id || item._id}`,
            };
          });
          setCardsList(formatted);
        }
      } catch (err) {
        console.error("Error fetching hero banner cards from Sanity:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBannerCards();
  }, []);

  // Auto change background banner every 5 seconds (5000ms)
  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setActiveBannerIndex((prevIndex) => (prevIndex + 1) % heroBanners.length);
    }, 5000);

    return () => clearInterval(bannerTimer);
  }, []);

  // Auto change package card every 5 seconds (5000ms)
  useEffect(() => {
    if (cardsList.length === 0) return;
    const cardTimer = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cardsList.length);
    }, 5000);

    return () => clearInterval(cardTimer);
  }, [cardsList.length]);

  const currentBanner = heroBanners[activeBannerIndex];
  const currentCard = cardsList[activeCardIndex % cardsList.length] || cardsList[0];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-auto lg:h-screen md:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
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
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
            {/* Gradient Overlays for optimal text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/10 z-10 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 mx-auto pt-24 pb-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animateState}
            className="lg:col-span-7 space-y-3 md:space-y-7"
          >
            {/* Headlines */}
            <div className="space-y-1 sm:space-y-2 overflow-hidden">
              <motion.h1
                variants={revealItemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.15]"
              >
                Dream It. Plan It.
              </motion.h1>
              <motion.h1
                variants={revealItemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-transparent [-webkit-text-stroke:1.5px_white] tracking-tight leading-[1.15]"
              >
                Travel It.
              </motion.h1>
              {/* changing icon */}

              {/* changing icon */}
            </div>

            {/* Paragraph Subtitle */}
            <motion.p
              variants={revealItemVariants}
              className="text-white text-xs sm:text-sm md:text-base font-normal max-w-md leading-relaxed"
            >
              Your journey starts here! A best travel agency in Calicut for
              domestic and international tours.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={revealItemVariants}
              className="flex flex-wrap items-center gap-2 md:gap-4 pt-3 md:pt-4"
            >
              {/* Apply for Visa - Modern Pill CTA */}
              <Link
                href="/visas"
                className="group relative inline-flex items-center gap-2.5 px-6 md:px-9 py-5 md:py-4 rounded-2xl bg-gradient-to-r from-primary via-[#1cb854] to-emerald-600 text-white font-semibold text-xs md:text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <FaPassport className="text-sm md:text-base text-white/90 group-hover:rotate-12 transition-transform duration-300" />
                <span>Apply for Visa</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Book Flights - Modern Glassmorphic Pill CTA */}
              <Link
                href="/book-flights"
                className="group inline-flex items-center gap-2.5 px-6 md:px-9 py-3.5 md:py-3 rounded-2xl bg-white/95 hover:bg-white backdrop-blur-md border border-white/80 text-slate-950 font-semibold text-xs md:text-sm shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>Book Flights</span>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                  <MdFlight className="text-xs md:text-sm rotate-90 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* MOBILE PACKAGE CARD DISPLAY */}
          <div className="w-full max-w-[300px] mx-auto flex md:hidden flex-col justify-center items-center">
            {isLoading ? (
              <PackageCardSkeleton />
            ) : (
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
            )}

            {/* CARD ONLY PAGINATION DOTS (4 Cards) */}
            <div className="flex items-center justify-center gap-2 pt-3">
              {cardsList.map((card, idx) => (
                <button
                  key={card.id || idx}
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
              {isLoading ? (
                <PackageCardSkeleton />
              ) : (
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
              )}

              {/* CARD ONLY PAGINATION DOTS (4 Cards) */}
              <div className="flex items-center justify-center gap-2 pt-3">
                {cardsList.map((card, idx) => (
                  <button
                    key={card.id || idx}
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
