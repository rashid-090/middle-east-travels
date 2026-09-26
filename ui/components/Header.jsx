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
  FaChevronDown,
} from "react-icons/fa6";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tour packages", href: "/tour-packages" },
  { name: "Visa Services", href: "#" },
  {
    name: "Other services",
    href: "#",
    subMenu: [
      { name: "Attestation Service", href: "/attestation-service" },
      { name: "Book Flights", href: "/book-flights" },
      { name: "Travel Insurance", href: "/travel-insurance" },
      { name: "Immigration Service", href: "/immigration-service" },
    ],
  },
  { name: "About us", href: "/about-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileSubmenu(null);
  }, [pathname]);

  const toggleMobileSubmenu = (itemName) => {
    setExpandedMobileSubmenu((prev) => (prev === itemName ? null : itemName));
  };

  const logoRef = useRef(null);
  const quoteBtnRef = useRef(null);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  const isItemActive = (item) => {
    if (!pathname) return false;
    if (item.href && item.href !== "#") {
      if (item.href === "/") {
        return pathname === "/";
      }
      if (pathname.startsWith(item.href)) {
        return true;
      }
    }
    if (
      item.subMenu &&
      item.subMenu.some(
        (sub) => sub.href !== "#" && pathname.startsWith(sub.href)
      )
    ) {
      return true;
    }
    return false;
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
      <div className="w-11/12 mx-auto flex items-center justify-between">
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
              loading="eager"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;

            if (hasSubMenu) {
              return (
                <div key={item.name} className="relative group py-2">
                  <button
                    type="button"
                    className={`px-3.5 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors relative cursor-pointer focus:outline-none ${
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
                    <FaChevronDown className="text-[10px] transition-transform duration-200 group-hover:rotate-180 opacity-75" />

                    {/* Pulse Dot Indicator on Right Side of Active Menu Item */}
                    {active && (
                      <span className="relative flex h-2 w-2 shrink-0 ml-1">
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
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 ease-out z-50 pointer-events-none group-hover:pointer-events-auto min-w-[200px]">
                    <div
                      className={`p-1.5 rounded-2xl shadow-xl border backdrop-blur-md ${
                        isTransparent
                          ? "bg-[#021b38]/95 border-white/10 text-white"
                          : "bg-white border-slate-100 text-slate-800"
                      }`}
                    >
                      {item.subMenu.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                              isTransparent
                                ? isSubActive
                                  ? "bg-white/15 text-white font-bold"
                                  : "text-white/80 hover:bg-white/10 hover:text-white"
                                : isSubActive
                                ? "bg-emerald-50 text-[#19a64b] font-bold"
                                : "text-slate-700 hover:bg-emerald-50/60 hover:text-[#19a64b]"
                            }`}
                          >
                            <span>{subItem.name}</span>
                            {isSubActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#19a64b]" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

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
          <Link
            href="/contact-us"
            ref={quoteBtnRef}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#19a64b] text-white font-medium text-sm shadow-md hover:bg-emerald-700 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Contact Us
          </Link>

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
                            loading="eager"
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

                    {/* Navigation List */}
                    <motion.nav
                      variants={menuListVariants}
                      initial="closed"
                      animate="open"
                      className="p-4 space-y-1"
                    >
                      {navItems.map((item) => {
                        const active = isItemActive(item);
                        const hasSubMenu =
                          item.subMenu && item.subMenu.length > 0;
                        const isSubOpen = expandedMobileSubmenu === item.name;

                        return (
                          <motion.div
                            key={item.name}
                            variants={menuItemVariants}
                          >
                            {hasSubMenu ? (
                              <div className="space-y-1">
                                <button
                                  type="button"
                                  onClick={() => toggleMobileSubmenu(item.name)}
                                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all text-left cursor-pointer ${
                                    active || isSubOpen
                                      ? "bg-emerald-50/70 text-[#19a64b] border border-emerald-100/80"
                                      : "text-slate-700 hover:bg-slate-50"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span>{item.name}</span>
                                    {active && (
                                      <span className="relative flex h-2.5 w-2.5 shrink-0 ml-1">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19a64b] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#19a64b]" />
                                      </span>
                                    )}
                                  </div>
                                  <FaChevronDown
                                    className={`text-xs text-slate-500 transition-transform duration-200 ${
                                      isSubOpen
                                        ? "rotate-180 text-[#19a64b]"
                                        : ""
                                    }`}
                                  />
                                </button>

                                <AnimatePresence>
                                  {isSubOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                      }}
                                      className="overflow-hidden pl-4 space-y-1 border-l-2 border-emerald-100 ml-3"
                                    >
                                      {item.subMenu.map((subItem) => {
                                        const isSubActive =
                                          pathname === subItem.href;
                                        return (
                                          <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            onClick={() =>
                                              setIsMobileMenuOpen(false)
                                            }
                                            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                              isSubActive
                                                ? "bg-emerald-100/60 text-[#19a64b] font-semibold"
                                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                            }`}
                                          >
                                            <span>{subItem.name}</span>
                                            {isSubActive && (
                                              <span className="w-2 h-2 rounded-full bg-[#19a64b]" />
                                            )}
                                          </Link>
                                        );
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
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
                            )}
                          </motion.div>
                        );
                      })}
                    </motion.nav>
                  </div>

                  {/* Mobile Menu Footer Action & Contacts */}
                  <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-3">
                    <Link
                      href="/contact-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full py-3 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-semibold text-center shadow-md cursor-pointer transition-all block"
                    >
                      Contact Us
                    </Link>

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
