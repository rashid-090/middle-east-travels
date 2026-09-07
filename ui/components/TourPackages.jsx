"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TouchMarquee from "./TouchMarquee";
import { FaArrowRight, FaFire, FaCrown, FaStar, FaTag } from "react-icons/fa6";
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
            href="/holidays"
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
              <div key={item.id} className="w-[320px] lg:w-[340px] px-2.5 py-2 shrink-0">
                <Link
                  href={item.link}
                  className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 p-3 flex flex-col justify-between h-full group block"
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
              </div>
            ))}
          </TouchMarquee>
        </div>

      </div>
    </section>
  );
}


