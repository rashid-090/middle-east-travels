"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TouchMarquee from "./TouchMarquee";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { testimonialsData } from "@/data/allData.js";

export default function Testimonials() {
  return (
    <section className="w-full py-10 sm:py-14 bg-slate-50/60 font-sans overflow-hidden">
      <div className="w-11/12 mx-auto space-y-4">
        
        {/* Section Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
              What Our <span className="text-primary">Travellers</span> Say
            </h2>
          </div>
        </div>

        {/* Testimonials Marquee & Google Rating Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          
          {/* Left Testimonial Carousel (9 Cols) */}
          <div className="lg:col-span-9 w-full min-w-0 py-2">
            <TouchMarquee speed={1.2}>
              {testimonialsData.map((item) => (
                <div key={item.id} className="w-[320px] lg:w-[340px] px-2.5 py-2 shrink-0">
                  <div className="bg-white rounded-[2rem] border border-slate-200/70 p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                    
                    <div>
                      {/* Top Header Row: Cyan Quote Left & Google Pill */}
                      <div className="flex items-center justify-between">
                        <FaQuoteLeft className="text-3xl text-primary" />
                        
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 text-[10px] font-medium text-slate-700">
                          <FcGoogle className="text-base" />
                          <span>Google</span>
                        </div>
                      </div>

                      {/* Branch Badge Pill */}
                      <div className="mt-4 mb-3">
                        <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-secondary font-medium text-xs border border-sky-100/80">
                          {item.branch || "Calicut Branch"}
                        </span>
                      </div>

                      {/* Testimonial Quote Text */}
                      <p className="text-slate-600 text-sm leading-relaxed font-normal mb-2 line-clamp-4">
                        {item.quote}
                      </p>

                      {/* Read More Link */}
                      <button className="text-xs font-semibold text-gray-500 hover:text-primary transition-colors inline-block mb-4 cursor-pointer">
                        Read more
                      </button>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="border-t border-slate-100 pt-4 mt-auto flex items-center gap-3.5">
                      {/* Colored Initial Badge */}
                      <div className={`w-12 h-12 rounded-full ${item.initialBg || "bg-pink-600"} text-white flex items-center justify-center font-bold text-sm tracking-wider shrink-0 shadow-xs`}>
                        {item.initials || "DP"}
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-medium text-xs text-slate-900 uppercase tracking-wide leading-tight">
                          {item.name}
                        </h4>

                        {/* 5 Yellow Stars */}
                        <div className="flex items-center gap-0.5 text-amber-400 text-xs py-0.5">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>

                        <p className="text-[10px] text-slate-400 font-normal leading-none">
                          {item.timeAgo || "3 months ago"}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </TouchMarquee>
          </div>


          {/* Right Google Summary Rating Card (3 Cols) */}
          <div className="lg:col-span-3 flex">
            <div className="w-full bg-white rounded-[2rem] p-6 shadow-xs border border-slate-200/70 flex flex-col items-center justify-center text-center space-y-2.5 hover:shadow-md transition-all duration-300">
              
              {/* Google G Logo */}
              <FcGoogle className="text-4xl sm:text-5xl" />

              {/* Score */}
              <div className="text-3xl sm:text-4xl font-bold text-[#021b38] tracking-tight pt-1">
                4.9/5
              </div>

              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-amber-400 text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Bottom Label */}
              <p className="text-xs font-medium text-[#021b38] pt-1">
                From 500+ Happy Travellers
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}