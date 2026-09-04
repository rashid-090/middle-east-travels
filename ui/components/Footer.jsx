"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGlobe,
  FaPlane,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaArrowUp,
  FaPaperPlane,
  FaShieldHalved,
  FaHeadset,
  FaCreditCard,
  FaAward,
} from "react-icons/fa6";

export default function Footer() {
  const [showWhatsApp, setShowWhatsApp] = React.useState(false);
  const [isRinging, setIsRinging] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show WhatsApp button only after scrolling down 200px
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger ring/shake animation every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsRinging(true);
      setTimeout(() => setIsRinging(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-secondary text-white font-sans border-t border-slate-800/80 relative z-10 overflow-hidden">
      {/* Background Glow Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ================= PROMO CTA BANNER (MATCHING EXACT REFERENCE) ================= */}
      <div className="w-11/12 mx-auto py-10  border-b border-slate-800/80">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#021b38] border border-blue-900/40 p-6 sm:p-8 lg:p-10 min-h-[220px] flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Background Mountain/Hiker Image Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85"
              alt="Hiker overlooking scenic mountain landscape"
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-[center_35%]"
            />
            {/* Dark Navy Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-[#021b38]/20 to-[#021b38]/5 w-full " />
            <div className="absolute inset-0 bg-black/30 md:hidden" />
          </div>

          {/* Left Text Content & Action Buttons */}
          <div className="relative z-10 space-y-4 max-w-xl text-center md:text-left">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Let's Make Your Next Trip Unforgettable
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm font-normal">
                Get personalized packages, best deals & expert advice.
              </p>
            </div>

            {/* 2 CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-primary hover:bg-white text-white hover:text-black font-semibold text-xs sm:text-sm shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/7025144666"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold text-xs sm:text-sm backdrop-blur-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <FaWhatsapp className="text-emerald-400 text-base" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* ================= MAIN MULTI-COLUMN FOOTER GRID ================= */}
      <div className="w-11/12 mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 group inline-block focus:outline-none"
            >
              <div className="relative h-10 w-44">
                            <Image
                              src="/middleeast_white_logo.webp"
                              alt="Logo"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Your trusted travel partner for luxury Middle East holidays, fast
              visa approvals, flight bookings, and 24/7 dedicated customer
              assistance.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-1">
              <a
                href="tel:+918714806661"
                className="flex items-center gap-3 hover:text-primary transition-all duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaPhone className="text-xs" />
                </span>
                <span className="font-medium">+91 87148 06661</span>
              </a>

              <a
                href="mailto:info@middleeasttravels.in"
                className="flex items-center gap-3 hover:text-primary transition-all duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaEnvelope className="text-xs" />
                </span>
                <span className="font-medium">info@middleeasttravels.in</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <FaLocationDot className="text-xs" />
                </span>
                <span className="leading-snug">
                 Shobha Tower, 5/3412L, Mavoor Rd, Arayidathupalam, Kozhikode, Kerala 673004
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Top Destinations (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide border-l-2 border-primary pl-3">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link
                  href="/holidays/dubai"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Dubai & Abu Dhabi Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/saudi"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Saudi Arabia & AlUla Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/oman"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Oman Fjords & Muscat Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/qatar"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Qatar Cultural & Souq Escapes
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/thailand"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Thailand Beach Getaways
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/bali"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Bali Island Resorts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide border-l-2 border-primary pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link
                  href="/services/holidays"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Customized Holiday Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/visa"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Express Tourist & Business Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/flights"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  International Flight Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Luxury Hotel & Resort Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/transfers"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  VIP Airport Chauffeur Pickup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/insurance"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Worldwide Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide border-l-2 border-primary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Travel Blog & Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM COPYRIGHT BAR ================= */}
      <div className="border-t border-slate-800/80 bg-secondary py-6">
        <div className="w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Middle East Travels. All rights
            reserved.
          </p>

          {/* Trust Badges & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://m.facebook.com/middleeasttravelsandtourism?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="https://www.instagram.com/middleeast_travels/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:-translate-y-1 transition-all"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://wa.me/7025144666"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:-translate-y-1 transition-all"
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-8 h-8 rounded-lg bg-primary/20 hover:bg-primary border border-blue-500/30 text-blue-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= FLOATING STICKY WHATSAPP BUTTON WITH SHAKE RING ANIMATION ================= */}
      {showWhatsApp && (
        <a
          href="https://wa.me/7025144666"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-20 md:bottom-32 right-5 md:right-10 z-50 group flex items-center justify-center cursor-pointer focus:outline-none"
        >
          {/* Outer Pulsing Glow Rings */}
          <span className="absolute inline-flex h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-emerald-500/40 animate-ping opacity-75" />
          <span className="absolute inline-flex h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-emerald-500/20 animate-pulse" />

          {/* Main Floating WhatsApp Circle Button with Ring Shake Animation */}
          <div
            className={`relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl sm:text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 ${
              isRinging ? "" : ""
            }`}
          >
            <FaWhatsapp />
          </div>

          {/* Tooltip on Hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700">
            Chat with us on WhatsApp
          </span>
        </a>
      )}
    </footer>
  );
}
