"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tourPackagesData } from "@/data/allData";
import { client, urlFor } from "@/lib/sanity";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  FaAngleRight,
  FaStar,
  FaCheck,
  FaXmark,
  FaWhatsapp,
  FaArrowRight,
  FaPercent,
  FaCalendarDays,
  FaCircleCheck,
  FaCircleXmark,
  FaCompass,
  FaLocationDot,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImages,
} from "react-icons/fa6";



export default function TourPackageDetailPage() {
  const params = useParams();
  const packageId = params?.id;

  const [isLoading, setIsLoading] = useState(true);
  const [pkg, setPkg] = useState(null);
  const [relatedPackages, setRelatedPackages] = useState([]);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [activeImage, setActiveImage] = useState("");

  // Gallery & Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    async function fetchPackageDetail() {
      if (!packageId) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const query = `*[_type == "tourPackage" && (id.current == $id || _id == $id)][0]{
          _id,
          id,
          title,
          fullTitle,
          description,
          category,
          region,
          duration,
          price,
          oldPrice,
          badge,
          badgeType,
          rating,
          image,
          gallery,
          overview,
          inclusionIcons,
          highlights,
          keyHighlights,
          itinerary,
          inclusions,
          exclusions
        }`;
        const data = await client.fetch(query, { id: packageId });

        let currentPkg = null;
        if (data) {
          const mainImageUrl = data.image
            ? urlFor(data.image)?.width(1000).auto("format").quality(85).url()
            : null;
          const galleryUrls =
            data.gallery && Array.isArray(data.gallery)
              ? data.gallery
                  .map((g) =>
                    urlFor(g)?.width(800).auto("format").quality(80).url(),
                  )
                  .filter(Boolean)
              : [];

          currentPkg = {
            id: data.id?.current || data._id,
            title: data.title,
            fullTitle: data.fullTitle || `${data.title} Tour Package`,
            description: data.description || "",
            category: data.category || "International",
            region: data.region || "Eurasia",
            duration: data.duration || "5 Days 4 Nights",
            price: data.price,
            oldPrice: data.oldPrice,
            badge: data.badge,
            badgeType: data.badgeType || "fire-orange",
            rating: data.rating ? Number(data.rating) : 4.8,
            image:
              mainImageUrl ||
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
            gallery:
              galleryUrls.length > 0
                ? galleryUrls
                : [mainImageUrl].filter(Boolean),
            overview: data.overview || "",
            inclusionIcons: data.inclusionIcons || [],
            highlights:
              data.keyHighlights && data.keyHighlights.length > 0
                ? data.keyHighlights
                : data.highlights || [],
            itinerary: data.itinerary || [],
            inclusions: data.inclusions || [],
            exclusions: data.exclusions || [],
          };
          setPkg(currentPkg);
          if (currentPkg.image) {
            setActiveImage(currentPkg.image);
          }
        } else {
          const fallback = tourPackagesData.find((p) => p.id === packageId);
          currentPkg = fallback ? { ...fallback, description: fallback.description || fallback.overview || "" } : null;
          setPkg(currentPkg);
          if (fallback?.image) setActiveImage(fallback.image);
        }

        // Fetch real related packages from Sanity
        const allQuery = `*[_type == "tourPackage"] | order(orderRank asc, _createdAt desc)[0...6]{
          _id,
          id,
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
          image,
          inclusionIcons,
          highlights
        }`;
        const allData = await client.fetch(allQuery);
        if (allData && allData.length > 0) {
          const formattedAll = allData.map((item) => {
            const slugId = item.id?.current || item.id || item._id;
            const mainImageUrl = item.image ? urlFor(item.image)?.url() : null;

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
              image:
                mainImageUrl ||
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
              inclusionIcons: item.inclusionIcons || [
                { icon: "hotel", label: "04 Nights stay" },
                { icon: "breakfast", label: "Daily breakfast" },
                { icon: "transfer", label: "All transfers" },
                { icon: "sightseeing", label: "Sight seeing" },
              ],
              highlights: item.highlights || [],
            };
          });

          const activeId = currentPkg ? currentPkg.id : packageId;
          const filtered = formattedAll
            .filter((p) => p.id !== activeId)
            .slice(0, 4);
          setRelatedPackages(
            filtered.length > 0
              ? filtered
              : tourPackagesData.filter((p) => p.id !== activeId).slice(0, 4),
          );
        } else {
          const activeId = currentPkg ? currentPkg.id : packageId;
          setRelatedPackages(
            tourPackagesData.filter((p) => p.id !== activeId).slice(0, 4),
          );
        }
      } catch (err) {
        console.error("Error fetching package detail from Sanity:", err);
        const fallback = tourPackagesData.find((p) => p.id === packageId);
        setPkg(fallback || null);
        if (fallback?.image) setActiveImage(fallback.image);
        setRelatedPackages(
          tourPackagesData.filter((p) => p.id !== packageId).slice(0, 4),
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchPackageDetail();
  }, [packageId]);

  const galleryImages = useMemo(() => {
    if (!pkg) return [];
    const list = [];
    if (pkg.image) list.push(pkg.image);
    if (pkg.gallery && Array.isArray(pkg.gallery)) {
      pkg.gallery.forEach((img) => {
        if (img) {
          list.push(img);
        }
      });
    }
    return list.length > 0 ? list : [];
  }, [pkg]);

  const openLightbox = (index = 0) => {
    const validIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
    setLightboxIndex(validIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const prevLightboxImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const nextLightboxImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        setLightboxIndex(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, galleryImages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || !formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      setPhoneError("Please enter a valid phone number with country code");
      return;
    }

    setPhoneError("");
    setSubmitted(true);

    const messageText = `Hi Middle East Travels,\n\nI would like to inquire about *${pkg?.fullTitle || pkg?.title || "Tour Package"}*.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📅 *Travel Date:* ${formData.date || "Not specified"}\n👥 *Travelers:* ${formData.guests}`;
    const whatsappUrl = `https://wa.me/917025144666?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setPhoneError("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        guests: "2",
        message: "",
      });
    }, 4000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 sm:p-10 animate-pulse">
        <div className="w-11/12 mx-auto space-y-6">
          <div className="h-4 bg-slate-200 rounded w-48 mb-4" />
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 space-y-3">
            <div className="h-6 bg-slate-200 rounded-full w-32" />
            <div className="h-8 bg-slate-200 rounded-md w-3/4" />
            <div className="h-4 bg-slate-200 rounded-md w-1/2" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="lg:col-span-2 h-[320px] md:h-[480px] rounded-3xl bg-slate-200" />
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="h-[90px] lg:h-[145px] rounded-2xl bg-slate-200" />
              <div className="h-[90px] lg:h-[145px] rounded-2xl bg-slate-200" />
              <div className="h-[90px] lg:h-[145px] rounded-2xl bg-slate-200" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <div className="h-14 bg-slate-200 rounded-2xl" />
              <div className="h-64 bg-slate-200 rounded-3xl" />
            </div>
            <div className="lg:col-span-4 h-96 bg-slate-200 rounded-3xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center py-20 px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-2xl">
          <FaMagnifyingGlass />
        </div>
        <h2 className="text-2xl font-bold text-[#021b38]">No Package Found</h2>
        <p className="text-sm text-slate-500 max-w-md">
          We couldn't find the tour package you are looking for. It may have
          been moved or updated.
        </p>
        <Link
          href="/tour-packages"
          className="px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-secondary transition-all"
        >
          Explore All Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 flex flex-col">
      <main className="flex-1 pb-20">
        {/* ================= BREADCRUMB & HEADER ================= */}
        <section className="w-11/12 mx-auto pt-6 pb-2">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4 overflow-x-auto no-scrollbar">
            <Link
              href="/"
              className="hover:text-[#19a64b] transition-colors shrink-0"
            >
              Home
            </Link>
            <FaAngleRight className="text-[10px] text-slate-300 shrink-0" />
            <Link
              href="/tour-packages"
              className="hover:text-[#19a64b] transition-colors shrink-0"
            >
              Tour Packages
            </Link>
            <FaAngleRight className="text-[10px] text-slate-300 shrink-0" />
            <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">
              {pkg.title}
            </span>
          </nav>

          {/* Header Title Section */}
          <div className="bg-white p-3 md:p-6 rounded-3xl border border-slate-200/70 shadow-xs space-y-3">
            <div className="flex items-center flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#19a64b] capitalize tracking-wider bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                <FaLocationDot className="text-[11px]" />
                <span>{pkg.title}</span>
              </span>
              {pkg.badge && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium">
                  <span>{pkg.badge}</span>
                </span>
              )}
              {pkg.rating && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-slate-200/80 text-slate-800 text-xs font-medium">
                  <FaStar className="text-amber-400 text-xs fill-amber-400" />
                  <span>{pkg.rating} Rating</span>
                </span>
              )}
            </div>

            <div className=" flex flex-wrap items-center gap-2 md:gap-5">
              <h1 className=" text-2xl md:text-3xl font-semibold text-[#021b38] tracking-tight leading-tight">
                {pkg.fullTitle || `${pkg.title} Tour Package`}
              </h1>

              <p className="bg-primary border border-emerald-200/80 px-3 py-1 rounded-full w-fit text-xs md:text-sm font-semibold text-white">
                {pkg.duration || `${pkg.duration} Holiday Package`}
              </p>
            </div>

            {pkg.intro && (
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {pkg.intro}
              </p>
            )}
          </div>
        </section>

        {/* ================= PHOTO GALLERY ================= */}
        <section className="w-11/12 mx-auto py-3">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 bg-white p-2 sm:p-3">
            {galleryImages.length <= 1 ? (
              /* 1 Photo: Full-width Hero */
              <div
                onClick={() => openLightbox(0)}
                className="relative w-full h-[350px] md:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 group cursor-pointer"
              >
                <Image
                  src={galleryImages[0] || "/visapageban.webp"}
                  alt={pkg.title}
                  fill
                  sizes="100vw"
                  quality={95}
                  priority
                  loading="eager"
                  className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-6 text-white">
                  <span className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/30 flex items-center gap-2">
                    <FaExpand className="text-xs" />
                    <span>Click to Expand</span>
                  </span>
                </div>
              </div>
            ) : (
              /* Left: Featured Hero Photo + Right: All Rest Images in a Clean Grid */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
                
                {/* Left Side: Large Featured Photo (7 of 12 cols on desktop) */}
                <div
                  onClick={() => openLightbox(0)}
                  className="md:col-span-7 relative h-[200px] md:h-[480px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 group cursor-pointer shadow-xs"
                >
                  <Image
                    src={galleryImages[0]}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    quality={95}
                    priority
                    loading="eager"
                    className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient & Hover Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5 text-white">
                    <span className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/30 flex items-center gap-2">
                      <FaExpand className="text-xs" />
                      <span>Main Cover Photo</span>
                    </span>
                
                  </div>

                
                </div>

                {/* Right Side: 6 images max on desktop, 4 images max on mobile (5 of 12 cols) */}
                <div className="md:col-span-5 h-full md:h-[480px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl">
                  {(() => {
                    const restImages = galleryImages.slice(1);
                    const totalRest = restImages.length;

                    if (totalRest === 0) return null;

                    if (totalRest === 1) {
                      return (
                        <div
                          onClick={() => openLightbox(1)}
                          className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-xs group cursor-pointer"
                        >
                          <Image
                            src={restImages[0]}
                            alt={`${pkg.title} photo 2`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center text-sm border border-white/40 shadow-sm group-hover:scale-110 transition-transform">
                              <FaExpand />
                            </span>
                          </div>
                        </div>
                      );
                    }

                    if (totalRest === 2) {
                      return (
                        <div className="grid grid-cols-1 gap-2 sm:gap-2.5 h-full">
                          {restImages.map((imgUrl, idx) => (
                            <div
                              key={idx + 1}
                              onClick={() => openLightbox(idx + 1)}
                              className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-xs group cursor-pointer"
                            >
                              <Image
                                src={imgUrl}
                                alt={`${pkg.title} photo ${idx + 2}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center text-xs border border-white/40 shadow-sm group-hover:scale-110 transition-transform">
                                  <FaExpand />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }

                    // For 3 or more rest images:
                    // Desktop: 2 cols x 3 rows grid (up to 6 images)
                    // Mobile: 2 cols x 2 rows grid (up to 4 images)
                    const displayed = restImages.slice(0, 6);

                    return (
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 h-full auto-rows-fr">
                        {displayed.map((imgUrl, idx) => {
                          const actualIndex = idx + 1;
                          const isMobileHidden = idx >= 4; // 5th and 6th items hidden on mobile
                          const isMobileLast = idx === 3 && totalRest > 4; // 4th item on mobile
                          const isDesktopLast = idx === 5 && totalRest > 6; // 6th item on desktop

                          return (
                            <div
                              key={actualIndex}
                              onClick={() => openLightbox(actualIndex)}
                              className={`relative h-full min-h-[105px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-xs group cursor-pointer transition-all duration-300 hover:shadow-md ${
                                isMobileHidden ? "hidden md:block" : ""
                              }`}
                            >
                              <Image
                                src={imgUrl}
                                alt={`${pkg.title} photo ${actualIndex + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 22vw"
                                className="object-cover object-center transition-all duration-500 group-hover:scale-108"
                              />

                              {/* Standard Hover Overlay with Expand Icon */}
                              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center text-xs border border-white/40 shadow-sm group-hover:scale-110 transition-transform">
                                  <FaExpand />
                                </span>
                              </div>

                              {/* Mobile "+N More" overlay on the 4th item if totalRest > 4 */}
                              {isMobileLast && (
                                <div
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openLightbox(4);
                                  }}
                                  className="md:hidden absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-2 text-center transition-all group-hover:bg-slate-950/75"
                                >
                                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                                    +{totalRest - 3}
                                  </span>
                                  <span className="text-[9px] font-medium text-slate-200 uppercase tracking-wider mt-0.5">
                                    More Photos
                                  </span>
                                </div>
                              )}

                              {/* Desktop "+N More" overlay on the 6th item if totalRest > 6 */}
                              {isDesktopLast && (
                                <div
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openLightbox(6);
                                  }}
                                  className="hidden md:flex absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] flex-col items-center justify-center text-white p-2 text-center transition-all group-hover:bg-slate-950/75"
                                >
                                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                                    +{totalRest - 5}
                                  </span>
                                  <span className="text-[10px] font-medium text-slate-200 uppercase tracking-wider mt-0.5">
                                    More Photos
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>

              </div>
            )}

            {/* Floating "View All Photos" Action Badge Button */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="hidden md:absolute bottom-7 right-7 bg-white/60 hover:bg-white text-slate-900 px-2 py-1 rounded-xl sm:rounded-2xl text-[10px] border border-slate-200/90 shadow-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 backdrop-blur-md cursor-pointer z-10"
                aria-label={`View all ${galleryImages.length} photos`}
              >
           
                <span>View All Photos ({galleryImages.length})</span>
              </button>
            )}
          </div>
        </section>

        {pkg?.description && (
          <section className="w-11/12 mx-auto bg-white p-4 md:p-6 rounded-3xl border border-slate-200/70 shadow-xs space-y-3">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
              {pkg.description}
            </p>
          </section>
        )}

        {/* ================= MAIN CONTENT & STICKY SIDEBAR ================= */}
        <section className="w-11/12 mx-auto pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT 8 COLS: Modern Tabbed Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Modern Segmented Navigation Tabs Pill Bar */}
              <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
                {[
                  {
                    id: "itinerary",
                    label: "Day Details",
                    icon: <FaCalendarDays className="text-sm" />,
                  },
                  {
                    id: "inclusions",
                    label: "Inclusions & Exclusions",
                    icon: <FaCircleCheck className="text-sm" />,
                  },
                  {
                    id: "overview",
                    label: "Overview & Highlights",
                    icon: <FaCompass className="text-sm" />,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[170px] py-3 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-[#19a64b] text-white shadow-md shadow-[#19a64b]/25 scale-[1.01]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* TAB 1: DAY DETAILS (DAY-BY-DAY ITINERARY WITH TIMELINE) */}
              {activeTab === "itinerary" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-medium text-[#021b38]">
                        Day Details
                      </h2>
                      <p className="text-xs text-slate-500 pt-0.5 font-normal">
                        Complete day-by-day travel schedule & sightseeing plan
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
                      {pkg.duration || "Multi-Day Tour"}
                    </span>
                  </div>

                  <div className="py-2">
                    {pkg.itinerary &&
                      pkg.itinerary.map((dayItem, idx) => {
                        const bullets = Array.isArray(dayItem.description)
                          ? dayItem.description
                          : Array.isArray(dayItem.bullets)
                            ? dayItem.bullets
                            : typeof dayItem.description === "string"
                              ? dayItem.description.split(". ").filter(Boolean)
                              : [];

                        const isLast = idx === pkg.itinerary.length - 1;

                        return (
                          <div
                            key={dayItem.day}
                            className="flex items-stretch gap-3.5 sm:gap-5 group"
                          >
                            {/* Timeline Column: Green Circle Node (1, 2, 3...) & Vertical Line */}
                            <div className="flex flex-col items-center shrink-0 w-9 sm:w-10">
                              {/* Circle Node with Green Border & Day Number */}
                              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#19a64b] bg-white text-[#19a64b] font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 z-10 shadow-xs group-hover:bg-[#19a64b] group-hover:text-white transition-all duration-300">
                                {dayItem.day}
                              </div>
                              {/* Vertical Connecting Line */}
                              {!isLast && (
                                <div className="w-[2px] bg-gradient-to-b from-[#19a64b] via-emerald-400 to-slate-200 flex-1 my-1 rounded-full" />
                              )}
                            </div>

                            {/* Content Card Column */}
                            <div
                              className={`flex-1 ${!isLast ? "pb-6 sm:pb-8" : "pb-0"}`}
                            >
                              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/70 hover:border-emerald-300 transition-all duration-300 shadow-2xs group-hover:shadow-xs space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-[#021b38] flex items-center gap-2">
                                  <span className="text-rose-500 text-lg">
                                    📍
                                  </span>
                                  <span>
                                    Day {dayItem.day} – {dayItem.title}
                                  </span>
                                </h3>

                                {bullets.length > 0 ? (
                                  <ul className="pl-6 space-y-2 list-disc text-xs sm:text-sm text-slate-700 marker:text-[#19a64b] font-medium">
                                    {bullets.map((b, bIdx) => (
                                      <li
                                        key={bIdx}
                                        className="pl-1 leading-relaxed"
                                      >
                                        {b}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="pl-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                                    {dayItem.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
              {activeTab === "inclusions" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl sm:text-2xl font-medium text-[#021b38]">
                      Inclusions & Exclusions
                    </h2>
                    <p className="text-xs text-slate-500 pt-0.5 font-normal">
                      Detailed view of package features, coverage, and
                      exclusions
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Package Includes Card */}
                    <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100 space-y-4">
                      <div className="flex items-center gap-2.5 text-emerald-900 border-b border-emerald-200/60 pb-3">
                        <FaCircleCheck className="text-xl text-[#19a64b]" />
                        <h3 className="text-base sm:text-lg font-medium">
                          {pkg.title} Tour Package Includes
                        </h3>
                      </div>

                      {pkg.inclusions ? (
                        <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                          {pkg.inclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <FaCheck className="text-[#19a64b] text-xs shrink-0 mt-1" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-slate-600">
                          Hotel Stay • Airport Transfers • Sightseeing •
                          Attraction Tickets • Daily Buffet Breakfast
                        </p>
                      )}
                    </div>

                    {/* Package Excludes Card */}
                    <div className="bg-rose-50/40 p-6 rounded-2xl border border-rose-100 space-y-4">
                      <div className="flex items-center gap-2.5 text-rose-900 border-b border-rose-200/60 pb-3">
                        <FaCircleXmark className="text-xl text-rose-500" />
                        <h3 className="text-base sm:text-lg font-medium">
                          Package Excludes
                        </h3>
                      </div>

                      {pkg.exclusions ? (
                        <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                          {pkg.exclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <FaXmark className="text-rose-500 text-xs shrink-0 mt-1" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-slate-600">
                          Lunch & Dinner • Personal Expenses • Hotel Security
                          Deposit • Tips • Other items not mentioned in
                          inclusions
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: OVERVIEW & HIGHLIGHTS */}
              {activeTab === "overview" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs space-y-8">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl sm:text-2xl font-medium text-[#021b38]">
                      Overview & Highlights
                    </h2>
                    <p className="text-xs text-slate-500 pt-0.5 font-normal">
                      Discover what makes this tour package a memorable journey
                    </p>
                  </div>

                  {/* Package Overview */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-medium text-[#021b38]">
                      Package Overview
                    </h3>
                    <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {pkg.overview}
                    </div>
                  </div>

                  {/* Key Highlights Grid */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-medium text-[#021b38]">
                      Key Highlights & Experiences
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pkg.highlights.map((h, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-emerald-300 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#19a64b] flex items-center justify-center shrink-0 font-bold text-xs">
                            ✓
                          </div>
                          <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-tight">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT 4 COLS: Clean Light Mode Sticky Inquiry Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-slate-200/40 space-y-5">
                {/* Price Display */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                      PACKAGE PRICE
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-semibold text-[#19a64b] tracking-tight">
                        ₹ {pkg.price}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaPercent className="text-[9px]" /> Instant Quote
                  </span>
                </div>

                <hr className="border-slate-100" />

                <h3 className="text-base font-semibold text-[#021b38]">
                  Book / Send Instant Inquiry
                </h3>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#19a64b] text-white flex items-center justify-center mx-auto text-xl shadow-sm">
                      <FaCheck />
                    </div>
                    <h4 className="text-sm font-bold text-emerald-900">
                      Inquiry Submitted!
                    </h4>
                    <p className="text-xs text-emerald-700 font-medium">
                      Our travel advisor will contact you within 15 minutes with
                      customized quotes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs sm:text-sm outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div
                        className={
                          phoneError
                            ? "[&_.PhoneInput]:border-red-400 [&_.PhoneInput]:focus-within:border-red-500"
                            : ""
                        }
                      >
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={formData.phone}
                          onChange={(val) => {
                            setFormData({ ...formData, phone: val || "" });
                            if (phoneError && val && isValidPhoneNumber(val)) {
                              setPhoneError("");
                            }
                          }}
                          placeholder="Enter phone number"
                        />
                      </div>
                      {phoneError && (
                        <p className="text-red-500 text-[11px] mt-1 font-medium">
                          {phoneError}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Travel Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            onClick={(e) => {
                              try {
                                e.target.showPicker?.();
                              } catch (err) {}
                            }}
                            className="w-full pl-9 pr-2.5 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all cursor-pointer text-slate-800"
                          />
                          <FaCalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Travelers
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({ ...formData, guests: e.target.value })
                          }
                          className="w-full px-3 py-2.5 bg-slate-50/60 focus:bg-white rounded-xl border border-slate-200/80 text-xs outline-none focus:border-[#19a64b] focus:ring-2 focus:ring-[#19a64b]/10 transition-all cursor-pointer"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons (Couple)</option>
                          <option value="3-5">3 - 5 Persons</option>
                          <option value="6+">6+ Persons</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#19a64b]/20 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Inquire Now</span>
                      <FaArrowRight className="text-xs" />
                    </button>
                  </form>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={`https://wa.me/917025144666?text=${encodeURIComponent(`Hi Middle East Travels, I am interested in *${pkg.fullTitle || pkg.title}*.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <FaWhatsapp className="text-base text-[#19a64b]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Light Trust Badges Box */}
              <div className="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100 text-xs space-y-2 text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#19a64b] text-xs shrink-0" />
                  <span>Best Price & Customization Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#19a64b] text-xs shrink-0" />
                  <span>Verified Accommodations & Transfers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#19a64b] text-xs shrink-0" />
                  <span>Dedicated 24/7 On-Trip Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RELATED TOUR PACKAGES ================= */}
        {relatedPackages.length > 0 && (
          <section className="w-11/12 mx-auto pt-16">
            <div className="flex flex-col md:flex-row md:items-center gap-y-5 justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#021b38]">
                  You May Also Like
                </h2>
                <p className="text-xs text-slate-500 pt-0.5">
                  Popular destinations and holiday packages matching your
                  interest
                </p>
              </div>
              <Link
                href="/tour-packages"
                className="text-xs font-bold text-[#19a64b] hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedPackages.map((item) => (
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
                            {item.title}{" "}
                            <span className="text-[#19a64b]">
                              Tour Packages
                            </span>
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

                          <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#19a64b] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                            <FaArrowRight className="text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= LIGHTBOX MODAL ================= */}
        {isLightboxOpen && galleryImages.length > 0 && (
          <div
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 text-white transition-all duration-300 select-none"
            onClick={closeLightbox}
          >
            {/* Header Controls */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto pt-1 pb-3 sm:pb-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/15 flex items-center gap-2 truncate">
                  <FaImages className="text-[#19a64b] shrink-0" />
                  <span className="truncate max-w-[200px] sm:max-w-[340px]">
                    {pkg.title}
                  </span>
                  <span className="text-slate-300 font-normal shrink-0">
                    ({lightboxIndex + 1} of {galleryImages.length})
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[11px] text-slate-400 font-normal mr-2">
                  Press{" "}
                  <kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/20 text-white font-mono text-[10px]">
                    Esc
                  </kbd>{" "}
                  to close
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors text-lg border border-white/20 cursor-pointer shrink-0"
                  aria-label="Close Lightbox"
                >
                  <FaXmark />
                </button>
              </div>
            </div>

            {/* Main Stage with Navigation Arrows */}
            <div
              className="relative flex-1 flex items-center justify-center w-full max-w-6xl mx-auto my-auto min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={prevLightboxImage}
                  className="absolute left-1 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#19a64b] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-xl hover:scale-105"
                  aria-label="Previous Image"
                >
                  <FaChevronLeft className="text-sm sm:text-base" />
                </button>
              )}

              {/* Centered Active Image */}
              <div className="relative w-full h-[52vh] sm:h-[66vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/40">
                <Image
                  src={galleryImages[lightboxIndex]}
                  alt={`${pkg.title} photo ${lightboxIndex + 1}`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={95}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Right Arrow */}
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={nextLightboxImage}
                  className="absolute right-1 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#19a64b] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-xl hover:scale-105"
                  aria-label="Next Image"
                >
                  <FaChevronRight className="text-sm sm:text-base" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Strip showing EVERY image */}
            {galleryImages.length > 1 && (
              <div
                className="w-full max-w-4xl mx-auto pt-3 pb-1 flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar z-10 px-2"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative w-14 h-11 sm:w-20 sm:h-14 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 shrink-0 ${
                      lightboxIndex === idx
                        ? "border-[#19a64b] scale-105 ring-2 ring-[#19a64b]/60 shadow-lg opacity-100"
                        : "border-transparent opacity-45 hover:opacity-90 hover:scale-100"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
