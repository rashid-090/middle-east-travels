"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TouchMarquee from "./TouchMarquee";
import {
  FaArrowRight,
  FaFire,
  FaCrown,
  FaStar,
  FaTag,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { visaPackagesData } from "@/data/allData.js";
import { IoTicketOutline } from "react-icons/io5";
import { client, urlFor } from "@/lib/sanity";

const getBadgeIcon = (type) => {
  switch (type) {
    case "fire-orange":
    case "fire-red":
      return <FaFire className="text-orange-500 text-xs" />;
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

export default function VisaServices() {
  const [visaServices, setVisaServices] = useState(visaPackagesData);

  useEffect(() => {
    let isSubscribed = true;

    async function fetchVisaServices() {
      try {
        const query = `*[_type == "visaService"] | order(orderRank asc, _createdAt desc){
          _id,
          title,
          slug,
          duration,
          validity,
          price,
          badge,
          image
        }`;
        const data = await client.fetch(query);
        if (isSubscribed && Array.isArray(data) && data.length > 0) {
          const formatted = data.map((item) => ({
            id: item._id,
            title: item.title,
            slug: item.slug?.current || item.slug || item._id,
            duration: item.duration || "",
            price: item.price || "",
            badge: item.badge || "",
            image: item.image
              ? urlFor(item.image)?.auto("format").quality(80).url()
              : "/visapageban.webp",
          }));
          setVisaServices(formatted);
        }
      } catch (err) {
        console.error("Error fetching visa services from Sanity:", err);
      }
    }

    fetchVisaServices();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50 overflow-hidden">
      <div className="w-11/12 mx-auto space-y-6">
        
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row items-start gap-y-5 md:items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
              Visa Services for <span className="text-primary">Your International Journey</span>
            </h2>
            <p>Simple, reliable visa assistance for your next trip. </p>
          </div>

          <Link
            href="/visas"
            className="group flex items-center gap-2 text-sm hover:text-primary text-gray-600 transition-colors"
          >
            <span>View All Visas</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Touch & Auto-Scroll Marquee Container */}
        <div className="w-full py-2">
          <TouchMarquee speed={1.2}>
            {visaServices.map((item) => (
              <div key={item.id} className="w-[300px] lg:w-[320px] px-2.5 py-2 shrink-0">
                <Link
                  href={`/visas/${item.slug || item.id}`}
                  className="bg-white rounded-[2.25rem] overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group block"
                >
                  <div>
                    {/* Top Smooth Rounded Image Container */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden mb-4 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        quality={85}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                    {/* Badge Overlay at Top-Right if available */}
                    {item.badge && (
                      <span className="absolute flex items-center gap-2 top-4 left-3 bg-white/95 backdrop-blur-xs text-[#021b38] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs z-10">
                        <IoTicketOutline className="text-primary"/>{item.badge}
                      </span>
                    )}
                    </div>

                    <div className="p-5 pt-0">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-primary leading-snug tracking-tight mb-1">
                        {item.title}
                      </h3>

                      {/* Duration / Processing Time */}
                      {item.duration && (
                        <p className="text-xs text-slate-500 font-normal mb-3">
                          {item.duration}
                        </p>
                      )}

                      {/* Bottom Border & Price Section */}
                      <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="text-[11px] text-slate-400 font-normal block leading-tight">
                            Starting from
                          </span>
                          <span className="text-lg sm:text-xl font-semibold text-slate-950 tracking-tight">
                            {item.price
                              ? String(item.price).includes("₹") || String(item.price).includes("INR")
                                ? item.price
                                : `INR ₹${item.price}`
                              : ""}
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