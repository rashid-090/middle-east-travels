"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Playball } from "next/font/google";
import {
  FaShieldHalved,
  FaArrowRight,
  FaHeadset,
  FaPlane,
  FaGlobe,
  FaHeartPulse,
  FaClock,
  FaFileShield,
  FaCircleCheck,
  FaUserCheck,
  FaHospital,
  FaLuggageCart,
  FaPlaneCircleCheck,
  FaBoltLightning,
  FaArrowRightArrowLeft,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

import {
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Testimonials from "@/components/Testimonials";
import { IoIosSearch } from "react-icons/io";
import { IoDocumentsOutline } from "react-icons/io5";

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const insurancePlans = [
  {
    id: "international-travel",
    title: "International Travel Insurance",
    subtitle: "For worldwide vacations, overseas business & leisure trips",
    icon: FaGlobe,
    highlights: [
      "Emergency Medical Expenses & Hospitalization",
      "Trip Cancellation & Delay Coverage",
      "Loss of Checked-in Baggage & Passport",
    ],
  },
  {
    id: "student-travel",
    title: "Student Travel Insurance",
    subtitle:
      "Customized for students studying abroad in USA, UK, Europe & Canada",
    icon: FaUserCheck,
    highlights: [
      "University Medical Requirement Compliance",
      "Sponsor Protection & Tuition Fee Cover",
      "Compassionate Visit & Study Interruption",
    ],
  },
  {
    id: "senior-citizen",
    title: "Senior Citizen Insurance",
    subtitle:
      "Specialized healthcare protection for parents & seniors travelling abroad",
    icon: FaHeartPulse,
    highlights: [
      "Pre-existing Condition Emergency Cover",
      "Cashless Medical Hospitalization Worldwide",
      "24/7 Dedicated Emergency Helpline",
    ],
  },
];

const travelInsuranceTypes = [
  {
    id: "schengen",
    title: "Schengen Travel Insurance",
    description: "Mandatory for Schengen visa applications.",
    image: "/schengen_insurance_card.jpg",
    icon: FaPlane,
  },
  {
    id: "uae",
    title: "UAE Travel Insurance",
    description: "Stay protected during your UAE trip.",
    image: "/dubai_card.jpg",
    icon: FaFileShield,
  },
  {
    id: "international",
    title: "International Travel Insurance",
    description: "For all global destinations.",
    image: "/international_insurance_card.jpg",
    icon: FaGlobe,
  },
  {
    id: "family",
    title: "Family Travel Insurance",
    description: "Complete protection for your loved ones.",
    image: "/family_insurance_card.jpg",
    icon: HiOutlineUsers,
  },
];

export default function TravelInsurancePage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative overflow-hidden bg-[#edf8f3] min-h-[350px] lg:min-h-[500px] flex items-center border-b border-slate-100">
        {/* Full Banner Right-Side Overlay Background Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src="/travel_insurance_banner_bg.jpg"
            alt="Travel Insurance Background - Luggage, Passport and Plane"
            fill
            priority
            loading="eager"
            sizes="100vw"
            quality={95}
            className="object-cover object-left md:object-right opacity-90 lg:opacity-100"
          />
          {/* Smooth Gradient Blend from Left Background (#edf8f3) to Right Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf8f3] via-[#edf8f3]/90 md:via-[#edf8f3]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#edf8f3]/80 via-transparent to-[#edf8f3]/40 lg:hidden" />
        </div>

        <div className="w-11/12  mx-auto py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Banner Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcf2e5] border border-emerald-300/60 text-[#0f8a3c] font-medium text-xs tracking-wider uppercase shadow-xs">
                <FaShieldHalved className="text-xs" />
                <span>TRAVEL INSURANCE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#021b38]">
                Travel Insurance <br />
                <span className="text-primary">in Calicut</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-normal">
                Stay protected on every journey. Get reliable travel insurance
                for a safe and worry-free trip.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-emerald-700 text-white font-medium text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <a
                  href="https://wa.me/918714806661?text=Hi!%20I%20want%20to%20talk%20to%20an%20expert%20about%20travel%20insurance"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-primary text-primary bg-white/90 hover:bg-white font-semibold text-sm shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <FaHeadset className="text-base" />
                  <span>Talk to an Expert</span>
                </a>
              </div>

              {/* Feature Highlights Row Below CTA Buttons (Matches reference image) */}
              <div className="grid grid-cols-2 md:flex flex-wrap items-center gap-3 sm:gap-5 pt-5">
                {/* Item 1 */}
                <div className="flex items-center gap-2 text-slate-800">
                  <HiOutlineShieldCheck className="text-primary text-2xl sm:text-3xl shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-[#021b38] leading-tight">
                    Medical Coverage <br /> Worldwide
                  </span>
                </div>

                {/* Divider 1 */}
                <div className="hidden sm:block h-6 w-[1px] bg-slate-300/80" />

                {/* Item 2 */}
                <div className="flex items-center gap-2 text-slate-800">
                  <FaGlobe className="text-primary text-xl sm:text-2xl shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-[#021b38] leading-tight">
                    24/7 <br /> Support
                  </span>
                </div>

                {/* Divider 2 */}
                <div className="hidden sm:block h-6 w-[1px] bg-slate-300/80" />

                {/* Item 3 */}
                <div className="flex items-center gap-2 text-slate-800">
                  <FaPlane className="text-primary text-xl sm:text-2xl shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-[#021b38] leading-tight">
                    Instant <br /> Policy Assistance
                  </span>
                </div>

                {/* Divider 3 */}
                <div className="hidden sm:block h-6 w-[1px] bg-slate-300/80" />

                {/* Item 4 */}
                <div className="flex items-center gap-2 text-slate-800">
                  <FaHeartPulse className="text-primary text-xl sm:text-2xl shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-[#021b38] leading-tight">
                    Peace of Mind <br /> While You Travel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR TRAVEL INSURANCE SECTION ================= */}
      <section className="w-11/12 mx-auto py-10 lg:py-14">
        <div className="bg-[#edf8f3] rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-100/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-4 space-y-4 lg:pr-2">
              <span className="text-xs uppercase tracking-wider text-[#0f8a3c] font-medium">
                WHY CHOOSE OUR
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#021b38] tracking-tight leading-[1.15] mt-3">
                Travel <span className="text-[#0f8a3c]">Insurance?</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
                Travel with confidence. Our travel insurance provides
                comprehensive coverage for medical emergencies, trip
                cancellations, lost baggage and more.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0f8a3c] hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Features with Vertical Dividers */}
            <div className="lg:col-span-8 lg:border-l lg:border-slate-300/70 lg:pl-8">
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-0 xl:divide-x xl:divide-slate-300/70">
                {/* Item 1: Medical Coverage */}
                <div className="flex  flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-7 h-7 text-[#0f8a3c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      Medical Coverage
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Covers unexpected medical expenses abroad.
                    </p>
                  </div>
                </div>

                {/* Item 2: Trip Cancellation */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-7 h-7 text-[#0f8a3c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M9 3.75h6a1.5 1.5 0 011.5 1.5v2.25H7.5V5.25A1.5 1.5 0 019 3.75z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      Trip Cancellation
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Get support for unforeseen travel changes.
                    </p>
                  </div>
                </div>

                {/* Item 3: Lost Baggage */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-7 h-7 text-[#0f8a3c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <rect
                        x="5"
                        y="7"
                        width="14"
                        height="13"
                        rx="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7V4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V7M9 12h6"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      Lost Baggage
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Protection against lost or delayed luggage.
                    </p>
                  </div>
                </div>

                {/* Item 4: 24/7 Assistance */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-7 h-7 text-[#0f8a3c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      24/7 Assistance
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Help whenever you need it, anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TYPES OF TRAVEL INSURANCE SECTION ================= */}
      <section className="w-11/12 mx-auto pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Section Title & Compare Link */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#0f8a3c] font-medium">
              TYPES OF
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-[#021b38] mt-3 tracking-tight leading-[1.15]">
              Travel <span className="text-[#0f8a3c]">Insurance</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">
              Choose the right coverage for your trip.
            </p>
          </div>

          {/* Right Side: 4 Travel Insurance Type Cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 sm:gap-5">
              {travelInsuranceTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Image container with floating green badge icon */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={type.image}
                          alt={type.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Green Floating Badge Icon */}
                        <div className="absolute bottom-2 left-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f8a3c] text-white flex items-center justify-center shadow-md">
                          <Icon className="text-sm sm:text-base" />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 pt-6 space-y-2">
                        <h3 className="font-medium text-sm sm:text-base text-[#021b38] leading-tight group-hover:text-[#0f8a3c] transition-colors">
                          {type.title}
                        </h3>
                        <p className="text-slate-500 text-xs font-normal leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Outlined Circular Arrow */}
                    <div className="p-4 pt-0">
                      <div className="w-8 h-8 rounded-full border border-emerald-400 text-[#0f8a3c] flex items-center justify-center group-hover:bg-[#0f8a3c] group-hover:text-white transition-all cursor-pointer">
                        <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS - SIMPLE 3-STEP PROCESS SECTION ================= */}
      <section className="w-11/12 mx-auto pb-12">
        <div className="bg-[#edf8f3] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-4 space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#021b38] leading-tight">
                Simple{" "}
                <span className="text-primary font-medium">3-Step Process</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                Get insured in minutes and travel worry-free.
              </p>
            </div>

            {/* Right Column: 3 Steps Row */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">
              {/* Step 01 */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-primary text-primary text-[11px] font-semibold flex items-center justify-center shrink-0">
                      01
                    </span>
                    <IoDocumentsOutline className="text-primary text-3xl shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#021b38]">
                      Choose Your Plan
                    </h3>
                    <p className="text-slate-500 text-xs font-normal mt-0.5">
                      Select the best coverage for your trip.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow 1 */}
              <div className="hidden sm:block text-slate-400 text-base shrink-0 px-1">
                <FaArrowRightFromBracket />
              </div>

              {/* Step 02 */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-primary text-primary text-[11px] font-semibold flex items-center justify-center shrink-0">
                      02
                    </span>
                    <FaRegAddressCard className="text-primary text-3xl shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#021b38]">
                      Fill in Details
                    </h3>
                    <p className="text-slate-500 text-xs font-normal mt-0.5">
                      Share your travel details and make the payment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow 2 */}
              <div className="hidden sm:block text-slate-400 text-base shrink-0 px-1">
                <FaArrowRightArrowLeft />
              </div>

              {/* Step 03 */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-primary text-primary text-[11px] font-semibold flex items-center justify-center shrink-0">
                      03
                    </span>
                    <AiOutlineSafetyCertificate className="text-primary text-3xl shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#021b38]">
                      Get Your Policy
                    </h3>
                    <p className="text-slate-500 text-xs font-normal mt-0.5">
                      Receive your e-policy instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US FOR INSURANCE SECTION ================= */}
      <section className="w-11/12 mx-auto pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-3xl overflow-hidden border border-emerald-100/80 bg-slate-100">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-video rounded-2xl md:rounded-r-none md:rounded-l-3xl overflow-hidden shadow-sm">
              <Image
                src="/calicut_landmark_card.jpg"
                alt="Middle East Travels Calicut Office"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#021b38] leading-tight">
                Your Trusted{" "}
                <span className="text-primary font-medium">
                  Insurance Partner
                </span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
                We simplify travel insurance policies with zero stress, quick
                approvals, and instant digital certificate delivery.
              </p>
            </div>

            {/* 4 Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-emerald-200/60 pt-2">
              <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                <HiOutlineShieldCheck className="text-primary text-3xl sm:text-4xl shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    100% Reliable
                  </h3>
                  <p className="text-slate-500 text-[11px] font-normal">
                    IRDAI Approved
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                <HiOutlineUsers className="text-primary text-3xl sm:text-4xl shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Instant Policy
                  </h3>
                  <p className="text-slate-500 text-[11px] font-normal">
                    5-Minute Issuance
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                <HiOutlineStar className="text-primary text-3xl sm:text-4xl shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Cashless Claims
                  </h3>
                  <p className="text-slate-500 text-[11px] font-normal">
                    Worldwide Network
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                <TfiHeadphoneAlt className="text-primary text-3xl sm:text-4xl shrink-0" />
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Local Support
                  </h3>
                  <p className="text-slate-500 text-[11px] font-normal">
                    in Calicut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
