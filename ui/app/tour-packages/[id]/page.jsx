"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { tourPackagesData } from "@/data/allData";
import {
  FaAngleRight,
  FaStar,
  FaClock,
  FaLocationDot,
  FaCheck,
  FaXmark,
  FaCalendarDays,
  FaUserGroup,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
  FaHotel,
  FaUtensils,
  FaCar,
  FaShieldHalved,
  FaFire,
  FaCrown,
  FaTag,
  FaMugHot,
  FaBinoculars,
  FaShareNodes,
  FaCircleCheck,
  FaCircleXmark,
  FaPercent,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

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
      return <FaHotel className="text-[#19a64b] text-sm" />;
    case "breakfast":
      return <FaMugHot className="text-[#19a64b] text-sm" />;
    case "transfer":
      return <FaCar className="text-[#19a64b] text-sm" />;
    case "sightseeing":
      return <FaBinoculars className="text-[#19a64b] text-sm" />;
    default:
      return <FaHotel className="text-[#19a64b] text-sm" />;
  }
};

export default function TourPackageDetailPage() {
  const params = useParams();
  const packageId = params?.id;

  const pkg = tourPackagesData.find((p) => p.id === packageId) || tourPackagesData[0];

  const [activeTab, setActiveTab] = useState("itinerary");
  const [activeImage, setActiveImage] = useState(pkg.image);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", date: "", guests: "2", message: "" });
    }, 4000);
  };

  // Related Packages (excluding current)
  const relatedPackages = tourPackagesData
    .filter((p) => p.id !== pkg.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 flex flex-col">
      <main className="flex-1 pb-20">
        {/* ================= LIGHT MODE BREADCRUMB & HEADER ================= */}
        <section className="w-11/12 max-w-7xl mx-auto pt-6 pb-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4 overflow-x-auto no-scrollbar">
            <Link href="/" className="hover:text-[#19a64b] transition-colors shrink-0">
              Home
            </Link>
            <FaAngleRight className="text-[10px] text-slate-300 shrink-0" />
            <Link href="/tour-packages" className="hover:text-[#19a64b] transition-colors shrink-0">
              Tour Packages
            </Link>
            <FaAngleRight className="text-[10px] text-slate-300 shrink-0" />
            <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">
              {pkg.title}
            </span>
          </nav>

          {/* Header Title & Light Price Card */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-5 rounded-3xl border border-slate-200/70 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium">
                  <FaLocationDot className="text-[11px] text-[#19a64b]" />
                  <span>{pkg.region}</span>
                </span>
                {pkg.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium">
                    {getBadgeIcon(pkg.badgeType)}
                    <span>{pkg.badge}</span>
                  </span>
                )}
                {pkg.rating && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-medium">
                    <FaStar className="text-amber-400 text-xs fill-amber-400" />
                    <span>{pkg.rating} Rating</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl  font-semibold text-[#021b38] tracking-tight leading-tight">
                {pkg.fullTitle || `${pkg.title} Tour Package`}
              </h1>

              <div className="flex items-center gap-4 text-[10px] md:text-xs text-slate-600 font-medium pt-0.5">
                <span className="flex items-center gap-1.5 bg-emerald-50/80 text-emerald-900 px-3.5 py-1 rounded-full border border-emerald-100">
                  <FaClock className="text-[#19a64b] text-xs" />
                  <span>{pkg.duration || "5 Days / 4 Nights"}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <FaUserGroup className="text-slate-400 text-xs" />
                  <span>Customizable Private Tour</span>
                </span>
              </div>
            </div>

            
          </div>
        </section>

        {/* ================= LIGHT MODE PHOTO GALLERY ================= */}
        <section className="w-11/12 max-w-7xl mx-auto py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Featured Photo */}
            <div className="lg:col-span-2 relative h-[200px] sm:h-[440px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-xs group">
              <Image
                src={activeImage}
                alt={pkg.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                quality={95}
                priority
                className="object-cover object-center transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                <span className="bg-white/90 text-slate-900 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm">
                  📷 {pkg.title} Photo Gallery
                </span>
              </div>
            </div>

            {/* Thumbnail Stack */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3.5">
              {(pkg.gallery || [pkg.image, pkg.image, pkg.image]).slice(0, 3).map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative h-[100px] lg:h-[135px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 group bg-slate-100 ${
                    activeImage === imgUrl
                      ? "border-[#19a64b] ring-4 ring-[#19a64b]/20 scale-[0.98] shadow-sm"
                      : "border-transparent opacity-75 hover:opacity-100 hover:scale-[1.02]"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${pkg.title} photo ${idx + 1}`}
                    fill
                    sizes="33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {activeImage === imgUrl && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-[#19a64b] text-white rounded-full flex items-center justify-center text-[10px] shadow-sm">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT & STICKY SIDEBAR ================= */}
        <section className="w-11/12 max-w-7xl mx-auto pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT 8 COLS: Detailed Content */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Quick Key Specs Bar (Light Mode Card Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/70 shadow-xs">
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-[#19a64b]/15 text-[#19a64b] flex items-center justify-center shrink-0">
                    <FaHotel className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Stay</span>
                    <span className="text-xs font-semibold text-slate-800">4-Star Hotel</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <FaUtensils className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Meals</span>
                    <span className="text-xs font-semibold text-slate-800">Daily Breakfast</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-700 flex items-center justify-center shrink-0">
                    <FaCar className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Transfers</span>
                    <span className="text-xs font-semibold text-slate-800">Private AC Cab</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-purple-50/50 border border-purple-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-700 flex items-center justify-center shrink-0">
                    <FaShieldHalved className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Support</span>
                    <span className="text-xs font-semibold text-slate-800">24/7 Concierge</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs Pill Bar (Light Container) */}
              <div className="bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/70 shadow-2xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {[
                  { id: "itinerary", label: "Day-by-Day Itinerary" },
                  { id: "overview", label: "Overview & Highlights" },
                  { id: "inclusions", label: "Inclusions & Exclusions" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-[#19a64b] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB 1: ITINERARY (Clean Light Vertical Timeline) */}
              {activeTab === "itinerary" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#021b38]">
                        Detailed Tour Schedule
                      </h3>
                      <p className="text-xs text-slate-500 pt-0.5 font-normal">
                        Planned day by day for maximum comfort and sightseeing
                      </p>
                    </div>
                    <span className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                      {pkg.duration || "5 Days"}
                    </span>
                  </div>

                  {pkg.itinerary && pkg.itinerary.length > 0 ? (
                    <div className="space-y-4">
                      {pkg.itinerary.map((dayItem, idx) => (
                        <div
                          key={dayItem.day}
                          className="flex items-stretch gap-3.5 sm:gap-5 group"
                        >
                          {/* Node & Centered Vertical Line Column */}
                          <div className="flex flex-col items-center shrink-0 w-9 sm:w-10">
                            {/* Circle Node */}
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#19a64b] text-[#19a64b] font-bold text-xs sm:text-sm flex items-center justify-center z-10 shadow-2xs group-hover:bg-[#19a64b] group-hover:text-white transition-all duration-200">
                              {dayItem.day}
                            </div>
                            {/* Vertical Line connecting to next day */}
                            {idx !== pkg.itinerary.length - 1 && (
                              <div className="w-0.5 bg-gradient-to-b from-[#19a64b] via-emerald-300 to-slate-200 flex-1 my-1 rounded-full" />
                            )}
                          </div>

                          {/* Day Card */}
                          <div className="flex-1 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/70 shadow-2xs group-hover:border-emerald-300 transition-colors mb-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                              <h4 className="text-base font-semibold text-[#021b38]">
                                Day {dayItem.day}: {dayItem.title}
                              </h4>
                              <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200/60 self-start sm:self-auto">
                                Sightseeing & Activity
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {dayItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-500 py-4">
                      Detailed day-by-day itinerary will be customized for your travel dates.
                    </p>
                  )}
                </div>
              )}

              {/* TAB 2: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#021b38] mb-3">
                      Package Overview
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
                      {pkg.overview}
                    </p>
                  </div>

                  <hr className="border-slate-100" />

                  <div>
                    <h4 className="text-base font-bold text-[#021b38] mb-4">
                      Key Highlights & Experiences
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pkg.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/60"
                        >
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#19a64b] flex items-center justify-center shrink-0 mt-0.5">
                            <FaCheck className="text-xs" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
              {activeTab === "inclusions" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* What's Included */}
                  <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/70 shadow-xs space-y-4">
                    <div className="flex items-center gap-2.5 text-emerald-800 pb-3 border-b border-emerald-100">
                      <FaCircleCheck className="text-xl text-[#19a64b]" />
                      <h4 className="text-base font-bold text-[#021b38]">
                        What's Included
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {pkg.inclusions ? (
                        pkg.inclusions.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                          >
                            <FaCheck className="text-[#19a64b] text-xs shrink-0 mt-1" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-slate-500">
                          Accommodation, daily breakfast, and private transfers included.
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* What's Excluded */}
                  <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/70 shadow-xs space-y-4">
                    <div className="flex items-center gap-2.5 text-rose-600 pb-3 border-b border-rose-100">
                      <FaCircleXmark className="text-xl text-rose-500" />
                      <h4 className="text-base font-bold text-[#021b38]">
                        What's Excluded
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {pkg.exclusions ? (
                        pkg.exclusions.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                          >
                            <FaXmark className="text-rose-400 text-xs shrink-0 mt-1" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-slate-500">
                          International flight tickets and personal expenses excluded.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT 4 COLS: Clean Light Mode Sticky Inquiry Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-slate-200/40 space-y-5">
                {/* Price Display */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                      PACKAGE PRICE
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-semibold text-[#19a64b] tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-500 font-normal">/ person</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaPercent className="text-[9px]" /> Instant Quote
                  </span>
                </div>

                <hr className="border-slate-100" />

                <h3 className="text-base font-semibold text-[#021b38]">
                  Book / Send Instant Inquiry
                </h3>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#19a64b] text-white flex items-center justify-center mx-auto text-xl shadow-sm">
                      <FaCheck />
                    </div>
                    <h4 className="text-sm font-bold text-emerald-900">Inquiry Submitted!</h4>
                    <p className="text-xs text-emerald-700 font-medium">
                      Our travel advisor will contact you within 15 minutes with customized quotes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs sm:text-sm outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-2.5 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Number of Travelers
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all cursor-pointer font-sans"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons (Couple)</option>
                        <option value="3-5">3 - 5 Persons (Family)</option>
                        <option value="6+">6+ Persons (Group)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#19a64b]/20 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Inquire Now</span>
                      <FaArrowRight className="text-xs" />
                    </button>
                  </form>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <FaWhatsapp className="text-base text-[#19a64b]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Light Trust Badges Box */}
              <div className="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100 text-xs space-y-2 text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#19a64b] text-xs shrink-0" />
                  <span>Best Price & Customization Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#19a64b] text-xs shrink-0" />
                  <span>Verified 4-Star Hotel Accommodations</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#19a64b] text-xs shrink-0" />
                  <span>Dedicated 24/7 On-Trip Assistant</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= RELATED TOUR PACKAGES ================= */}
        {relatedPackages.length > 0 && (
          <section className="w-11/12 max-w-7xl mx-auto pt-16">
            <div className="flex flex-col md:flex-row md:items-center gap-y-5 justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#021b38]">
                  You May Also Like
                </h2>
                <p className="text-xs text-slate-500 pt-0.5">
                  Popular destinations and holiday packages matching your interest
                </p>
              </div>
              <Link
                href="/tour-packages"
                className="text-xs font-bold text-[#19a64b] hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedPackages.map((item) => (
                <div key={item.id} className="w-full">
                  <Link
                    href={`/tour-packages/${item.id}`}
                    className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 p-3.5 flex flex-col justify-between h-full group block"
                  >
                    <div>
                      {/* Card Image Container */}
                      <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-3.5 bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          quality={90}
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Right Badge */}
                        {item.badge && (
                          <div className="absolute top-3 right-3 z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-md">
                              {getBadgeIcon(item.badgeType)}
                              <span>{item.badge}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="px-1 pt-1">
                        {/* Title & Rating Row */}
                        <div className="flex items-start justify-between gap-2 mb-0.5">
                          <h3 className="text-lg font-semibold text-[#021b38] leading-snug tracking-tight">
                            {item.title} <span className="text-[#19a64b]">Tour Packages</span>
                          </h3>
                          {item.rating && (
                            <div className="flex items-center gap-1 font-medium text-slate-900 text-xs shrink-0 pt-0.5">
                              <span>{item.rating}</span>
                              <FaStar className="text-amber-400 text-sm fill-amber-400" />
                            </div>
                          )}
                        </div>

                        {/* Duration */}
                        <p className="text-xs text-slate-500 font-medium mb-3">
                          {item.duration || "5 Days 4 Nights"}
                        </p>

                        {/* 4 Inclusion Icons Row */}
                        <div className="grid grid-cols-4 gap-1 mb-3 bg-slate-50/80 p-2 rounded-2xl border border-slate-100">
                          {(
                            item.inclusionIcons || [
                              { icon: "hotel", label: "04 Nights stay" },
                              { icon: "breakfast", label: "Daily breakfast" },
                              { icon: "transfer", label: "All transfers" },
                              { icon: "sightseeing", label: "Sight seeing" },
                            ]
                          ).map((inc, i) => (
                            <div
                              key={i}
                              className="flex flex-col items-center text-center relative group/tooltip"
                              title={inc.label}
                            >
                              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 shadow-xs flex items-center justify-center mb-1">
                                {getInclusionIcon(inc.icon)}
                              </div>
                              <span className="text-[10px] text-slate-700 leading-tight line-clamp-1 w-full text-center">
                                {inc.label}
                              </span>

                              {/* Full Label Tooltip on Hover */}
                              <div className="absolute bottom-full mb-1.5 hidden group-hover/tooltip:flex flex-col items-center z-30 pointer-events-none whitespace-nowrap">
                                <span className="bg-slate-900 text-white text-[10px] font-medium px-2 py-1 rounded-md shadow-lg">
                                  {inc.label}
                                </span>
                                <span className="w-1.5 h-1.5 bg-slate-900 rotate-45 -mt-1" />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bullet Points Highlights */}
                        <ul className="space-y-1 text-xs text-slate-600 font-normal my-1">
                          {item.highlights && item.highlights.length > 0 ? (
                            item.highlights
                              .slice(0, 2)
                              .map((point, pointIdx) => (
                                <li
                                  key={pointIdx}
                                  className="flex items-start gap-1.5"
                                >
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
                              <span className="text-slate-400 font-bold text-xs">
                                •
                              </span>
                              <span className="leading-snug text-xs">
                                Hotel Stay & Daily Breakfast
                              </span>
                            </li>
                          )}
                        </ul>

                        {/* See X More Items Link */}
                        {item.highlights && item.highlights.length > 2 && (
                          <span className="text-[11px] font-semibold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer block mb-3 pt-0.5">
                            See {item.highlights.length - 2} more items
                          </span>
                        )}

                        {/* Bottom Border & Price Section */}
                        <div className="border-t border-slate-100 pt-3 mt-3 flex items-center justify-between">
                          <div className="flex items-baseline gap-1.5 flex-wrap">
                            {item.oldPrice && (
                              <span className="text-xs text-slate-400 line-through font-normal">
                                {item.oldPrice}
                              </span>
                            )}
                            <span className="text-lg sm:text-xl font-semibold text-slate-950 tracking-tight">
                              {item.price}
                            </span>
                          </div>

                          <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#19a64b] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                            <FaArrowRight className="text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
