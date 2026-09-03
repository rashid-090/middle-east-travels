"use client";

import React from "react";
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
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#011226] text-white font-sans border-t border-slate-800/80 relative z-10 overflow-hidden">
      {/* Background Glow Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ================= NEWSLETTER CTA BANNER ================= */}
      <div className="w-11/12 mx-auto pt-12 pb-10 border-b border-slate-800/80">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#021b38] via-[#042852] to-[#011630] p-8 lg:p-10 border border-blue-900/40 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-400/30">
              <FaPaperPlane className="text-amber-400" /> Exclusive Offers
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Stay Inspired for Your Next Journey
            </h3>
            <p className="text-slate-300 text-sm font-normal leading-relaxed">
              Subscribe to get secret holiday deals, express visa updates, and
              curated travel guides sent directly to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full sm:w-80">
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                suppressHydrationWarning
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 backdrop-blur-md transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-medium text-sm shadow-lg hover:shadow-amber-400/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
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
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-[#021b38] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <FaGlobe className="text-2xl text-blue-200" />
              </div>
              <div className="flex flex-col mt-2">
                <span className="font-bold text-lg tracking-tight text-white leading-none group-hover:text-blue-900 transition-colors">
                  MIDDLE EAST
                </span>
                <span className="font-medium text-[10px] tracking-wider text-blue-400 leading-tight">
                  T R A V E L S
                </span>
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
                href="tel:+919995123456"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <FaPhone className="text-xs" />
                </span>
                <span className="font-medium">+91 9995 123 456</span>
              </a>

              <a
                href="mailto:info@middleeasttravels.com"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <FaEnvelope className="text-xs" />
                </span>
                <span className="font-medium">info@middleeasttravels.com</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <FaLocationDot className="text-xs" />
                </span>
                <span className="leading-snug">
                  Middle East Travels Tower, Business Bay, Dubai, UAE & Kerala,
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Top Destinations (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide border-l-2 border-blue-500 pl-3">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link
                  href="/holidays/dubai"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Dubai & Abu Dhabi Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/saudi"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Saudi Arabia & AlUla Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/oman"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Oman Fjords & Muscat Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/qatar"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Qatar Cultural & Souq Escapes
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/thailand"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Thailand Beach Getaways
                </Link>
              </li>
              <li>
                <Link
                  href="/holidays/bali"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Bali Island Resorts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide border-l-2 border-blue-500 pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link
                  href="/services/holidays"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Customized Holiday Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/visa"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Express Tourist & Business Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/flights"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  International Flight Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Luxury Hotel & Resort Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/transfers"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  VIP Airport Chauffeur Pickup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/insurance"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Worldwide Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide border-l-2 border-blue-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Travel Blog & Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM COPYRIGHT BAR ================= */}
      <div className="border-t border-slate-800/80 bg-[#000d1c] py-6">
        <div className="w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Middle East Travels. All rights
            reserved.
          </p>

          {/* Trust Badges & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:-translate-y-1 transition-all"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://wa.me/919995123456"
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
              className="w-8 h-8 rounded-lg bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
