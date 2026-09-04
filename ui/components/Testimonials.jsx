"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { testimonialsData } from "@/data/allData.js";

import "swiper/css";

export default function Testimonials() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="w-full py-10 sm:py-14 bg-slate-50/60 font-sans">
      <div className="w-11/12 mx-auto space-y-4">
        
        {/* Section Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
              What Our Travellers Say
            </h2>
          </div>
        </div>

        {/* Testimonials Swiper Carousel & Google Rating Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          
          {/* Left Swiper Testimonial Carousel (9 Cols) */}
          <div className="lg:col-span-9 w-full min-w-0">
            <Swiper
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1.1}
              loop={true}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
              className="w-full h-full !pb-4"
            >
              {testimonialsData.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white rounded-[2rem] border border-slate-200/70 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                    
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Bottom Centered Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef?.slideToLoop(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer border ${
                    activeSlide === index
                      ? "w-4 h-2 bg-[#021b38] border-[#021b38]"
                      : "w-2 h-2 bg-white border-slate-300 hover:border-[#021b38]"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Google Summary Rating Card (3 Cols) */}
          <div className="lg:col-span-3 flex mt-6 md:mt-0">
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