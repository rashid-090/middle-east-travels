"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaPassport,
  FaShieldHalved,
  FaClock,
  FaMagnifyingGlass,
  FaSliders,
  FaCheck,
  FaGlobe,
  FaFilter,
} from "react-icons/fa6";
import { visaPackagesData } from "@/data/allData";
import { client, urlFor } from "@/lib/sanity";
import { IoTicketOutline } from "react-icons/io5";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export default function VisasListingPage() {
  const [visasData, setVisasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    async function fetchVisas() {
      setIsLoading(true);
      try {
        const query = `*[_type == "visaService"] | order(orderRank asc, _createdAt desc)`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const formatted = data.map((item) => ({
            id: item._id,
            title: item.title,
            slug: item.slug?.current || item.slug || item._id,
            duration: item.duration || "",
            validity: item.validity || "",
            price: item.price || "",
            badge: item.badge || "",
            image: item.image
              ? urlFor(item.image)?.url()
              : "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80",
            highlights: item.highlights || [],
            link: `/visas/${item.slug?.current || item.slug || item._id}`,
          }));
          setVisasData(formatted);
        } else {
          setVisasData(visaPackagesData);
        }
      } catch (error) {
        console.error("Error fetching visa services from Sanity:", error);
        setVisasData(visaPackagesData);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVisas();
  }, []);

  const regions = [
    "All Regions",
    "Asia",
    "Europe",
    "Middle East",
    "Africa",
    "Americas",
  ];

  // Filter & Sort Logic
  const filteredVisas = useMemo(() => {
    const list = visasData.length > 0 ? visasData : visaPackagesData;
    return list
      .filter((item) => {
        // 1. Search Query Filter
        const matchesSearch =
          !searchQuery ||
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.duration &&
            item.duration.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.highlights &&
            item.highlights.some((h) =>
              h.toLowerCase().includes(searchQuery.toLowerCase())
            ));

        // 2. Region Filter
        let matchesRegion = true;
        if (selectedRegion !== "All Regions" && selectedRegion !== "All") {
          const t = (item.title || "").toLowerCase();
          if (selectedRegion === "Middle East") {
            matchesRegion =
              t.includes("uae") ||
              t.includes("saudi") ||
              t.includes("qatar") ||
              t.includes("oman") ||
              t.includes("dubai") ||
              t.includes("kuwait") ||
              t.includes("bahrain");
          } else if (selectedRegion === "Asia") {
            matchesRegion =
              t.includes("singapore") ||
              t.includes("thailand") ||
              t.includes("japan") ||
              t.includes("malaysia") ||
              t.includes("bali") ||
              t.includes("vietnam");
          } else if (selectedRegion === "Europe") {
            matchesRegion =
              t.includes("uk") || t.includes("schengen") || t.includes("europe");
          } else if (selectedRegion === "Americas") {
            matchesRegion =
              t.includes("usa") || t.includes("canada") || t.includes("us");
          }
        }

        return matchesSearch && matchesRegion;
      })
      .sort((a, b) => {
        const getNumericPrice = (item) =>
          item.price
            ? parseInt(String(item.price).replace(/[^0-9]/g, ""), 10) || 0
            : 0;
        if (sortBy === "price-low") return getNumericPrice(a) - getNumericPrice(b);
        if (sortBy === "price-high") return getNumericPrice(b) - getNumericPrice(a);
        return 0;
      });
  }, [visasData, searchQuery, selectedRegion, sortBy]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-16">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="w-11/12 mx-auto my-6 lg:my-8 rounded-3xl md:rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col justify-between p-4 py-6 sm:p-10 lg:p-12 lg:py-16 text-white">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80"
            alt="Express Visa Services Background"
            fill
            priority
            loading="eager"
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/50 to-black/10 z-10 pointer-events-none" />
        </div>

        {/* Top Banner Content: Title & Subtitle */}
        <div className="relative z-20 mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
              Find Your Visa Services
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm font-normal w-[90%] md:w-full leading-relaxed pt-1">
              Explore our express tourist, business, and visitor visa options for every destination.
            </p>
          </div>
        </div>

        {/* Middle Banner: Glassmorphism Filters Container */}
        <div className="relative z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/50 rounded-2xl sm:rounded-[2rem] p-3 sm:p-5 shadow-2xl space-y-3 sm:space-y-4">
            
            {/* Top Search & Sort Controls Row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              
              {/* Search Bar */}
              <div className="relative flex items-center bg-black/40 sm:bg-white/20 backdrop-blur-md rounded-xl px-3.5 py-2.5 border border-white/25 focus-within:border-white transition-colors flex-1">
                <FaMagnifyingGlass className="text-white/70 text-xs shrink-0 mr-2.5" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/60 text-xs sm:text-sm outline-hidden"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-white/70 hover:text-white ml-1 cursor-pointer font-medium"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto bg-black/40 sm:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-xl pl-3.5 pr-8 py-2.5 border border-white/25 focus:outline-hidden focus:border-white cursor-pointer appearance-none"
                >
                  <option value="default" className="bg-slate-900 text-white">
                    Sort: Default
                  </option>
                  <option value="price-low" className="bg-slate-900 text-white">
                    Price: Low → High
                  </option>
                  <option value="price-high" className="bg-slate-900 text-white">
                    Price: High → Low
                  </option>
                </select>
                <FaSliders className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-xs pointer-events-none" />
              </div>

            </div>

            {/* Region Sub-Filters Scrollable Pills Row */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2.5 border-t border-white/15 scroll-smooth pb-0.5">
              <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-wider shrink-0 mr-1 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                REGION:
              </span>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    selectedRegion === region
                      ? "bg-[#19a64b] text-white shadow-md font-semibold"
                      : "bg-white/15 text-white/80 hover:text-white hover:bg-white/25 border border-white/15"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

          </div>
        </div>

      </section>

      {/* ================= 4-COLUMN VISA GRID SECTION ================= */}
      <section className="w-11/12 mx-auto pt-6">
        
        {/* Results Counter Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Showing <span className="font-semibold text-slate-900">{filteredVisas.length}</span> available visa services
          </p>
          {(selectedRegion !== "All Regions" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedRegion("All Regions");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="text-xs text-primary hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Loading Skeleton State */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl border border-slate-200/90 p-4 space-y-4 animate-pulse"
              >
                <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl" />
                <div className="h-5 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <div className="h-5 bg-slate-200 rounded w-20" />
                  <div className="w-9 h-9 bg-slate-200 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredVisas.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-md mx-auto my-8 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-primary flex items-center justify-center text-3xl mx-auto">
              <FaPassport />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#021b38]">
                No Visa Services Found
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                We couldn't find any visa packages matching your criteria. Try resetting search terms.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedRegion("All Regions");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-medium shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* 4-COLUMN VISA GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredVisas.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge Overlay at Top-Left if available */}
                    {item.badge && (
                      <span className="absolute flex items-center gap-2 top-4 left-3 bg-white/95 backdrop-blur-xs text-[#021b38] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs z-10">
                        <IoTicketOutline className="text-primary" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Text Details Section */}
                  <div className="px-5 py-2 space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
                      {item.title} <span className="text-primary">Visa</span>
                    </h3>
                    {item.highlights && item.highlights.length > 0 ? (
                      <ul className="space-y-0.5 pt-1">
                        {item?.highlights?.slice(0, 2).map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs text-slate-600 font-normal leading-snug"
                          >
                            <HiOutlineCheckBadge className="text-primary text-sm shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {item.duration}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Section: Price & Action Arrow Button */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400 font-normal">
                      Starting from
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#021b38] tracking-tight">
                      {item.price
                        ? item.price.includes("₹") || item.price.includes("INR")
                          ? item.price
                          : `INR ${item.price}`
                        : ""}
                    </span>
                  </div>

                  {/* Circular Arrow CTA Button */}
                  <Link
                    href={`/visas/${item.slug || item.id}`}
                    className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-primary text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0 cursor-pointer"
                    aria-label={`View details for ${item.title}`}
                  >
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>
    </div>
  );
}