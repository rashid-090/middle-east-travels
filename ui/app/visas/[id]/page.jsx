"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaArrowRight,
  FaPassport,
  FaShieldHalved,
  FaClock,
  FaCheck,
  FaPhone,
  FaPaperPlane,
  FaFileCircleCheck,
  FaHeadset,
  FaUserGroup,
  FaFileLines,
  FaWhatsapp,
  FaPlaneDeparture,
  FaBriefcase,
  FaUsers,
  FaCalendarDays,
  FaUserCheck,
  FaCamera,
  FaLandmark,
  FaRoute,
  FaEnvelopeOpenText,
} from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { PiBag } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { visaPackagesData } from "@/data/allData";
import { client, urlFor } from "@/lib/sanity";

export default function VisaDetailPage() {
  const params = useParams();
  const rawId = params?.id;

  const [sanityVisa, setSanityVisa] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVisaDetail() {
      if (!rawId) return;
      setIsLoading(true);
      try {
        const query = `*[_type == "visaService" && (slug.current == $id || _id == $id || slug.current match $id)][0]{
          _id,
          title,
          slug,
          duration,
          validity,
          price,
          badge,
          image,
          highlights,
          overview
        }`;
        const data = await client.fetch(query, { id: String(rawId) });
        if (data) {
          const formatted = {
            id: data._id,
            title: data.title,
            slug: data.slug?.current || data.slug || data._id,
            duration: data.duration || "",
            validity: data.validity || "",
            price: data.price || "",
            badge: data.badge || "",
            image: data.image ? urlFor(data.image)?.width(1000).auto("format").quality(85).url() : null,
            highlights: data.highlights || [],
            overview: data.overview || "",
          };
          setSanityVisa(formatted);
        }
      } catch (error) {
        console.error("Error fetching visa detail from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVisaDetail();
  }, [rawId]);

  // Find fallback visa item by id or slug
  const fallbackItem =
    visaPackagesData.find(
      (v) =>
        String(v.id) === String(rawId) ||
        v.slug === String(rawId) ||
        v.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .includes(String(rawId).toLowerCase())
    ) || visaPackagesData[0];

  const visaItem = sanityVisa || fallbackItem;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi! I want to enquire about *${visaItem.title}* (%23${visaItem.id}).%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email || "N/A"}%0ATravel Date: ${formData.travelDate || "N/A"}%0ANotes: ${formData.notes || "None"}`;
    window.open(`https://wa.me/7025144666?text=${text}`, "_blank");
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Derive country title & tag
  const countryName = visaItem?.title ? visaItem.title.split(" ")[0] : "UK";
  const tagTitle = `${countryName} VISA`.toUpperCase();

  // Price formatting
  const displayPrice = visaItem?.price
    ? String(visaItem.price).replace(/INR|₹|\/-/g, "").trim()
    : "21,500";

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-16">
      {/* ================= HERO HEADER ================= */}
      <section className="relative overflow-hidden bg-[#edf8f3] border-b border-slate-200/80 min-h-[420px] lg:min-h-[500px] flex items-center py-10 lg:py-14">
        {/* Full Banner Right-Side Overlay Background Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src={visaItem.image || "/visa_banner_bg.jpg"}
            alt={`${visaItem.title} Background Landmark`}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            quality={90}
            className="object-cover object-right opacity-80 lg:opacity-95"
          />
          {/* Smooth Gradient Blend from Left Background (#edf8f3) to Right Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf8f3] via-[#edf8f3]/95 md:via-[#edf8f3]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#edf8f3] via-transparent to-[#edf8f3]/50 lg:hidden" />
        </div>

        <div className="w-11/12 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Tag, Title, Subtitle & 4 Feature Badges */}
            <div className="lg:col-span-7 space-y-5">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#021b38] tracking-tight leading-[1.12]">
                <div>
                  {visaItem.title.includes("Visa")
                    ? visaItem.title
                    : `${visaItem.title} Visa`}
                </div>
                <div className="text-[#008c45] mt-1">for Indians</div>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
                {visaItem.overview ||
                  `Get expert assistance for ${countryName} tourist, business and family visit visas. Complete guidance, hassle-free documentation and support till visa approval.`}
              </p>

              {/* 4 Feature Pills Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#dcf2e5] border border-emerald-300/40 flex items-center justify-center text-[#008c45] shrink-0 shadow-2xs">
                    <FaUserGroup className="text-base" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Expert
                    <br />
                    Guidance
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#dcf2e5] border border-emerald-300/40 flex items-center justify-center text-[#008c45] shrink-0 shadow-2xs">
                    <FaShieldHalved className="text-base" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Hassle Free
                    <br />
                    Process
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#dcf2e5] border border-emerald-300/40 flex items-center justify-center text-[#008c45] shrink-0 shadow-2xs">
                    <FaFileLines className="text-base" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    High
                    <br />
                    Success Rate
                  </span>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#dcf2e5] border border-emerald-300/40 flex items-center justify-center text-[#008c45] shrink-0 shadow-2xs">
                    <FaHeadset className="text-base" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Personalized
                    <br />
                    Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Price & CTA Card (Exact match to reference image) */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60 max-w-sm w-full space-y-5">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Starting From
                  </span>
                  <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mt-1">
                    ₹ {displayPrice}*
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    {visaItem.title}
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <a
                                  href={`https://wa.me/7025144666?text=Hi!%20I%20want%20to%20talk%20to%20an%20expert%20about%20${encodeURIComponent(visaItem.title)}.`}
    target="_blank"
                    className="w-full bg-[#008c45] hover:bg-[#00783b] active:scale-[0.98] text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all duration-200 text-sm cursor-pointer"
                  >
                    <span>Check Eligibility</span>
                    <FaArrowRight className="text-xs" />
                  </a>

                  <a
                    href={`https://wa.me/7025144666?text=Hi!%20I%20want%20to%20talk%20to%20an%20expert%20about%20${encodeURIComponent(visaItem.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 text-slate-800 font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all duration-200 text-sm cursor-pointer shadow-2xs"
                  >
                    <FaWhatsapp className="text-[#25D366] text-lg" />
                    <span>Talk to Our Experts</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISA TYPES ================= */}
      <section className="w-11/12 mx-auto py-12 sm:py-16">
        {/* Section Heading */}

        <h2 className="text-3xl sm:text-4xl font-medium text-[#021b38] leading-tight">
          {countryName} <span className="text-primary">Visa Types</span>
        </h2>

        {/* Cards Grid (No Images - Contents Only) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {[
            {
              id: "tourist",
              title: `${countryName} Tourist Visa`,
              desc: "For holidays, sightseeing, family visits and short-term stays.",
              icon: GiAirplaneDeparture,
              iconBg: "bg-[#e2f5ea] text-[#008c45]",
            },
            {
              id: "business",
              title: `${countryName} Business Visa`,
              desc: "For business meetings, conferences and official visits.",
              icon: PiBag,
              iconBg: "bg-[#e0f2fe] text-[#0284c7]",
            },
            {
              id: "family",
              title: `${countryName} Family Visit Visa`,
              desc: `For visiting family and relatives in ${countryName}.`,
              icon: HiOutlineUserGroup,
              iconBg: "bg-[#dcf2e5] text-[#0f8a3c]",
            },
          ].map((type) => {
            const IconComp = type.icon;
            return (
              <div
                key={type.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div>
                  {/* Top Header: Icon & Price Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-[#e2f5ea] text-[#008c45] flex items-center justify-center text-xl shrink-0 shadow-2xs`}
                    >
                      <IconComp />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-[#021b38] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {type.desc}
                  </p>
                </div>

                {/* Apply Button */}
                <button
                  onClick={scrollToEnquiry}
                  className="w-fit bg-[#008c45] hover:bg-[#00783b] active:scale-[0.98] text-white font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs transition-all cursor-pointer mt-auto"
                >
                  <span>Apply For Visa</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            );
          })}
        </div>
      </section>
      {/* ================= HOW TO GET YOUR VISA ================= */}
      <section className="w-11/12 mx-auto py-12 sm:py-16 border-t border-slate-200/60">
        {/* Section Heading */}
        <div className="space-y-1 mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#021b38] leading-tight">
            How to Get Your{" "}
            <span className="text-primary">{countryName} Visa</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-normal">
            We make the process simple and stress-free.
          </p>
        </div>

        {/* Steps Flow Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative items-start">
          {[
            {
              step: "1. Consultation",
              desc: "Share your travel plan and check eligibility",
              icon: FaFileLines,
            },
            {
              step: "2. Document Preparation",
              desc: "We guide you with the required documents",
              icon: FaFileCircleCheck,
            },
            {
              step: "3. Appointment Booking",
              desc: "We schedule your visa appointment",
              icon: FaCalendarDays,
            },
            {
              step: "4. Attend Interview",
              desc: "Our team will assist you for a successful interview",
              icon: FaUserCheck,
            },
          ].map((item, idx, arr) => {
            const StepIcon = item.icon;
            const isLast = idx === arr.length - 1;

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connector Arrow (Visible on desktop between items) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-7 left-[65%] right-[-35%] z-0 pointer-events-none">
                    <div className="w-full border-t-2 border-dashed border-emerald-500/50 relative flex items-center justify-end">
                      <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[8px] border-l-emerald-600 absolute -right-1"></span>
                    </div>
                  </div>
                )}

                {/* Circular Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e2f5ea] text-[#008c45] flex items-center justify-center text-2xl sm:text-3xl shrink-0 shadow-2xs relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <StepIcon />
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#021b38] mt-4 mb-1">
                  {item.step}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[220px] font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* ================= ELIGIBILITY & REQUIRED DOCUMENTS ================= */}
      <section className="w-11/12 mx-auto pt-12 md:pt-16 border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Required Documents Container */}
          <div className="lg:col-span-7 bg-white h-full rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-medium text-[#021b38] leading-tight">
                Eligibility & Required{" "}
                <span className="text-primary">Documents</span>
              </h2>

              <p className="text-slate-500 text-xs sm:text-sm font-normal pt-2">
                Basic requirements for {countryName} tourist, business and
                family visit visas (may vary based on individual profile)
              </p>
            </div>

            {/* Documents List */}
            <div className="divide-y divide-slate-100 pt-1 space-y-1">
              {[
                {
                  title: "Valid Passport",
                  desc: "At least 6 months validity",
                  icon: FaPassport,
                },
                {
                  title: "Online Application Form",
                  desc: `Completed ${countryName} visa application form`,
                  icon: FaFileLines,
                },
                {
                  title: "Recent Passport Size Photo",
                  desc: `As per ${countryName} visa photo guidelines`,
                  icon: FaCamera,
                },
                {
                  title: "Bank Statements",
                  desc: "Financial proof for last 6 months",
                  icon: FaLandmark,
                },
                {
                  title: "Employment Proof",
                  desc: "Salary slip / employment letter / business documents",
                  icon: FaBriefcase,
                },
                {
                  title: "Travel Itinerary (Optional)",
                  desc: "Proposed travel plan",
                  icon: FaRoute,
                },
                {
                  title: "Invitation Letter (for Family Visit)",
                  desc: `From family member in ${countryName} (if applicable)`,
                  icon: FaEnvelopeOpenText,
                },
              ].map((doc, i) => {
                const DocIcon = doc.icon;
                return (
                  <div
                    key={i}
                    className="py-3.5  flex items-start gap-3.5 hover:bg-primary/10 p-2 rounded-xl transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#e2f5ea] text-[#008c45] flex items-center justify-center text-sm shrink-0 mt-0.5">
                      <DocIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#021b38]">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Photo & Processing Summary Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Passport Image Card */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xs border border-slate-200/70 bg-slate-100">
              <Image
                src={"/immigration_banner_bg.jpg"}
                alt={`${visaItem.title} Passport and Landmark`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-left"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Visa Processing Time Box */}
              <div className="bg-[#f4faf7] rounded-3xl p-3 border border-emerald-100/80 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e2f5ea] text-[#008c45] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-[#021b38]">
                    Visa Processing Time
                  </h3>
             
                  <div className=" font-semibold text-[#021b38] mt-0.5">
                    {visaItem.duration || "2 – 4 Weeks"}
                  </div>
                </div>
              </div>

              {/* Visa Validity Box */}
              <div className="bg-[#f4faf7] rounded-3xl p-3 border border-emerald-100/80 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e2f5ea] text-[#008c45] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                  <FaCalendarDays />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-medium text-[#021b38]">
                    Visa Validity
                  </h3>
                  <div className="font-semibold text-[#021b38]">
                    Up to {visaItem.validity || "6 Months"}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
