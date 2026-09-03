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
              autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              className="w-full h-full"
            >
              {testimonialsData.map((item) => (
                <SwiperSlide key={item.id} className="h-auto pb-5">
                  <div className="bg-white rounded-2xl p-6 border border-slate-100/90 flex flex-col justify-between space-y-6  transition-all duration-300 h-full">
                    <div className="space-y-3">
                      {/* Top Quote Icon */}
                      <FaQuoteLeft className="text-[#021b3835] text-2xl" />
                      
                      {/* Testimonial Text */}
                      <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                        {item.quote}
                      </p>
                    </div>

                    {/* Traveller Profile Info */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-xs border border-slate-100">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="40px"
                          className="object-cover object-center"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-xs sm:text-sm text-[#021b38]">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-normal">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

             {/* Bottom Centered Pagination Dots */}
        <div className="flex items-center justify-center gap-2 ">
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
          <div className="lg:col-span-3 flex mt-10 md:mt-0">
            <div className="w-full bg-white rounded-2xl p-6 shadow-xs border border-slate-100/90 flex flex-col items-center justify-center text-center space-y-2 hover:shadow-md transition-all duration-300">
              
              {/* Google G Logo */}
              <FcGoogle className="text-4xl sm:text-5xl" />

              {/* Score */}
              <div className="text-3xl sm:text-4xl font-semibold text-[#021b38] tracking-tight pt-1">
                4.9/5
              </div>

              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-amber-400 text-sm sm:text-base">
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