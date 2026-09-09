"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { tourPackagesData } from "@/data/allData";
import {
  FaArrowRight,
  FaFire,
  FaCrown,
  FaStar,
  FaTag,
  FaMagnifyingGlass,
  FaGlobe,
  FaLocationDot,
  FaUmbrellaBeach,
  FaCompass,
  FaLandmark,
  FaBuilding,
  FaTree,
  FaChild,
  FaSnowflake,
  FaPaw,
  FaHotel,
  FaMugHot,
  FaCar,
  FaBinoculars,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

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

export default function TourPackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeBannerCategory, setActiveBannerCategory] =
    useState("All Packages");
  const [sortBy, setSortBy] = useState("default");

  const categories = ["All", "International", "Domestic"];
  const regions = [
    "All",
    "Southeast Asia",
    "Middle East",
    "South Asia",
    "Eurasia",
    "North India",
    "South India",
    "West India",
  ];

  // Handle Banner Category Selection (Icons)
  const handleBannerCategoryClick = (cat) => {
    setActiveBannerCategory(cat.label);
    setSelectedCategory("All");
    setSelectedRegion("All");
    setSearchQuery("");
  };

  const handleViewAll = () => {
    setActiveBannerCategory("All Packages");
    setSelectedCategory("All");
    setSelectedRegion("All");
    setSearchQuery("");
  };

  // Filter & Sort Logic
  const filteredPackages = useMemo(() => {
    return tourPackagesData
      .filter((pkg) => {
        // 1. Search Query Filter
        const matchesSearch =
          !searchQuery ||
          pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (pkg.fullTitle &&
            pkg.fullTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (pkg.region &&
            pkg.region.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (pkg.highlights &&
            pkg.highlights.some((h) =>
              h.toLowerCase().includes(searchQuery.toLowerCase()),
            ));

        // 2. Category Tab Filter (All, International, Domestic)
        const matchesCategory =
          selectedCategory === "All" || pkg.category === selectedCategory;

        // 3. Region Filter
        const matchesRegion =
          selectedRegion === "All" || pkg.region === selectedRegion;

        // 4. Banner Icon Category Filter
        let matchesBannerCategory = true;
        if (
          activeBannerCategory !== "All Packages" &&
          activeBannerCategory !== "All" &&
          selectedCategory === "All"
        ) {
          const categoryConfig = bannerCategories.find(
            (c) => c.label === activeBannerCategory,
          );
          if (categoryConfig) {
            const kw = categoryConfig.keyword.toLowerCase();
            matchesBannerCategory =
              pkg.title.toLowerCase().includes(kw) ||
              (pkg.fullTitle && pkg.fullTitle.toLowerCase().includes(kw)) ||
              (pkg.highlights &&
                pkg.highlights.some((h) => h.toLowerCase().includes(kw)));
          }
        }

        return (
          matchesSearch &&
          matchesCategory &&
          matchesRegion &&
          matchesBannerCategory
        );
      })
      .sort((a, b) => {
        const getNumericPrice = (item) =>
          item.price ? parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0 : 0;
        if (sortBy === "price-low") return getNumericPrice(a) - getNumericPrice(b);
        if (sortBy === "price-high") return getNumericPrice(b) - getNumericPrice(a);
        if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
        return 0;
      });
  }, [
    searchQuery,
    selectedCategory,
    selectedRegion,
    activeBannerCategory,
    sortBy,
  ]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <main className="flex-1">
        {/* ================= MALDIVES SUNSET HERO BANNER ================= */}
        <section className="w-11/12  mx-auto my-6 lg:my-8 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-12 lg:py-16 text-white">
          {/* Background Image: Maldives Ocean Sunset */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?q=100"
              alt="Maldives Tropical Sunset Vacation"
              fill
              priority
              sizes="100vw"
              quality={95}
              className="object-cover object-center scale-105"
            />
            {/* Soft dark gradient overlay for crystal clear contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 z-10 pointer-events-none" />
          </div>

          {/* Top Banner Content: Title & Subtitle */}
          <div className="relative z-20 mb-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="">
              <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Find Your Perfect Vacation
              </h1>

              <p className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                Explore our curated selection of holiday packages for every
                traveler.
              </p>
            </div>
          </div>

          {/* Middle Banner: Glassmorphism Filters Container */}
          <div className="relative z-20">
            {/* Glass Filter Control Bar (Main Tabs, Search, Sort & Region Pills) */}
            <div className="bg-white/15 backdrop-blur-none border border-white/25 rounded-[2rem] p-3.5 sm:p-5 shadow-2xl space-y-3.5">
              {/* Top Controls Row */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                {/* Category Toggle Tabs (All Packages, International, Domestic) */}
                <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md p-1 rounded-2xl w-full lg:w-auto border border-white/15">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedRegion("All");
                        setActiveBannerCategory("All Packages");
                      }}
                      className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        selectedCategory === cat
                          ? "bg-[#19a64b] text-white shadow-md"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {cat === "International" && (
                        <FaGlobe className="text-xs" />
                      )}
                      {cat === "Domestic" && (
                        <FaLocationDot className="text-xs" />
                      )}
                      <span>{cat === "All" ? "All Packages" : cat}</span>
                    </button>
                  ))}
                </div>

                {/* Search & Sort Controls */}
                <div className="flex items-center gap-2.5 w-full lg:w-auto justify-between lg:justify-end">
                  {/* Search Bar */}
                  <div className="relative flex items-center bg-white/20 backdrop-blur-md rounded-xl px-3 py-2 border border-white/30 focus-within:border-white transition-colors flex-1 lg:flex-none lg:w-64">
                    <FaMagnifyingGlass className="text-white/70 text-xs shrink-0 mr-2" />
                    <input
                      type="text"
                      placeholder="Search packages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-white/60 text-xs outline-none font-sans"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="text-xs text-white/70 hover:text-white ml-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Region Sub-Filters Row */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-white/15">
                <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider shrink-0 mr-1">
                  REGION:
                </span>
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      selectedRegion === region
                        ? "bg-slate-950 text-white font-bold shadow-md"
                        : "bg-white/15 backdrop-blur-md text-white border border-white/25 hover:bg-white/25"
                    }`}
                  >
                    {region === "All" ? "All Regions" : region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PACKAGES GRID SECTION ================= */}
        <section className="w-11/12  mx-auto pb-10">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPackages.map((item) => renderPackageCard(item))}
            </div>
          ) : (
            /* Empty Search Results State */
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-2xl">
                <FaMagnifyingGlass />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                No Tour Packages Found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any holiday packages matching your search. Try
                adjusting your filters or search keywords.
              </p>
              <button
                onClick={handleViewAll}
                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-secondary transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Package Card Render Helper
function renderPackageCard(item) {
  return (
    <div key={item.id} className="w-full">
      <Link
        href={`/tour-packages/${item.id}`}
        className="bg-white rounded-[2.25rem] border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 p-3.5 flex flex-col justify-between h-full group block"
      >
        <div>
          {/* Card Image Container */}
          <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-3.5 bg-slate-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
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
            <div className="grid grid-cols-4 gap-1 mb-3 bg-slate-50/80 p-2 rounded-2xl border border-slate-100">
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
                  <span className="text-[10px] text-slate-700 leading-tight line-clamp-1 w-full text-center">
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
                item.highlights.slice(0, 2).map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start gap-1.5">
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
                  <span className="text-slate-400 font-bold text-xs">•</span>
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
  );
}
