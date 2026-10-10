"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaPassport,
  FaMagnifyingGlass,
  FaSliders,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { client, urlFor } from "@/lib/sanity";
import { IoTicketOutline } from "react-icons/io5";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const ITEMS_PER_PAGE = 8;

export default function VisasListingPage() {
  const [visasData, setVisasData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const cacheRef = useRef(new Map());
  const abortControllerRef = useRef(null);
  const requestIdRef = useRef(0);

  const regions = [
    "All Regions",
    "Asia",
    "Europe",
    "Middle East",
    "Africa",
    "Americas",
  ];

  // Debounce search query: 350ms delay, minimum 3 characters required to trigger search
  useEffect(() => {
    const trimmed = searchQuery.trim();

    if (trimmed.length === 0) {
      setDebouncedQuery("");
      setCurrentPage(1);
      return;
    }

    if (trimmed.length < 3) {
      if (debouncedQuery !== "") {
        const timer = setTimeout(() => {
          setDebouncedQuery("");
          setCurrentPage(1);
        }, 350);
        return () => clearTimeout(timer);
      }
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedQuery(trimmed);
      setCurrentPage(1);
    }, 350);

    return () => clearTimeout(timer);
  }, [searchQuery, debouncedQuery]);

  // Fetch only 8 items from API based on currentPage, debouncedQuery, selectedRegion, and sortBy
  useEffect(() => {
    // Cancel previous in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const currentRequestId = ++requestIdRef.current;
    let isSubscribed = true;

    async function fetchVisas() {
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = currentPage * ITEMS_PER_PAGE;

      const cacheKey = JSON.stringify({
        q: debouncedQuery,
        reg: selectedRegion,
        sort: sortBy,
        page: currentPage,
      });

      // Check client-side cache first to prevent duplicate network calls
      if (cacheRef.current.has(cacheKey)) {
        const cachedData = cacheRef.current.get(cacheKey);
        setVisasData(cachedData.items);
        setTotalCount(cachedData.total);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        let filterConditions = [`_type == "visaService"`];

        if (debouncedQuery) {
          const q = debouncedQuery.replace(/[\\"*]/g, "\\$&");
          filterConditions.push(`(title match "*${q}*" || duration match "*${q}*")`);
        }

        if (selectedRegion !== "All Regions" && selectedRegion !== "All") {
          if (selectedRegion === "Middle East") {
            filterConditions.push(
              `(title match "*UAE*" || title match "*Saudi*" || title match "*Qatar*" || title match "*Oman*" || title match "*Dubai*" || title match "*Kuwait*" || title match "*Bahrain*")`
            );
          } else if (selectedRegion === "Asia") {
            filterConditions.push(
              `(title match "*Singapore*" || title match "*Thailand*" || title match "*Japan*" || title match "*Malaysia*" || title match "*Bali*" || title match "*Vietnam*")`
            );
          } else if (selectedRegion === "Europe") {
            filterConditions.push(
              `(title match "*UK*" || title match "*Schengen*" || title match "*Europe*")`
            );
          } else if (selectedRegion === "Americas") {
            filterConditions.push(
              `(title match "*USA*" || title match "*Canada*")`
            );
          }
        }

        const filterString = filterConditions.join(" && ");
        const orderString = `| order(orderRank asc, _createdAt desc)`;

        const query = `{
          "total": count(*[${filterString}]),
          "items": *[${filterString}] ${orderString} [${start}...${end}]{ _id, title, slug, duration, validity, price, badge, image, highlights }
        }`;

        const data = await client.fetch(query, {}, { signal: controller.signal });

        if (!isSubscribed || requestIdRef.current !== currentRequestId) {
          return;
        }

        if (data && data.items && data.total > 0) {
          let formatted = data.items.map((item) => ({
            id: item._id,
            title: item.title,
            slug: item.slug?.current || item.slug || item._id,
            duration: item.duration || "",
            validity: item.validity || "",
            price: item.price || "",
            badge: item.badge || "",
            image: item.image
              ? urlFor(item.image)?.url()
              : "/visapageban.webp",
            highlights: item.highlights || [],
            link: `/visas/${item.slug?.current || item.slug || item._id}`,
          }));

          // Client-side price sorting if applicable
          if (sortBy === "price-low") {
            formatted.sort((a, b) => {
              const pA = parseInt(String(a.price).replace(/[^0-9]/g, ""), 10) || 0;
              const pB = parseInt(String(b.price).replace(/[^0-9]/g, ""), 10) || 0;
              return pA - pB;
            });
          } else if (sortBy === "price-high") {
            formatted.sort((a, b) => {
              const pA = parseInt(String(a.price).replace(/[^0-9]/g, ""), 10) || 0;
              const pB = parseInt(String(b.price).replace(/[^0-9]/g, ""), 10) || 0;
              return pB - pA;
            });
          }

          // Cache result (limit cache to 50 items)
          if (cacheRef.current.size > 50) {
            const firstKey = cacheRef.current.keys().next().value;
            cacheRef.current.delete(firstKey);
          }
          cacheRef.current.set(cacheKey, { items: formatted, total: data.total });

          setVisasData(formatted);
          setTotalCount(data.total);
        } else {
          setVisasData([]);
          setTotalCount(0);
          if (cacheRef.current.size > 50) {
            const firstKey = cacheRef.current.keys().next().value;
            cacheRef.current.delete(firstKey);
          }
          cacheRef.current.set(cacheKey, { items: [], total: 0 });
        }
      } catch (error) {
        // Silently ignore aborted requests
        if (error?.name === "AbortError" || controller.signal.aborted) {
          return;
        }
        console.error("Error fetching visa services from Sanity API:", error);
        if (isSubscribed && requestIdRef.current === currentRequestId) {
          setTotalCount(0);
          setVisasData([]);
        }
      } finally {
        if (isSubscribed && requestIdRef.current === currentRequestId) {
          setIsLoading(false);
        }
      }
    }

    fetchVisas();

    return () => {
      isSubscribed = false;
      controller.abort();
    };
  }, [currentPage, debouncedQuery, selectedRegion, sortBy]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const el = document.getElementById("visa-grid-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    setCurrentPage(1);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const resetAllFilters = () => {
    setSelectedRegion("All Regions");
    setSearchQuery("");
    setDebouncedQuery("");
    setSortBy("default");
    setCurrentPage(1);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-16">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="w-full md:w-11/12 mx-auto mb-6 lg:my-8 rounded-none md:rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col justify-between p-4 py-6 sm:p-10 lg:p-12 lg:py-16 text-white">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/visapageban.webp"
            alt="Express Visa Services Background"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 via-black/50 to-black/50 md:to-black/0 z-10 pointer-events-none" />
        </div>

        {/* Top Banner Content: Title & Subtitle */}
        <div className="relative xl:pt-6 z-20 mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              Find Your <span className="font-semibold">Visa Services</span>
            </h1>
            <p className="text-slate-200 text-xs sm:text-base font-normal w-[90%] md:w-full leading-relaxed pt-1.5">
              Explore our express tourist, business, and visitor visa options for every destination.
            </p>
          </div>
        </div>

        {/* Middle Banner: Highly Mobile Responsive Clean Filter Card */}
        <div className="relative z-20">
          <div className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl space-y-3 sm:space-y-4 text-slate-800">
            
            {/* Top Row: Search Input & Sort Dropdown Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full flex-1">
              
              {/* Search Bar */}
              <div className="relative flex items-center bg-slate-50 border border-slate-200/90 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 focus-within:border-[#19a64b] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#19a64b]/20 transition-all flex-1">
                <FaMagnifyingGlass className="text-slate-400 text-xs shrink-0 mr-2 sm:mr-2.5" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search visa packages"
                  className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-hidden font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    aria-label="Clear search"
                    className="text-xs text-slate-400 hover:text-slate-700 ml-1 cursor-pointer font-medium"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="w-full sm:w-auto bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl pl-3 sm:pl-3.5 pr-8 py-2 sm:py-2.5 border border-slate-200/90 focus:outline-hidden focus:border-[#19a64b] cursor-pointer appearance-none"
                >
                  <option value="default" className="bg-white text-slate-900">
                    Sort: Default
                  </option>
                  <option value="price-low" className="bg-white text-slate-900">
                    Price: Low → High
                  </option>
                  <option value="price-high" className="bg-white text-slate-900">
                    Price: High → Low
                  </option>
                </select>
                <FaSliders className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
              </div>

            </div>

            {/* Bottom Row: Region Sub-Filter Pills */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar pt-2 sm:pt-2.5 border-t border-slate-200/80 scroll-smooth pb-0.5">
              <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider shrink-0 mr-1 bg-slate-100 px-2 sm:px-2.5 py-1 rounded-md border border-slate-200/80">
                REGION:
              </span>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => handleRegionChange(region)}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    selectedRegion === region
                      ? "bg-[#19a64b] text-white shadow-sm font-semibold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60"
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
      <section id="visa-grid-section" className="w-11/12 mx-auto pt-6">
        
        {/* Results Counter Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {totalCount > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-slate-900">
              {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)}
            </span>{" "}
            of <span className="font-semibold text-slate-900">{totalCount}</span> available visa services
          </p>
          {(selectedRegion !== "All Regions" || searchQuery || sortBy !== "default") && (
            <button
              onClick={resetAllFilters}
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
        ) : totalCount === 0 || visasData.length === 0 ? (
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
              onClick={resetAllFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-medium shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* 4-COLUMN VISA GRID */
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visasData.map((item) => (
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

            {/* Modern Responsive Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-slate-200/80">
                {/* Entry Counter Text */}
                <p className="text-xs text-slate-500 font-normal text-center sm:text-left">
                  Showing{" "}
                  <span className="font-semibold text-slate-900">
                    {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-slate-900">
                    {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)}
                  </span>{" "}
                  of <span className="font-semibold text-slate-900">{totalCount}</span> entries
                </p>

                {/* Pagination Controls */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center gap-1.5 w-9 h-9 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                    aria-label="Previous Page"
                  >
                    <FaChevronLeft className="text-[10px]" />
          
                  </button>

                  {/* Page Number Buttons */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      const isActive = page === currentPage;
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-9 h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                            isActive
                              ? "bg-primary text-white shadow-md shadow-emerald-600/20 scale-105"
                              : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center gap-1.5 w-9 h-9 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                    aria-label="Next Page"
                  >

                    <FaChevronRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </section>
    </div>
  );
}