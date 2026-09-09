"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TouchMarquee from "./TouchMarquee";
import {
  FaArrowRight,
  FaFire,
  FaCrown,
  FaStar,
  FaTag,
  FaHotel,
  FaMugHot,
  FaCar,
  FaBinoculars,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { tourPackagesData } from "@/data/allData.js";

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

export default function TourPackages() {
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50 font-sans overflow-hidden">
      <div className="w-11/12 mx-auto space-y-6">
        {/* Section Header Row */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold capitalize text-[#021b38] tracking-tight">
            Tour <span className="text-primary">packages</span>
          </h2>

          <Link
            href="/tour-packages"
            className="group flex items-center gap-2 text-sm hover:text-[#021b38] text-[#7d8083] transition-colors"
          >
            <span>View All Destinations</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Touch & Auto-Scroll Marquee Container */}
        <div className="w-full py-2">
          <TouchMarquee speed={1.2}>
            {tourPackagesData.map((item) => (
              <div
                key={item.id}
                className="w-[320px] lg:w-[340px] px-2.5 py-2 shrink-0"
              >
                <Link
                  href={item.link || `/tour-packages/${item.id}`}
                  className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 p-3.5 flex flex-col justify-between h-full group block"
                >
                  <div>
                    {/* Top Smooth Rounded Image Container */}
                    <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-3.5 bg-slate-100">
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
                      <div className="grid grid-cols-4 gap-1.5 mb-3 bg-slate-50/80 p-2 rounded-2xl border border-slate-100">
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
                            <span className="text-[9px] text-slate-700 leading-tight line-clamp-1 w-full text-center">
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
          </TouchMarquee>
        </div>
      </div>
    </section>
  );
}
