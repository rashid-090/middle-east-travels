"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tour packages", href: "/tour-packages" },
  { name: "Visa Services", href: "#" },
  { name: "Other services", href: "#" },
  { name: "About us", href: "/about-us" },
  { name: "Contact us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const logoRef = useRef(null);
  const quoteBtnRef = useRef(null);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  const isItemActive = (item) => {
    if (!pathname) return false;
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  };

  // Handle scroll effect for header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Initial Entrance Animation using GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.1,
            ease: "power2.out",
          }
        );
      }
      if (quoteBtnRef.current) {
        gsap.fromTo(
          quoteBtnRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power3.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const backdropVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const drawerVariants = {
    closed: {
      x: "100%",
      opacity: 0.5,
      transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const menuListVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 30, y: 10 },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <header
      className={`w-full font-sans transition-all duration-300 z-50 ${
        isHome ? "fixed top-0 left-0 right-0" : "sticky top-0"
      } ${
        isTransparent
          ? "bg-transparent py-4 border-b border-white/10"
          : "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
      }`}
    >
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div ref={logoRef} className="relative h-10 w-36 md:w-44">
            <Image
              src={
                isTransparent
                  ? "/middleeast_white_logo.webp"
                  : "/middleeast_black_logo.webp"
              }
              alt="Middle East Travels Logo"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-2 text-sm font-medium flex items-center transition-colors relative ${
                  isTransparent
                    ? active
                      ? "text-white font-bold"
                      : "text-white/90 hover:text-white"
                    : active
                    ? "text-[#021b38] font-bold"
                    : "text-slate-700 hover:text-[#021b38]"
                }`}
              >
                <span>{item.name}</span>

                {/* Pulse Dot Indicator on Right Side of Active Menu Item */}
                {active && (
                  <span className="relative flex h-2 w-2 shrink-0 ml-2">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isTransparent ? "bg-white" : "bg-[#19a64b]"
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        isTransparent ? "bg-white" : "bg-[#19a64b]"
                      }`}
                    />
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop "Get a Quote" Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            ref={quoteBtnRef}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#19a64b] text-white font-medium text-sm shadow-md hover:bg-emerald-700 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Get a Quote
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl focus:outline-none transition-colors ${
              isTransparent
                ? "bg-white/15 hover:bg-white/25 text-white"
                : "bg-[#19a64b]/10 hover:bg-[#19a64b]/20 text-[#19a64b]"
            }`}
            aria-label="Toggle Mobile Menu"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION DRAWER ================= */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop Blur Overlay */}
                <motion.div
                  key="backdrop"
                  variants={backdropVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[999] lg:hidden"
                />

                {/* Slide-out Drawer */}
                <motion.div
                  key="drawer"
                  variants={drawerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[1000] shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden text-slate-900"
                >
                  {/* Mobile Header Top */}
                  <div>
                    <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                      <div className="flex items-center gap-2">
                        <div className="relative h-10 w-32">
                          <Image
                            src="/middleeast_black_logo.webp"
                            alt="Middle East Travels Logo"
                            fill
                            sizes="160px"
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 rounded-lg bg-slate-200/70 hover:bg-slate-200 text-slate-700 transition-colors"
                      >
                        <FaXmark className="text-lg" />
                      </button>
                    </div>

                    {/* Direct Navigation List (No Submenus) */}
                    <motion.nav
                      variants={menuListVariants}
                      initial="closed"
                      animate="open"
                      className="p-4 space-y-1"
                    >
                      {navItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <motion.div key={item.name} variants={menuItemVariants}>
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                                active
                                  ? "bg-emerald-50 text-[#19a64b] border border-emerald-100"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{item.name}</span>

                              {/* Pulse Dot Indicator on Right Side of Active Mobile Item */}
                              {active && (
                                <span className="relative flex h-2.5 w-2.5 shrink-0 ml-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19a64b] opacity-75" />
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#19a64b]" />
                                </span>
                              )}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.nav>
                  </div>

                  {/* Mobile Menu Footer Action & Contacts */}
                  <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-3">
                    <button className="w-full py-3 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-semibold text-center shadow-md cursor-pointer transition-all">
                      Get a Quote
                    </button>

                    <div className="space-y-2 text-xs text-slate-600">
                      <a
                        href="tel:+918714806661"
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/60 text-slate-800 hover:text-[#19a64b] duration-200"
                      >
                        <FaPhone className="text-[#19a64b]" />
                        <span>+91 8714806661</span>
                      </a>
                      <a
                        href="mailto:info@middleeasttravels.in"
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/60 text-slate-800 hover:text-[#19a64b] duration-200"
                      >
                        <FaEnvelope className="text-[#19a64b]" />
                        <span>info@middleeasttravels.in</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-2">
                        <a
                          href="https://wa.me/7025144666"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="WhatsApp"
                          className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                        >
                          <FaWhatsapp className="text-sm" />
                        </a>
                        <a
                          href="https://www.instagram.com/middleeast_travels/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Instagram"
                          className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors"
                        >
                          <FaInstagram className="text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
