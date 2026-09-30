"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import VisaServices from "@/components/VisaServices";

import {
  FaArrowRight,
  FaHeadset,
  FaShieldHalved,
  FaPlaneDeparture,
  FaPassport,
  FaClock,
  FaFileLines,
  FaFileCircleCheck,
  FaGraduationCap,
  FaBriefcase,
  FaUserGroup,
  FaUmbrellaBeach,
  FaCheck,
} from "react-icons/fa6";
import {
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import Counts from "@/components/Counts";
import Testimonials from "@/components/Testimonials";

export default function VisaServicesPage() {
  const visaCategories = [
    {
      title: "Tourist Visa",
      desc: "Fast & hassle-free tourist visa assistance for single and multiple entry trips worldwide.",
      icon: FaUmbrellaBeach,
      image: "/thailand_card.jpg",
      tag: "Popular",
    },
    {
      title: "Business Visa",
      desc: "Comprehensive business visa solutions with invitation letter support and priority filing.",
      icon: FaBriefcase,
      image: "/dubai_card.jpg",
      tag: "Corporate",
    },
    {
      title: "Student Visa",
      desc: "End-to-end guidance for university admissions and international student visa processing.",
      icon: FaGraduationCap,
      image: "/attestation_edu_card.jpg",
      tag: "Education",
    },
    {
      title: "Family & Residence Visa",
      desc: "Smooth processing for spouse, child, and dependent entry visas and residence permits.",
      icon: FaUserGroup,
      image: "/family_insurance_card.jpg",
      tag: "Family",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative overflow-hidden bg-[#edf8f3] min-h-[350px] lg:min-h-[500px] flex items-center border-b border-slate-100">
        {/* Full Banner Right-Side Overlay Background Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src="/visa_banner_bg.jpg"
            alt="Global Visa Services Background - Passport, Plane and Visas"
            fill
            priority
            loading="eager"
            sizes="100vw"
            quality={95}
            className="object-cover object-right opacity-90 lg:opacity-100"
          />
          {/* Smooth Gradient Blend from Left Background (#edf8f3) to Right Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf8f3] via-[#edf8f3]/90 md:via-[#edf8f3]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#edf8f3]/80 via-transparent to-[#edf8f3]/40 lg:hidden" />
        </div>

        <div className="w-11/12 mx-auto py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Banner Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcf2e5] border border-emerald-300/60 text-[#0f8a3c] font-medium text-xs tracking-wider uppercase shadow-xs">
                <FaPlaneDeparture className="text-xs" />
                <span>YOUR TRUSTED VISA PARTNER</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#021b38]">
                Global <span className="text-primary">Visa Services</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-normal">
                Get expert assistance for tourist visas, business visas, work permits, and all your travel document needs from Calicut.
              </p>

              {/* Features List Row (Matches reference image icons bar) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 max-w-2xl">
                {/* Item 1 */}
                <div className="flex items-center gap-2.5 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaFileLines className="text-base" />
                  </div>
                  <span className="leading-tight">Expert<br/> Guidance</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2.5 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaFileCircleCheck className="text-base" />
                  </div>
                  <span className="leading-tight">Hassle Free Documentation</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2.5 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaClock className="text-base" />
                  </div>
                  <span className="leading-tight">Faster Processing</span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-2.5 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaShieldHalved className="text-base" />
                  </div>
                  <span className="leading-tight">Trusted & Reliable</span>
                </div>
              </div>
            </div>

            {/* Right Column Spacer */}
            <div className="lg:col-span-5 relative hidden lg:block h-64" />

          </div>
        </div>
      </section>

      {/* ================= FEATURES HIGHLIGHTS SECTION ================= */}
      <section className="w-11/12 mx-auto py-8 sm:py-12">
        <div className="bg-[#f3faf6] border border-emerald-100/70 rounded-2xl sm:rounded-3xl p-2 md:p-4 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-emerald-200/60">
            
            {/* Feature 1: 100% Genuine Process */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs">
                <FaShieldHalved />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  100% Genuine Process
                </h3>
                <p className="text-slate-500 text-xs font-normal md:max-w-[200px] mx-auto">
                  Transparent & reliable service
                </p>
              </div>
            </div>

            {/* Feature 2: Expert Visa Guidance */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs">
                <FaFileCircleCheck />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  Expert Visa Guidance
                </h3>
                <p className="text-slate-500 text-xs font-normal md:max-w-[200px] mx-auto">
                  Personalized support from experts
                </p>
              </div>
            </div>

            {/* Feature 3: Fast & Hassle Free */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs">
                <FaClock />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  Fast & Hassle Free
                </h3>
                <p className="text-slate-500 text-xs font-normal md:max-w-[200px] mx-auto">
                  Quick processing with minimum hassle
                </p>
              </div>
            </div>

            {/* Feature 4: High Success Rate */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs">
                <HiOutlineCheckBadge />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  High Success Rate
                </h3>
                <p className="text-slate-500 text-xs font-normal md:max-w-[200px] mx-auto">
                  Trusted by thousands of travellers
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="w-11/12 mx-auto pb-10 lg:pb-16">
        <div className="bg-white rounded-3xl border border-slate-100/90 shadow-xs overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Area: Text Content Side-by-Side with Passport/Travel Image */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Text Content Column */}
              <div className="md:col-span-6 space-y-5">
                <div className="space-y-3">
                  {/* Green Dash Sub-tag */}
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-emerald-600 rounded-full" />
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-emerald-700">
                      WHY CHOOSE US
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h2 className="text-3xl sm:text-4xl font-medium text-[#021b38] tracking-tight leading-[1.15]">
                    Your Trusted <span className="text-primary font-medium">Visa Partner</span> <br />
                    in Calicut
                  </h2>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    At Middle East Travels & Tourism, we provide complete visa assistance for all major countries. Our experienced team guides you through the entire process, ensuring a smooth and stress-free experience.
                  </p>
                </div>

                {/* Consultation Button */}
                <div className="pt-1">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-primary hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Get Free Consultation</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>

              {/* Photo Column */}
              <div className="md:col-span-6 relative h-[280px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xs">
                <Image
                  src="/visa_banner_bg.jpg"
                  alt="Your Trusted Visa Partner in Calicut - Middle East Travels"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-right"
                />
              </div>

            </div>

            {/* Right Area: 5 Feature Items List */}
            <div className="lg:col-span-4 space-y-4 lg:pl-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0">
              
              {/* Item 1: Complete Document Support */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                  <FaFileLines className="text-base" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Complete Document Support
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Guidance for all required documents
                  </p>
                </div>
              </div>

              {/* Item 2: Personalized Consultation */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                  <FaUserGroup className="text-base" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Personalized Consultation
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Based on your travel purpose
                  </p>
                </div>
              </div>

              {/* Item 3: Application & Appointment Support */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                  <FaPassport className="text-base" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Application & Appointment Support
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    We handle the process for you
                  </p>
                </div>
              </div>

              {/* Item 4: Regular Updates */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                  <FaShieldHalved className="text-base" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Regular Updates
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Stay informed at every step
                  </p>
                </div>
              </div>

              {/* Item 5: Post Visa Assistance */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                  <HiOutlineCheckBadge className="text-xl" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                    Post Visa Assistance
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Support even after visa approval
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= VISA CATEGORIES SECTION ================= */}
      <section className="w-11/12 mx-auto">
        <div className="space-y-8">
          {/* Header Tag */}
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#021b38] tracking-tight">
              Visa Categories
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Tourist Visa */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center space-y-3 group">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                <FaPlaneDeparture />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  Tourist Visa
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  For holidays and leisure travel
                </p>
              </div>
            </div>

            {/* Card 2: Business Visa */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center space-y-3 group">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                <FaBriefcase />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  Business Visa
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  For business meetings and corporate travel
                </p>
              </div>
            </div>

            {/* Card 3: Transit Visa */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center space-y-3 group">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                <FaGraduationCap />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  Transit Visa
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  For short stopovers while travelling to another country
                </p>
              </div>
            </div>

            {/* Card 4: Family Visit Visa */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center space-y-3 group">
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                <FaUserGroup />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base sm:text-lg">
                  Family Visit Visa
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  For visiting family and relatives
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

  {/* ================= VisaServices SECTION ================= */}
      <VisaServices/>
  {/* ================= VisaServices SECTION ================= */}

    {/* ================= OUR VISA PROCESS SECTION ================= */}
      <section className="w-11/12 mx-auto py-8 lg:py-12">
        <div className="bg-[#f3faf6] border border-emerald-100/70 rounded-3xl p-6 shadow-xs">
          {/* Header */}
          <div className="text-center space-y-1.5 mb-10 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#021b38] tracking-tight">
              Our Visa Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">
              Simple Steps to Get Your Visa
            </p>
          </div>

          {/* 4 Process Steps Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center space-y-3 group">
              <div className="w-16 h-16 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform duration-300">
                <FaFileLines />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base">
                  1. Share Your Details
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  Tell us your travel plans and requirements
                </p>
              </div>
              
              {/* Connector Arrow for Desktop */}
              <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-[2px] border-t-2 border-dashed border-emerald-300/80 pointer-events-none">
                <span className="absolute -right-2 -top-3.5 text-emerald-400 text-lg">▶</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center space-y-3 group">
              <div className="w-16 h-16 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform duration-300">
                <FaFileCircleCheck />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base">
                  2. Document Assistance
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  We guide you with the required documents
                </p>
              </div>

              {/* Connector Arrow for Desktop */}
              <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-[2px] border-t-2 border-dashed border-emerald-300/80 pointer-events-none">
                <span className="absolute -right-2 -top-3.5 text-emerald-400 text-lg">▶</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center space-y-3 group">
              <div className="w-16 h-16 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform duration-300">
                <FaPassport />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base">
                  3. Application & Processing
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  We handle the application and track the status
                </p>
              </div>

              {/* Connector Arrow for Desktop */}
              <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-[2px] border-t-2 border-dashed border-emerald-300/80 pointer-events-none">
                <span className="absolute -right-2 -top-3.5 text-emerald-400 text-lg">▶</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center space-y-3 group">
              <div className="w-16 h-16 rounded-full bg-emerald-100/80 text-primary flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform duration-300">
                <HiOutlineCheckBadge />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#021b38] text-base">
                  4. Get Your Visa
                </h3>
                <p className="text-slate-500 text-xs font-normal max-w-[200px] mx-auto leading-relaxed">
                  Receive your visa and get ready to travel!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <Testimonials />
    </div>
  );
}