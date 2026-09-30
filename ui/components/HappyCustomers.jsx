"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TouchMarquee from "./TouchMarquee";
import { FaLocationDot, FaQuoteLeft } from "react-icons/fa6";
import { happyCustomersData } from "@/data/allData.js";
import { client, urlFor } from "@/lib/sanity";

export default function HappyCustomers() {
  const [happyCustomers, setHappyCustomers] = useState(happyCustomersData);

  useEffect(() => {
    async function fetchHappyCustomers() {
      try {
        const query = `*[_type == "happyCustomer"] | order(orderRank asc, _createdAt desc){ _id, name, location, quote, image, avatar }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const formatted = data.map((item, index) => {
            let mainImageUrl = item.image ? urlFor(item.image)?.width(400).auto("format").quality(80).url() : null;
            let avatarUrl = item.avatar ? urlFor(item.avatar)?.width(100).auto("format").quality(80).url() : null;

            return {
              id: item._id || index,
              name: item.name,
              location: item.location || "",
              description: item.quote || "",
              image: mainImageUrl || "/hpc/hc1.webp",
              avatar: avatarUrl || "/hpc/user.avif",
            };
          });
          setHappyCustomers(formatted);
        }
      } catch (err) {
        console.error("Error fetching happy customers from Sanity:", err);
      }
    }
    fetchHappyCustomers();
  }, []);

  return (
    <section className="w-full py-10 sm:py-14 bg-white  overflow-hidden">
      <div className="w-11/12 mx-auto space-y-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
            Our <span className="text-primary">Happy</span> Customers
          </h2>
        </div>

        {/* Marquee Carousel Container */}
        <div className="w-full min-w-0 py-2">
          <TouchMarquee speed={1.2}>
            {happyCustomers.map((customer) => (
              <div
                key={customer.id}
                className="w-[320px] lg:w-[340px] px-2.5 py-2 shrink-0"
              >
                <div className="bg-white rounded-[2rem] border border-slate-200/70 p-3 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  {/* Top Image + Location Badge */}
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 bg-slate-100 shrink-0">
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      fill
                      sizes="(max-width: 640px) 320px, 340px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>

                  {/* Customer Description / Review Quote */}
                  <div className="flex-1 flex flex-col justify-between mb-4">
                    <div className="relative">
                      <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-3">
                        "{customer.description}"
                      </p>
                    </div>
                  </div>

                  {/* Footer - Customer Avatar & Name & Location */}
                  <div className="border-t border-slate-100 pt-3.5 mt-auto flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200/80 shadow-xs">
                      <Image
                        src={customer.avatar}
                        alt={customer.name}
                        fill
                        sizes="40px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wide leading-tight truncate">
                        {customer.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate flex items-center gap-1 font-normal mt-0.5">
                        <FaLocationDot className="text-primary/70 text-[10px]" />
                        <span>{customer.location}</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </TouchMarquee>
        </div>

      </div>
    </section>
  );
}