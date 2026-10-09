"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TouchMarquee from "./TouchMarquee";
import {
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";
import { tourPackagesData } from "@/data/allData.js";
import { client, urlFor } from "@/lib/sanity";



export default function TourPackages() {
  const [packages, setPackages] = useState(() => tourPackagesData.slice(0, 8));

  useEffect(() => {
    async function fetchPopularPackages() {
      try {
        const query = `*[_type == "tourPackage"] | order(orderRank asc, _createdAt desc)[0...8]{
          _id,
          title,
          fullTitle,
          category,
          region,
          duration,
          price,
          oldPrice,
          badge,
          badgeType,
          rating,
          reviewsCount,
          image,
          inclusionIcons,
          highlights
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const formatted = data.map((item) => {
            const slugId = item.id?.current || item.id || item._id;
            const mainImageUrl = item.image ? urlFor(item.image)?.width(640).auto("format").quality(80).url() : null;

            return {
              id: slugId,
              title: item.title,
              fullTitle: item.fullTitle || `${item.title} Tour Packages`,
              category: item.category || "International",
              region: item.region || "Eurasia",
              duration: item.duration || "5 Days 4 Nights",
              price: item.price,
              oldPrice: item.oldPrice,
              badge: item.badge,
              badgeType: item.badgeType || "fire-orange",
              rating: item.rating ? Number(item.rating) : 4.8,
              reviewsCount: item.reviewsCount ? Number(item.reviewsCount) : 150,
              image: mainImageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
              link: `/tour-packages/${slugId}`,
              inclusionIcons: item.inclusionIcons || [
                { icon: "hotel", label: "04 Nights stay" },
                { icon: "breakfast", label: "Daily breakfast" },
                { icon: "transfer", label: "All transfers" },
                { icon: "sightseeing", label: "Sight seeing" },
              ],
              highlights: item.highlights || [],
            };
          });
          setPackages(formatted);
        }
      } catch (err) {
        console.error("Error fetching popular tour packages from Sanity:", err);
      }
    }
    fetchPopularPackages();
  }, []);
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50  overflow-hidden">
      <div className="w-11/12 mx-auto space-y-6">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row items-start gap-y-5 md:items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold capitalize text-[#021b38] tracking-tight">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p>Handpicked holidays, customized to make your journey unforgettable.</p>
          </div>
          <Link
            href="/tour-packages"
            className="group flex items-center gap-2 text-sm hover:text-primary text-gray-600 transition-colors"
          >
            <span>View All Destinations</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Touch & Auto-Scroll Marquee Container */}
        <div className="w-full py-2">
          <TouchMarquee speed={1.2}>
            {packages.map((item) => (
              <div
                key={item.id}
                className="w-[320px] lg:w-[340px] px-2.5 py-2 shrink-0 relative"
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 340px, 340px"
                        loading="lazy"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Right Badge */}
                      {item.badge && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-md">
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
                          <div className="absolute top-9 left-10 flex justify-center items-center bg-white p-1 px-2 rounded-full items-center gap-1 font-medium text-slate-900 text-xs shrink-0 pt-0.5">
                            <span>{item.rating}</span>
                            <FaStar className="text-amber-400 text-sm fill-amber-400" />
                          </div>
                        )}
                      </div>

                      {/* Duration */}
                      <p className="text-xs text-slate-500 font-medium mb-3">
                        {item.duration || "5 Days 4 Nights"}
                      </p>

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
                             INR ₹{item.oldPrice}
                            </span>
                          )}
                          <span className="text-lg sm:text-xl font-semibold text-slate-950 tracking-tight">
                           INR ₹{item.price}
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
