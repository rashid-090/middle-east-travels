"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Tour Packages",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);

  // Parallax Scroll Effect Setup for Hero Background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.15]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
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
                src="https://images.unsplash.com/photo-1649856092355-eee498b1d0f2?q=100"
                alt="Middle East Travel Destination Parallax Background"
                fill
                priority
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
                    onClick={() => setSubmitted(false)}
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
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#19a64b] focus:outline-none transition-all "
                      />
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
                        className="w-full px-4  py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-[#19a64b] focus:outline-none transition-all cursor-pointer "
                      >
                        <option value="Tour Packages">Holiday Tour Packages</option>
                        <option value="Visa Services">Visa Processing</option>
                        <option value="Flight Bookings">Flight Tickets</option>
                        <option value="Hotel Bookings">Hotel Reservations</option>
                        <option value="Custom Itinerary">Customized Trip</option>
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
      </main>
    </div>
  );
}
