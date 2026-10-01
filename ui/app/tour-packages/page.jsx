"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { tourPackagesData } from "@/data/allData";
import { client, urlFor } from "@/lib/sanity";
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
  FaSliders,
  FaChevronLeft,
  FaChevronRight,
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

const ITEMS_PER_PAGE = 8;

export default function TourPackagesPage() {
  const [packagesList, setPackagesList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeBannerCategory, setActiveBannerCategory] =
    useState("All Packages");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const bannerRef = useRef(null);

  const categories = ["All", "International", "Domestic"];
  const regions = [
    "All",
    "Asia",
    "Europe",
    "Middle East",
    "Africa",
    "Americas",
  ];

  // Fetch only 8 items from Sanity API based on pagination & active filters
  useEffect(() => {
    let isSubscribed = true;

    async function fetchTourPackages() {
      setIsLoading(true);
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = currentPage * ITEMS_PER_PAGE;

      try {
        let filterConditions = [`_type == "tourPackage"`];

        if (searchQuery.trim()) {
          const q = searchQuery.trim().replace(/"/g, '\\"');
          filterConditions.push(
            `(title match "*${q}*" || fullTitle match "*${q}*" || region match "*${q}*")`
          );
        }

        if (selectedCategory !== "All") {
          filterConditions.push(
            `(category == "${selectedCategory}" || category match "*${selectedCategory}*")`
          );
        }

        if (selectedRegion !== "All") {
          if (selectedRegion === "Asia") {
            filterConditions.push(
              `(region match "*Asia*" || region match "*Southeast*" || region match "*India*")`
            );
          } else if (selectedRegion === "Europe") {
            filterConditions.push(
              `(region match "*Europe*" || region match "*Eurasia*")`
            );
          } else {
            filterConditions.push(`region match "*${selectedRegion}*"`);
          }
        }

        const filterString = filterConditions.join(" && ");
        const orderString = `| order(orderRank asc, _createdAt desc)`;

        const query = `{
          "total": count(*[${filterString}]),
          "items": *[${filterString}] ${orderString} [${start}...${end}]{ _id, id, title, fullTitle, category, region, duration, price, oldPrice, badge, badgeType, rating, reviewsCount, image, gallery, overview, inclusionIcons, highlights, itinerary, inclusions, exclusions }
        }`;

        const data = await client.fetch(query);

        if (isSubscribed) {
          if (data && data.items && data.total > 0) {
            let formatted = data.items.map((item) => {
              const slugId = item.id?.current || item.id || item._id;
              const mainImageUrl = item.image ? urlFor(item.image)?.url() : null;
              const galleryUrls =
                item.gallery && Array.isArray(item.gallery)
                  ? item.gallery.map((g) => urlFor(g)?.url()).filter(Boolean)
                  : [];

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
                image:
                  mainImageUrl ||
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
                gallery:
                  galleryUrls.length > 0
                    ? galleryUrls
                    : [mainImageUrl].filter(Boolean),
                link: `/tour-packages/${slugId}`,
                overview: item.overview || "",
                inclusionIcons: item.inclusionIcons || [
                  { icon: "hotel", label: "04 Nights stay" },
                  { icon: "breakfast", label: "Daily breakfast" },
                  { icon: "transfer", label: "All transfers" },
                  { icon: "sightseeing", label: "Sight seeing" },
                ],
                highlights: item.highlights || [],
                itinerary: item.itinerary || [],
                inclusions: item.inclusions || [],
                exclusions: item.exclusions || [],
              };
            });

            // Apply price/rating sorting
            if (sortBy === "price-low") {
              formatted.sort(
                (a, b) =>
                  (parseInt(String(a.price).replace(/[^0-9]/g, ""), 10) || 0) -
                  (parseInt(String(b.price).replace(/[^0-9]/g, ""), 10) || 0)
              );
            } else if (sortBy === "price-high") {
              formatted.sort(
                (a, b) =>
                  (parseInt(String(b.price).replace(/[^0-9]/g, ""), 10) || 0) -
                  (parseInt(String(a.price).replace(/[^0-9]/g, ""), 10) || 0)
              );
            } else if (sortBy === "rating") {
              formatted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            }

            setPackagesList(formatted);
            setTotalCount(data.total);
          } else {
            // Fallback dataset slicing logic
            const filteredFallback = tourPackagesData
              .filter((pkg) => {
                const matchesSearch =
                  !searchQuery ||
                  pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (pkg.fullTitle &&
                    pkg.fullTitle
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())) ||
                  (pkg.region &&
                    pkg.region
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()));

                const matchesCategory =
                  selectedCategory === "All" ||
                  (Array.isArray(pkg.category)
                    ? pkg.category.includes(selectedCategory)
                    : pkg.category === selectedCategory);

                const matchesRegion =
                  selectedRegion === "All" ||
                  (pkg.region &&
                    (pkg.region === selectedRegion ||
                      pkg.region
                        .toLowerCase()
                        .includes(selectedRegion.toLowerCase())));

                return matchesSearch && matchesCategory && matchesRegion;
              })
              .sort((a, b) => {
                const pA =
                  parseInt(String(a.price).replace(/[^0-9]/g, ""), 10) || 0;
                const pB =
                  parseInt(String(b.price).replace(/[^0-9]/g, ""), 10) || 0;
                if (sortBy === "price-low") return pA - pB;
                if (sortBy === "price-high") return pB - pA;
                if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
                return 0;
              });

            setTotalCount(filteredFallback.length);
            setPackagesList(filteredFallback.slice(start, end));
          }
        }
      } catch (err) {
        console.error("Error fetching tour packages from Sanity:", err);
        if (isSubscribed) {
          const start = (currentPage - 1) * ITEMS_PER_PAGE;
          const end = currentPage * ITEMS_PER_PAGE;
          setTotalCount(tourPackagesData.length);
          setPackagesList(tourPackagesData.slice(start, end));
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    }

    fetchTourPackages();

    return () => {
      isSubscribed = false;
    };
  }, [
    currentPage,
    searchQuery,
    selectedCategory,
    selectedRegion,
    activeBannerCategory,
    sortBy,
  ]);

  // Parallax Scroll Effect Setup for Maldives Sunset Banner
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const el = document.getElementById("packages-grid-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedRegion("All");
    setActiveBannerCategory("All Packages");
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

  const handleViewAll = () => {
    setActiveBannerCategory("All Packages");
    setSelectedCategory("All");
    setSelectedRegion("All");
    setSearchQuery("");
    setSortBy("default");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <main className="flex-1">
        {/* ================= HERO BANNER ================= */}
        <section
          ref={bannerRef}
          className="w-full md:w-11/12 mx-auto mb-6 lg:my-8 rounded-none md:rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col justify-between p-4 py-6 sm:p-10 lg:p-12 lg:py-16 text-white"
        >
          {/* Background Image: World Travel Scenic Landscape with Parallax Scroll Effect */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
              style={{ y: bgY, scale: bgScale }}
              className="absolute -inset-y-12 inset-x-0 w-full h-[130%]"
            >
              <Image
                src="/image123.webp"
                alt="World Tour Packages Background"
                fill
                priority
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
                quality={95}
                className="object-cover object-bottom scale-x-[-1]"
              />
            </motion.div>
            {/* Soft dark gradient overlay for crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-black/50 to-black/50 md:to-black/0 z-10 pointer-events-none" />
          </div>

          {/* Top Banner Content: Title & Subtitle */}
          <div className="relative xl:pt-10 z-20 mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
            
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Find Your <span className="font-semibold">Perfect Vacation</span>
              </h1>
              <p className="text-slate-200 text-xs sm:text-base font-normal w-[80%] md:w-full leading-relaxed pt-1.5">
                Explore our curated selection of holiday packages for every traveler.
              </p>
            </div>
          </div>

          {/* Middle Banner: Highly Mobile Responsive Clean Filter Card */}
          <div className="relative z-20">
            <div className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl space-y-3 sm:space-y-4 text-slate-800">
              
              {/* Top Row: Category Tabs, Search Bar & Sort Dropdown */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5 sm:gap-3">
                
                {/* Category Segmented Tabs */}
                <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl sm:rounded-2xl border border-slate-200/80 w-full lg:w-auto overflow-x-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex-1 sm:flex-initial px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                        selectedCategory === cat
                          ? "bg-[#19a64b] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                      }`}
                    >
                      {cat === "International" && (
                        <FaGlobe className="text-[10px] sm:text-xs shrink-0" />
                      )}
                      {cat === "Domestic" && (
                        <FaLocationDot className="text-[10px] sm:text-xs shrink-0" />
                      )}
                      <span>{cat === "All" ? "All Packages" : cat}</span>
                    </button>
                  ))}
                </div>

                {/* Search Input & Sort Dropdown Group */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full flex-1">
                  
                  {/* Search Bar */}
                  <div className="relative flex items-center bg-slate-50 border border-slate-200/90 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 focus-within:border-[#19a64b] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#19a64b]/20 transition-all flex-1">
                    <FaMagnifyingGlass className="text-slate-400 text-xs shrink-0 mr-2 sm:mr-2.5" />
                    <input
                      type="text"
                      placeholder="Search holiday packages..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-hidden font-medium"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setCurrentPage(1);
                        }}
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
                      <option value="rating" className="bg-white text-slate-900">
                        Rating: Top Rated
                      </option>
                    </select>
                    <FaSliders className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                  </div>

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
                    {region === "All" ? "All Regions" : region}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ================= PACKAGES GRID SECTION ================= */}
        <section id="packages-grid-section" className="w-11/12 mx-auto pb-10 pt-4">
          {/* Results Counter Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-slate-500 font-normal">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {totalCount > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-slate-900">
                {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)}
              </span>{" "}
              of <span className="font-semibold text-slate-900">{totalCount}</span> available tour packages
            </p>
            {(selectedCategory !== "All" ||
              selectedRegion !== "All" ||
              searchQuery ||
              sortBy !== "default") && (
              <button
                onClick={handleViewAll}
                className="text-xs text-primary hover:underline font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[...Array(8)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[2.25rem] border border-slate-200/80 p-3.5 flex flex-col justify-between h-full animate-pulse space-y-3"
                >
                  <div>
                    <div className="w-full aspect-[4/3] rounded-[1.75rem] bg-slate-200 mb-3.5" />
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-5 bg-slate-200 rounded-md w-2/3" />
                      <div className="h-4 bg-slate-200 rounded-md w-10" />
                    </div>
                    <div className="h-3.5 bg-slate-200 rounded-md w-1/3 mb-3" />
                    <div className="grid grid-cols-4 gap-1 mb-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-xl bg-slate-200" />
                          <div className="h-2.5 bg-slate-200 rounded w-8" />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="h-3 bg-slate-200 rounded w-full" />
                      <div className="h-3 bg-slate-200 rounded w-3/4" />
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                    <div className="h-6 bg-slate-200 rounded w-24" />
                    <div className="w-9 h-9 rounded-full bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : packagesList.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {packagesList.map((item) => renderPackageCard(item))}
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
  );
}
