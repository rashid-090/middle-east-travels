"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion, useScroll, useTransform } from "framer-motion";
import TouchMarquee from "@/components/TouchMarquee";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
  FaPaperPlane,
  FaSpinner,
  FaCircleCheck,
  FaClock,
  FaArrowRight,
  FaHeadset,
  FaShieldHalved,
  FaCircleInfo,
  FaLocationArrow,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const branchesData = [
  {
    id: 1,
    city: "CALICUT",
    title: "METT Middle East Holidays & Travels pvt .ltd",
    image:
      "/branches/CALICUT.webp",
    address:
      "63\\2914 Mavoor Rd, Emerald Mall, Ground Floor Arayidathupalam, Kozhikode, Kerala 673004",
    email: "visas.mettholidays@gmail.com",
    phone: "+91 8139806661",
    mapUrl:
      "https://maps.app.goo.gl/7AvgkdMbR66MzNeRA",
  },
  {
    id: 2,
    city: "COCHIN",
    title: "Middle East Travel & Tours",
    image:
      "/branches/COCHIN.webp",
    address:
      "Jai Building, Ground Floor Opp : Vallamattam Estate Kurishupally Road Near Cochin Shippiyard Ravipuram Cochin 15",
    email: "mettcok@gmail.com",
    phone: "+91 9746873666",
    mapUrl:
      "https://maps.app.goo.gl/7AvgkdMbR66MzNeRA",
  },
  {
    id: 3,
    city: "BANGALORE",
    title: "Middle East travels & tourism",
    image:
      "/branches/BANGALORE.webp",
    address:
      "No 137 Business Point Brigade Road Albert street Bangalore 560 025",
    email: "visablr@middleeasttravels.in",
    phone: "+91 90723 08666",
    mapUrl:
      "https://maps.app.goo.gl/AMpgaVy44b2WQh636",
  },
  {
    id: 4,
    city: "DUBAI",
    title: "Middle East Holidays",
    image:
      "/branches/DUBAI.webp",
    address:
      "Al Dar Building. Mezzanine Floor, M22. Opp Coral Deira Hotel , Al Muraqqabat St Deira– Dubai 04222299",
    email: "info@mettholidays.ae",
    phone: "+971 52 633 6559",
    mapUrl:
      "https://maps.app.goo.gl/pQSkEP1AihUsipBg8",
  },
  {
    id: 5,
    city: "Puducherry",
    title: "Middle East Travels & Tourism",
    image:
      "/branches/Puducherry.webp",
    address:
      "No. 43, Maraimalai Adigal Salai, Orleanpet, Puducherry – 605005, Puducherry, India",
    email: "info@middleeasttravels.in",
    phone: "+91 87148 06661",
    mapUrl:
      "#",
  },
];

function renderBranchCard(branch) {
  const isPartner = branch.city.includes("PARTNER");
  const cleanCityName = branch.city.replace(" (PARTNER)", "");

  return (
    <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-200/90 transition-all duration-300 flex flex-col justify-between h-full group text-left overflow-hidden p-4 hover:-translate-y-1">
      <div>
        {/* Top Image Banner with Floating Glassmorphic City & Partner Badges */}
        <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-4 bg-slate-100 shadow-xs">
          <Image
            src={branch.image}
            alt={`${branch.city} Branch Landmark`}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 320px"
            quality={90}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top Left Glassmorphic City Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-md text-[11px] font-medium text-[#021b38] shadow-xs tracking-wider uppercase border border-white/50">
              {cleanCityName}
            </span>
          </div>

          {/* Top Right Partner Badge */}
          {isPartner && (
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#19a64b] text-white text-[10px] font-semibold tracking-wide uppercase shadow-xs">
                Partner
              </span>
            </div>
          )}
        </div>

        {/* Branch Title */}
        <h4 className="font-semibold text-[#021b38] xl:w-[70%] group-hover:text-[#19a64b] transition-colors text-sm sm:text-base leading-snug mb-2 min-h-[44px]">
          {branch.title}
        </h4>

        {/* Divider */}
        <div className="border-t border-slate-100 my-3" />

        {/* Contact Info List */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          {/* Address Row */}
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#19a64b] flex items-center justify-center shrink-0 text-xs mt-0.5">
              <FaLocationDot />
            </div>
            <p className="leading-relaxed text-slate-600 text-xs font-normal min-h-[60px]">
              {branch.address}
            </p>
          </div>

          {/* Email Row */}
          {branch.email && (
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#19a64b] flex items-center justify-center shrink-0 text-xs">
                <FaEnvelope />
              </div>
              <a
                href={`mailto:${branch.email}`}
                className="hover:text-[#19a64b] transition-colors truncate text-xs text-slate-600 font-normal"
              >
                {branch.email}
              </a>
            </div>
          )}

          {/* Phone Row */}
          {branch.phone && (
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#19a64b] flex items-center justify-center shrink-0 text-xs">
                <FaPhone />
              </div>
              <a
                href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                className="hover:text-[#19a64b] transition-colors text-xs font-semibold text-slate-800"
              >
                {branch.phone}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Full-width Get Direction Button */}
      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="w-full py-3 px-4 rounded-xl sm:rounded-2xl bg-[#19a64b] hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 mt-5 cursor-pointer"
      >
        <span>Get Direction</span>
        <FaPaperPlane className="text-xs group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const resetTimerRef = useRef(null);

  const heroRef = useRef(null);

  // Parallax Scroll Effect Setup for Hero Background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.15]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResetForm = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    setSubmitted(false);
    setPhoneError("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || !formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      setPhoneError("Please enter a valid phone number with country code");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);

    const messageText = `Hi Middle East Travels,\n\nI would like to make an inquiry:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone || "N/A"}\n✉️ *Email:* ${formData.email || "N/A"}\n🎯 *Service:* ${formData.service || "N/A"}\n💬 *Message:* ${formData.message || "N/A"}`;
    const whatsappUrl = `https://wa.me/7025144666?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setSubmitted(false);
      setPhoneError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <main className="flex-1 pb-16">
        {/* ================= HERO & BREADCRUMB BANNER WITH PARALLAX BACKGROUND ================= */}
        <section
          ref={heroRef}
          className="relative w-full text-white py-16 sm:py-20 lg:py-28 overflow-hidden flex items-center min-h-[380px] sm:min-h-[420px]"
        >
          {/* Background Image with Parallax Scroll Effect (No solid background color) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
              style={{ y: bgY, scale: bgScale }}
              className="absolute -inset-y-16 inset-x-0 w-full h-[140%]"
            >
              <Image
                src="/cntheader.webp"
                alt="Middle East Travel Destination Parallax Background"
                fill
                priority
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
                quality={95}
                className="object-cover object-center"
              />
            </motion.div>

            {/* Premium Gradient Overlay for Crystal Clear Text Contrast & Glow Accents */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/25 to-slate-950/45 z-10 pointer-events-none" />
          </div>

          <div className="w-11/12 mx-auto relative z-20 space-y-4">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-[#19a64b] font-semibold">Contact Us</span>
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-2xl space-y-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#19a64b] text-xs font-semibold backdrop-blur-md border border-white/15 shadow-sm">
                <HiSparkles className="text-sm" />
                <span>We're Here to Help</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Get In <span className="text-[#19a64b]">Touch</span> With Us
              </h1>

              <p className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
                Have questions about tour packages, visa approvals, or custom
                travel itineraries? Reach out to our dedicated team for fast
                and friendly assistance.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 4 QUICK CONTACT CARDS GRID ================= */}
        <section className="w-11/12 mx-auto -mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Phone */}
            <a
              href="tel:+918714806661"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#19a64b] border border-emerald-100 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                  Call Us
                </span>
              </div>
              <div>
                <h3 className="text-xs text-slate-500 font-medium mb-1">
                  Phone Numbers
                </h3>
                <p className="text-sm font-bold text-[#021b38] group-hover:text-[#19a64b] transition-colors">
                  +91 87148 06661
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  +91 70251 44666
                </p>
              </div>
            </a>

            {/* Card 2: WhatsApp */}
            <a
              href="https://wa.me/7025144666"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaWhatsapp />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Instant
                </span>
              </div>
              <div>
                <h3 className="text-xs text-slate-500 font-medium mb-1">
                  WhatsApp Support
                </h3>
                <p className="text-sm font-bold text-[#021b38] group-hover:text-emerald-600 transition-colors">
                  +91 70251 44666
                </p>
                <p className="text-xs text-slate-400 font-normal">
                  24/7 Fast Chat Advice
                </p>
              </div>
            </a>

            {/* Card 3: Email */}
            <a
              href="mailto:info@middleeasttravels.in"
              className="bg-white rounded-2xl sm:rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                  Mail
                </span>
              </div>
              <div>
                <h3 className="text-xs text-slate-500 font-medium mb-1">
                  Email Address
                </h3>
                <p className="text-sm font-bold text-[#021b38] group-hover:text-sky-600 transition-colors truncate">
                  info@middleeasttravels.in
                </p>
                <p className="text-xs text-slate-400 font-normal">
                  Quick Reply Guaranteed
                </p>
              </div>
            </a>

            {/* Card 4: Working Hours */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center text-lg">
                  <FaClock />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  Hours
                </span>
              </div>
              <div>
                <h3 className="text-xs text-slate-500 font-medium mb-1">
                  Office Timings
                </h3>
                <p className="text-sm font-bold text-[#021b38]">
                  Mon - Sat: 9 AM - 7 PM
                </p>
                <p className="text-xs text-slate-400 font-normal">
                  Sun: On-Call Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN 2-COLUMN SECTION: FORM & MAP ================= */}
        <section className="w-11/12 mx-auto pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: CONTACT FORM (7 COLS) */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
                  Send Us A <span className="text-[#19a64b]">Message</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Fill out the form below and our travel consultants will get in
                  touch with you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-center space-y-3 p-6">
                  <div className="w-14 h-14 rounded-full bg-[#19a64b] text-white flex items-center justify-center text-2xl mx-auto shadow-md">
                    <FaCircleCheck />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Thank you for contacting Middle East Travels. One of our
                    travel experts will contact you within 30 minutes.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-3 px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#19a64b] hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#19a64b] focus:outline-none transition-all "
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Phone Number *
                      </label>
                      <div className={phoneError ? "[&_.PhoneInput]:border-red-400 [&_.PhoneInput]:focus-within:border-red-500" : ""}>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={formData.phone}
                          onChange={(val) => {
                            setFormData({ ...formData, phone: val || "" });
                            if (phoneError && val && isValidPhoneNumber(val)) {
                              setPhoneError("");
                            }
                          }}
                          placeholder="Enter phone number"
                        />
                      </div>
                      {phoneError && (
                        <p className="text-red-500 text-[11px] mt-1 font-medium">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#19a64b] focus:outline-none transition-all "
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4  py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#19a64b] focus:outline-none transition-all cursor-pointer "
                      >
                        <option value="">Select Service</option>
                        <option value="Tour Packages">Tour Packages</option>
                        <option value="Visa Services">Visa Services</option>
                        <option value="Flight Tickets">Flight Tickets</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1.5">
                      Your Message / Travel Request *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your destination, dates, number of travelers, or any specific requirements..."
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#19a64b] focus:outline-none transition-all resize-none "
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 shadow-md active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-sm" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: LOCATION MAP & BRANCH DETAILS (5 COLS) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office Info Box */}
              <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#19a64b] flex items-center justify-center text-base shrink-0">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#021b38] leading-tight">
                      Kozhikode Head Office
                    </h3>
                    <p className="text-xs text-slate-500">Kerala, India</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Shobha Tower, 5/3412L, Mavoor Rd, Arayidathupalam, Kozhikode,
                  Kerala 673004
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <FaHeadset className="text-[#19a64b] text-sm" />
                    <span>24/7 Traveler Assistance Hotline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldHalved className="text-[#19a64b] text-sm" />
                    <span>Government Registered Travel Agency</span>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white rounded-[2rem] border border-slate-200/80 p-2 shadow-xs overflow-hidden h-[280px]">
                <iframe
                  title="Middle East Travels Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.061918349258!2d75.7923!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE1JzMxLjciTiA3NcKwNDcnMzMiRQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1.5rem" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              
            </div>
          </div>
        </section>

        {/* ================= BRANCHES ADDRESS & DETAILS ================= */}
        <section className="w-11/12 mx-auto pt-14 sm:pt-16">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-8 space-y-2.5">
          
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#021b38] tracking-tight">
              Visit Our <span className="text-[#19a64b]">Branch Offices</span>
            </h2>
           
          </div>

          {/* Responsive Cards Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {branchesData.map((branch) => (
              <div key={branch.id} className="h-full">
                {renderBranchCard(branch)}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
