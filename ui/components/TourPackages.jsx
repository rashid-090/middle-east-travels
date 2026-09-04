"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight, FaFire, FaCrown, FaStar, FaTag } from "react-icons/fa6";
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
      <div className="w-11/12 mx-auto space-y-6">
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
            spaceBetween={15}
            slidesPerView={1.08}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 15,
              },
            }}
            className="w-full !pb-4"
          >
            {tourPackagesData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <Link
                  href={item.link}
                  className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 p-3 flex flex-col justify-between h-full group block"
                >
                  <div>
                    {/* Top Smooth Rounded Image Container */}
                    <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-4 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
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

                    <div className="p-2">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 leading-snug tracking-tight mb-1">
                        {item.title} Tour Package
                      </h3>

                      {/* Duration */}
                      <p className="text-xs sm:text-sm text-slate-500 font-normal mb-3">
                        {item.duration}
                      </p>

                      {/* Bullet Points Highlights */}
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-normal mb-2">
                        {item.highlights && item.highlights.length > 0 ? (
                          item.highlights.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start gap-2">
                              <span className="text-slate-400 font-bold text-[sm] leading-none">
                                •
                              </span>
                              <span className="leading-snug text-xs">{point}</span>
                            </li>
                          ))
                        ) : (
                          <>
                            <p>No highlights available</p>
                          </>
                        )}
                      </ul>
                  {/* Bottom Border & Price Section */}
                  <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] text-slate-400 font-normal block leading-tight">
                        Starting from
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                        {item.price}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-primary text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                    </div>
                  </div>

                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-6">
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
