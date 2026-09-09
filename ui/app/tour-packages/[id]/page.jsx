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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">

      <main className="flex-1 pb-16">
        {/* Top Breadcrumb & Title Section */}
        <section className="w-11/12 max-w-7xl mx-auto pt-6 pb-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <FaAngleRight className="text-[10px]" />
            <Link href="/tour-packages" className="hover:text-primary transition-colors">
              Tour Packages
            </Link>
            <FaAngleRight className="text-[10px]" />
            <span className="text-slate-900 font-semibold">{pkg.title}</span>
          </div>

          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <FaLocationDot className="text-[11px]" />
                  <span>{pkg.region}</span>
                </span>
                {pkg.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                    {getBadgeIcon(pkg.badgeType)}
                    <span>{pkg.badge}</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-semibold text-secondary tracking-tight">
                {pkg.fullTitle || `${pkg.title} Tour Package`}
              </h1>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 mt-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <FaClock className="text-primary text-xs" />
                  <span>{pkg.duration}</span>
                </span>
                
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-white p-2 px-5 rounded-2xl border border-slate-200 shadow-xs shrink-0 text-left md:text-right">
              <span className="text-xs text-slate-400 block font-normal">Starting Price</span>
              <span className="text-xl md:text-2xl font-semibold text-primary tracking-tight block">
                {pkg.price}
              </span>
              <span className="text-[11px] text-slate-500">Per Person (Taxes included)</span>
            </div>
          </div>
        </section>

        {/* Photo Gallery Grid */}
        <section className="w-11/12 max-w-7xl mx-auto py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Featured Photo */}
            <div className="lg:col-span-2 relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-md bg-slate-200">
              <Image
                src={activeImage}
                alt={pkg.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                quality={95}
                priority
                className="object-cover object-center transition-all duration-500"
              />
            </div>

            {/* Thumbnail Stack */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {(pkg.gallery || [pkg.image, pkg.image, pkg.image]).slice(0, 3).map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative h-[100px] lg:h-[130px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                    activeImage === imgUrl ? "border-primary scale-[0.98] shadow-md" : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${pkg.title} photo ${idx + 1}`}
                    fill
                    sizes="33vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content & Sticky Inquiry Sidebar */}
        <section className="w-11/12 max-w-7xl mx-auto pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT 8 COLS: Detailed Content */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Quick Specs Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center shrink-0">
                    <FaHotel className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Stay</span>
                    <span className="text-xs font-semibold text-slate-800">4-Star Hotel</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <FaUtensils className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Meals</span>
                    <span className="text-xs font-semibold text-slate-800">Daily Breakfast</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <FaCar className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Transfers</span>
                    <span className="text-xs font-semibold text-slate-800">Private AC SUV</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <FaShieldHalved className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Support</span>
                    <span className="text-xs font-semibold text-slate-800">24/7 Assistance</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "itinerary", label: "Day-by-Day Itinerary" },
                  { id: "inclusions", label: "Inclusions & Exclusions" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Package Overview
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {pkg.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">
                      Key Package Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pkg.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <FaCheck className="text-[10px]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ITINERARY */}
              {activeTab === "itinerary" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Day-by-Day Tour Itinerary
                  </h3>

                  {pkg.itinerary && pkg.itinerary.length > 0 ? (
                    <div className="space-y-4">
                      {pkg.itinerary.map((dayItem) => (
                        <div
                          key={dayItem.day}
                          className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start gap-4"
                        >
                          <div className="px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold shrink-0">
                            Day {dayItem.day}
                          </div>
                          <div className="space-y-1.5 flex-1">
                            <h4 className="text-base font-semibold text-slate-900">
                              {dayItem.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {dayItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">Detailed day-by-day itinerary will be shared upon booking inquiry.</p>
                  )}
                </div>
              )}

              {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
              {activeTab === "inclusions" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Inclusions */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                        <FaCheck className="text-xs" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900">What's Included</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.inclusions ? (
                        pkg.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <FaCheck className="text-emerald-500 text-xs shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-slate-500">Accommodation & Breakfast included.</li>
                      )}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 text-rose-600">
                      <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center">
                        <FaXmark className="text-xs" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900">What's Excluded</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.exclusions ? (
                        pkg.exclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <FaXmark className="text-rose-400 text-xs shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-slate-500">Airfare and personal expenses.</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT 4 COLS: Sticky Booking & Inquiry Form */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-5">
                <div>
                  <span className="text-xs font-medium text-slate-400 block">Package Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-primary tracking-tight">{pkg.price}</span>
                    <span className="text-xs text-slate-500 font-normal">/ person</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                <h3 className="text-base font-semibold text-[#021b38]">
                  Book / Send Inquiry
                </h3>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-lg">
                      <FaCheck />
                    </div>
                    <h4 className="text-sm font-semibold text-emerald-900">Inquiry Submitted!</h4>
                    <p className="text-xs text-emerald-700">
                      Our travel advisor will contact you within 15 minutes with customized quotes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                        Number of Travelers
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-primary transition-colors cursor-pointer"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons (Couple)</option>
                        <option value="3-5">3 - 5 Persons (Family)</option>
                        <option value="6+">6+ Persons (Group)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-primary hover:bg-secondary text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-primary/20 cursor-pointer flex items-center justify-center gap-2"
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
                    className="w-full py-2.5 rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaWhatsapp className="text-sm text-emerald-600" />
                    <span>Instant WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Related Tour Packages Section */}
        {relatedPackages.length > 0 && (
          <section className="w-11/12 max-w-7xl mx-auto pt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-[#021b38] mb-6">
              You May Also Like
            </h2>
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

                          <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-primary text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
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
