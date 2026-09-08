"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  FaPhone,
  FaEnvelope,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaChevronDown,
  FaCaretDown,
  FaPlane,
  FaBars,
  FaXmark,
  FaGlobe,
  FaArrowRight,
  FaClock,
} from "react-icons/fa6";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Tour packages",
    href: "/tour-packages",
    dropdown: [
      {
        name: "Dubai Luxury Getaways",
        href: "#",
      },
      {
        name: "Saudi Heritage Tours",
        href: "#",
      },
      {
        name: "Oman Nature & Fjords",
        href: "#",
      },
      {
        name: "Qatar Cultural Escapes",
        href: "#",
      },
    ],
  },

  {
    name: "Visa Services",
    href: "#",
    dropdown: [
      {
        name: "Tourist Visa",
        href: "#",
      },
      {
        name: "Business Visa",
        href: "#",
      },
      {
        name: "Express 24h Processing",
        href: "#",
      },
    ],
  },
  {
    name: "Other services",
    href: "#",
    dropdown: [
      {
        name: "Ticketing",
        href: "#",
      },

    ],
  },
  { name: "About us", href: "#" },
  { name: "Contact us", href: "#" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const topBarRef = useRef(null);
  const logoRef = useRef(null);
  const quoteBtnRef = useRef(null);

  const isItemActive = (item) => {
    if (!pathname) return false;
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  };

  // Handle scroll effect for sticky header
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
      // Top bar reveal animation
      if (topBarRef.current) {
        gsap.fromTo(
          topBarRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        );
      }
      // Logo bounce subtle entrance
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            delay: 0.2,
            ease: "back.out(1.4)",
          },
        );
      }
      // Pulse glow on Get a Quote button
      if (quoteBtnRef.current) {
        gsap.fromTo(
          quoteBtnRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power3.out",
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const toggleMobileDropdown = (name) => {
    setExpandedMobileItem(expandedMobileItem === name ? null : name);
  };

  // Framer Motion Variants for Mobile Menu Drawer
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
    <header className="w-full font-sans sticky top-0 z-50 transition-all duration-300">
      {/* ================= TOP ANNOUNCEMENT / CONTACT BAR ================= */}
      <div
        ref={topBarRef}
        className="bg-secondary hidden md:block text-white text-xs sm:text-sm py-2 border-b border-white/10"
      >
        <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          {/* Left Side: Contact Information */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href="tel:+918714806661"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <span className="rounded-full bg-white/10 p-2 group-hover:bg-primary group-hover:text-[#021b38] transition-all">
                <FaPhone className="text-xs" />
              </span>
              <span className="tracking-wide">+91 8714806661</span>
            </a>

            <a
              href="mailto:info@middleeasttravels.in"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <span className="rounded-full bg-white/10 p-2 group-hover:bg-primary group-hover:text-[#021b38] transition-all">
                <FaEnvelope className="text-xs" />
              </span>
              <span className="tracking-wide">info@middleeasttravels.in</span>
            </a>
          </div>

          {/* Right Side: Customer Support & Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <FaHeadset className="text-primary text-sm animate-pulse" />
              <span className="text-xs tracking-tight">
                24/7 Customer Support
              </span>
            </div>

            <div className="h-3 w-[1px] bg-white/20 hidden sm:block"></div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://m.facebook.com/middleeasttravelsandtourism?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:scale-110 hover:shadow-md transition-transform"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="https://www.instagram.com/middleeast_travels/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:scale-110 hover:shadow-md transition-transform"
              >
                <FaInstagram className="text-xs" />
              </a>

              <a
                href="https://wa.me/7025144666"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:scale-110 hover:shadow-md transition-transform"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION HEADER BAR ================= */}
      <div
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md py-2.5" : "shadow-sm py-3"
        }`}
      >
        <div className="w-10/12 mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative h-10 w-32 md:w-40">
              <Image
                src="/middleeast_black_logo.webp"
                alt="Logo"
                fill
                sizes="160px"
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
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors relative ${
                      active
                        ? "text-[#021b38]"
                        : "text-slate-700 hover:text-[#021b38]"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaCaretDown
                        className={`text-xs text-[#021b38] transition-transform duration-200 ${
                          activeDropdown === item.name
                            ? "rotate-180 text-[#021b38]"
                            : ""
                        }`}
                      />
                    )}

                    {/* Active Indicator Underline */}
                    {active && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#021B38]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 w-64 pt-2 z-50"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.name}
                                href={dropItem.href}
                                className="block p-2.5 rounded-lg hover:bg-blue-50/80 transition-colors group"
                              >
                                <div className="text-sm text-slate-800 group-hover:text-[#021b38] flex items-center justify-between">
                                  {dropItem.name}
                                  <FaArrowRight className="text-xs text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop "Get a Quote" Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              ref={quoteBtnRef}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm shadow-md hover:bg-[#073163] hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary focus:outline-none transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              <FaBars className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION DRAWER & ANIMATED OVERLAY ================= */}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              {/* Mobile Header Top */}
              <div>
                <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-28">
                      <Image
                        src="/middleeast_black_logo.webp"
                        alt="Logo"
                        fill
                        sizes="160px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-slate-200/70 hover:bg-slate-200 text-primary transition-colors"
                  >
                    <FaXmark className="text-lg" />
                  </button>
                </div>

                {/* Staggered Navigation List */}
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
                        {item.dropdown ? (
                          <div className="rounded-xl overflow-hidden border border-slate-100">
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className="w-full px-4 py-3 text-left font-semibold text-slate-800 flex items-center justify-between bg-slate-50/60 hover:bg-slate-100/80 transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                {item.name}
                                {active && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                )}
                              </span>
                              <FaChevronDown
                                className={`text-xs text-slate-500 transition-transform duration-300 ${
                                  expandedMobileItem === item.name
                                    ? "rotate-180 text-primary"
                                    : ""
                                }`}
                              />
                            </button>

                            {/* Accordion Content */}
                            <AnimatePresence>
                              {expandedMobileItem === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="bg-white px-3 py-2 space-y-1 divide-y divide-slate-50"
                                >
                                  {item.dropdown.map((drop) => (
                                    <Link
                                      key={drop.name}
                                      href={drop.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 px-3 rounded-lg text-sm text-slate-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                    >
                                      <div className="font-medium">
                                        {drop.name}
                                      </div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                              active
                                ? "bg-blue-50 text-primary border border-blue-100"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.nav>
              </div>

              {/* Mobile Menu Footer Action & Contacts */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-4">
                <button className="w-full py-3 rounded-xl bg-secondary hover:bg-primary text-white font-medium text-center shadow-md hover:bg-[#073163] active:scale-98 transition-all">
                  Get a Quote
                </button>

                <div className="space-y-2 text-xs text-slate-600">
                  <a
                    href="tel:+919995123456"
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/60 text-secondary hover:text-primary duration-200"
                  >
                    <FaPhone className="" />
                    <span>+91 9995 123 456</span>
                  </a>
                  <a
                    href="mailto:info@middleeasttravels.com"
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/60 text-secondary hover:text-primary duration-200"
                  >
                    <FaEnvelope className="" />
                    <span>info@middleeasttravels.com</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/919995123456"
                      className="w-8 h-8 rounded-full bg-secondary hover:bg-primary text-white flex items-center justify-center"
                    >
                      <FaWhatsapp className="text-sm" />
                    </a>
                    <a
                      href="https://instagram.com"
                      className="w-8 h-8 rounded-full bg-secondary hover:bg-primary text-white flex items-center justify-center"
                    >
                      <FaInstagram className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
