"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaArrowRight,
  FaFire,
  FaCrown,
  FaStar,
  FaTag,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { tourPackagesData } from "@/data/allData.js";

import "swiper/css";

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

export default function TourPackages() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50 font-sans">
      <div className="w-11/12 mx-auto space-y-4">
        
        {/* Section Header Row */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
            Tour packages
          </h2>

          <Link
            href="/holidays"
            className="group flex items-center gap-2 text-sm hover:text-[#021b38] text-[#7d8083] transition-colors"
          >
            <span>View All Destinations</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Swiper Carousel Container */}
        <div className="relative">
          <Swiper
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1.10}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="w-full"
          >
            {tourPackagesData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  href={item.link}
                  className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 block"
                >
                  {/* Card Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 250px"
                    quality={90}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Right Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-md text-[10px] font-medium text-slate-800 shadow-md">
                      {getBadgeIcon(item.badgeType)}
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex flex-col justify-end space-y-1 text-white">
                    <h3 className="text-xl font-semibold leading-tight drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200">
                      {item.duration}
                    </p>

                    {/* Price & Arrow Button Row */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                        {item.price}
                      </span>

                      <div className="w-9 h-9 rounded-full group-hover:bg-white group-hover:text-[#021b38] bg-[#f9f9f95c] text-white flex items-center justify-center shadow-md transition-all duration-300">
                        <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Pagination Section */}
          <div className="flex items-center justify-center gap-2 pt-5">
            {tourPackagesData.map((_, dotIndex) => {
              const isActive = activeIndex === dotIndex;
              return (
                <button
                  key={dotIndex}
                  onClick={() => swiperRef?.slideToLoop(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer border ${
                    isActive
                      ? "w-4 h-2 bg-[#021b38] border-[#021b38]"
                      : "w-2 h-2 bg-white border-slate-300 hover:border-[#021b38]"
                  }`}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
