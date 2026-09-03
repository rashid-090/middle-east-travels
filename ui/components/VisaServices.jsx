"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPassport,
  FaMagnifyingGlass,
  FaBriefcase,
  FaLocationDot,
  FaWhatsapp,
  FaEllipsis,
} from "react-icons/fa6";
import { visaCategoriesData, visaCountriesByCategory } from "@/data/allData.js";

const getCategoryIcon = (iconType) => {
  switch (iconType) {
    case "tourist":
      return <FaPassport className="text-[#021B38] text-sm" />;
    case "family":
      return <FaMagnifyingGlass className="text-[#021B38] text-sm" />;
    case "business":
      return <FaBriefcase className="text-[#021B38] text-sm" />;
    case "transit":
      return <FaLocationDot className="text-[#021B38] text-sm" />;
    default:
      return <FaPassport className="text-[#021B38] text-sm" />;
  }
};

export default function VisaServices() {
  const [activeCategory, setActiveCategory] = useState(1);

  const currentCountries = visaCountriesByCategory[activeCategory] || visaCountriesByCategory[1];

  return (
    <section className="w-full py-6 sm:py-8 font-sans">
      <div className="w-11/12 mx-auto">
        <div className="bg-[#f4f4f4] rounded-3xl p-6 sm:p-8 lg:p-9 border border-blue-100/60 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* LEFT MAIN VISA SECTION (8 or 9 Cols) */}
            <div className="lg:col-span-9 flex flex-col justify-between space-y-6">
              
              {/* Header Title & Subtitle */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
                  Visa Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                  Hassle-free visa assistance for all major countries
                </p>
              </div>

              {/* Category Sidebar & Country Cards Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
                
                {/* Left Vertical Category List */}
                <div className="w-full md:w-48 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 flex-shrink-0">
                  {visaCategoriesData.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left whitespace-nowrap cursor-pointer ${
                          isActive
                            ? "bg-white text-[#021b38] shadow-xs"
                            : "text-slate-700 hover:bg-white/60"
                        }`}
                      >
                        <span className="w-7 h-7 rounded-lg bg-blue-50/80 flex items-center justify-center flex-shrink-0">
                          {getCategoryIcon(cat.iconType)}
                        </span>
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Country Cards Horizontal Grid */}
                <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                  {currentCountries.map((country) => (
                    <Link
                      key={country.id}
                      href={country.link}
                      className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-200/60 hover:shadow-md transition-all duration-300 group aspect-[4/5]"
                    >
                      {country.isMore ? (
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-100 text-[#021b38] flex items-center justify-center text-base sm:text-lg group-hover:bg-[#021b38] group-hover:text-white transition-colors duration-300">
                          <FaEllipsis />
                        </div>
                      ) : (
                        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-xs border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                          <Image
                            src={country.flagUrl}
                            alt={country.name}
                            fill
                            sizes="48px"
                            className="object-cover object-center"
                            unoptimized
                          />
                        </div>
                      )}

                      <span className="text-[11px] sm:text-xs font-semibold text-[#021b38] mt-2 leading-tight group-hover:text-blue-700 transition-colors">
                        {country.name}
                      </span>
                    </Link>
                  ))}
                </div>

              </div>

              {/* Bottom Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <Link
                  href="/visa/check-requirements"
                  className="bg-[#021b38] text-white px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#073163] shadow-md transition-all active:scale-95 cursor-pointer text-center"
                >
                  Check Visa Requirements
                </Link>

                <a
                  href="https://wa.me/919995123456"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#021b38] border border-slate-200/90 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-50 flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <FaWhatsapp className="text-emerald-500 text-lg" />
                  <span>Talk to a Visa Expert</span>
                </a>
              </div>

            </div>

            {/* RIGHT SIDE STANDALONE PROMO CARD (3 Cols) */}
            <div className="lg:col-span-3 flex group">
              <div className="w-full bg-[#021b38] rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden border border-blue-900/40">
                
                {/* Promo Card Header */}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white leading-tight">
                    Need Help With Visa?
                  </h3>
                  <p className="text-sm text-slate-300 font-normal mt-2 leading-relaxed">
                    Our experts will guide you through the entire process, Hassle-free visa assistance for all major countries.
                  </p>
                </div>

                {/* Passports Illustration Image */}
                <div className="relative w-full h-28 my-3 flex items-center justify-center -mb-3 md:-mb-24">
                  {/* Decorative Stacked Passport Cards */}
                  <div className="relative w-28 h-24 ">
                    {/* Red Passport Card */}
                    <div className="group-hover:translate-y-2 duration-200 transition-all absolute -left-3 bottom-0 w-16 h-20 bg-red-900/90 rounded-lg shadow-lg border border-red-700/50 transform -rotate-12 flex flex-col items-center justify-center text-amber-300 p-1">
                      <FaPassport className="text-xl" />
                      <span className="text-[8px] font-bold mt-1 uppercase tracking-widest text-amber-200">
                        PASSPORT
                      </span>
                    </div>

                    {/* Green Visa Document Card */}
                    <div className="group-hover:translate-y-4 duration-200 transition-all absolute right-0 top-5 w-16 h-20 bg-emerald-800/90 rounded-lg shadow-lg border border-emerald-600/50 transform rotate-12 flex flex-col items-center justify-center text-emerald-200 p-1">
                      <FaPassport className="text-xl" />
                      <span className="text-[8px] font-bold mt-1 uppercase tracking-widest text-emerald-100">
                        VISA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Get Free Consultation Button */}
                <Link
                  href="/contact"
                  className="w-full z-10 bg-[#ffb703] hover:bg-amber-400 text-[#021b38] font-medium py-3 px-4 rounded-xl text-xs sm:text-sm text-center shadow-md transition-all active:scale-95 block cursor-pointer"
                >
                  Get Free Consultation
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}