"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaHeadset,
  FaShieldHalved,
  FaBoltLightning,
  FaUsers,
  FaGlobe,
  FaGraduationCap,
  FaFileLines,
  FaBriefcase,
  FaPlus,
  FaFileCircleCheck,
  FaCircleCheck,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import {
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { IoDocumentsOutline } from "react-icons/io5";



import Counts from "@/components/Counts";
import Testimonials from "@/components/Testimonials";

export default function AttestationServicePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative overflow-hidden bg-[#edf8f3] min-h-[350px] lg:min-h-[500px] flex items-center border-b border-slate-100">
        {/* Full Banner Right-Side Overlay Background Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src="/attestation_banner_bg.jpg"
            alt="Attestation Service Background - Passport and Official Stamp"
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

        <div className="w-11/12 max-w-7xl mx-auto py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Banner Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcf2e5] border border-emerald-300/60 text-[#0f8a3c] font-medium text-xs tracking-wider uppercase shadow-xs">
                <FaShieldHalved className="text-xs" />
                <span>TRUSTED & AUTHORIZED</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#021b38]">
                Attestation Service <br />
                <span className="text-primary">in Calicut</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-normal">
                Get your important documents attested quickly and hassle-free with our expert support.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-emerald-700 text-white font-medium text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <a
                  href="tel:+918714806661"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-primary text-primary bg-white/90 hover:bg-white font-semibold text-sm shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <FaHeadset className="text-base" />
                  <span>Talk to an Expert</span>
                </a>
              </div>
            </div>

            {/* Right Column Spacer */}
            <div className="lg:col-span-5 relative hidden lg:block h-64" />

          </div>
        </div>
      </section>

      {/* ================= FEATURES HIGHLIGHTS SECTION ================= */}
      <section className="w-11/12 mx-auto mx-auto py-8 sm:py-12">
        <div className="bg-[#f3faf6] border border-emerald-100/70 rounded-2xl sm:rounded-3xl p-2 md:p-4 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-emerald-200/60">
            
            {/* Feature 1: Secure Process */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-13 h-13 rounded-full border-2 border-primary text-primary flex items-center justify-center text-xl bg-white shadow-xs">
                <FaShieldHalved />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-[#021b38] text-base sm:text-lg">
                  Secure Process
                </h3>
                <p className="text-slate-500 text-xs  font-normal md:max-w-[200px] mx-auto">
                  Your documents are safe with us
                </p>
              </div>
            </div>

            {/* Feature 2: Quick & Hassle-Free */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-13 h-13 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg bg-white shadow-xs">
                <FaBoltLightning />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-[#021b38] text-base sm:text-lg">
                  Quick & Hassle-Free
                </h3>
                <p className="text-slate-500 text-xs  font-normal md:max-w-[200px] mx-auto">
                  Save time, travel stress-free
                </p>
              </div>
            </div>

            {/* Feature 3: Expert Support */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-[#021b38] space-y-3">
              <div className="w-13 h-13 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg bg-white shadow-xs">
                <FaUsers />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-[#021b38] text-base sm:text-lg">
                  Expert Support
                </h3>
                <p className="text-slate-500 text-xs  font-normal md:max-w-[200px] mx-auto">
                  Guidance at every step
                </p>
              </div>
            </div>

            {/* Feature 4: Global Reach */}
            <div className="flex flex-col items-center text-center p-4 lg:px-6 space-y-3">
              <div className="w-13 h-13 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg bg-white shadow-xs">
                <FaGlobe />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-[#021b38] text-base sm:text-lg">
                  Global Reach
                </h3>
                <p className="text-slate-500 text-xs  font-normal md:max-w-[200px] mx-auto">
                  For all major countries
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ATTESTATION SERVICES WE OFFER SECTION ================= */}
      <section className="w-11/12 max-w-7xl mx-auto py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Title, Description & CTA */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs uppercase tracking-wider text-primary">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#021b38] leading-tight">
              Attestation Services <br />
              <span className="text-primary">We Offer</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md font-normal">
              From educational to commercial documents, we handle all types of attestation with professionalism and care.
            </p>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary hover:bg-emerald-700 text-white font-medium text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <span>Get a Quote</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 1: Educational Documents */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Image Header with Overlapping Icon */}
                <div className="relative w-full aspect-[3/2] bg-slate-100">
                  <Image
                    src="/attestation_edu_card.jpg"
                    alt="Educational Documents Attestation"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Overlap Icon Circle */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-lg shadow-md border-2 border-white">
                    <FaGraduationCap />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 pt-8 space-y-2">
                  <h3 className="text-base font-semibold text-[#021b38]">
                    Educational Documents
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    For study, higher education and academic purposes.
                  </p>
                </div>
              </div>

              {/* Card Bottom Arrow Action */}
              <div className="px-6 pb-6">
                <Link
                  href="/contact-us"
                  className="w-8 h-8 rounded-full border border-slate-300 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all"
                  aria-label="Enquire about Educational Attestation"
                >
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* Card 2: Non-Educational Documents */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Image Header with Overlapping Icon */}
                <div className="relative w-full aspect-[3/2] bg-slate-100">
                  <Image
                    src="/attestation_non_edu_card.jpg"
                    alt="Non-Educational Documents Attestation"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Overlap Icon Circle */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-base shadow-md border-2 border-white">
                    <FaFileLines />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 pt-8 space-y-2">
                  <h3 className="text-base font-semibold text-[#021b38]">
                    Non-Educational Documents
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    For personal and family use.
                  </p>
                </div>
              </div>

              {/* Card Bottom Arrow Action */}
              <div className="px-6 pb-6">
                <Link
                  href="/contact-us"
                  className="w-8 h-8 rounded-full border border-slate-300 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all"
                  aria-label="Enquire about Non-Educational Attestation"
                >
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* Card 3: Commercial Documents */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Image Header with Overlapping Icon */}
                <div className="relative w-full aspect-[3/2] bg-slate-100">
                  <Image
                    src="/attestation_commercial_card.jpg"
                    alt="Commercial Documents Attestation"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Overlap Icon Circle */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-base shadow-md border-2 border-white">
                    <FaBriefcase />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 pt-8 space-y-2">
                  <h3 className="text-base font-semibold text-[#021b38]">
                    Commercial Documents
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    For business and trade purposes.
                  </p>
                </div>
              </div>

              {/* Card Bottom Arrow Action */}
              <div className="px-6 pb-6">
                <Link
                  href="/contact-us"
                  className="w-8 h-8 rounded-full border border-slate-300 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all"
                  aria-label="Enquire about Commercial Attestation"
                >
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COUNTRIES WE ASSIST WITH SECTION ================= */}
      <section className="w-11/12 mx-auto py-7 lg:py-10">
        <div className="bg-[#f3faf6] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-primary">
                COUNTRIES WE ASSIST WITH
              </span>
              <h2 className="text-2xl font-medium text-[#021b38]">
                Documents Attestation for Multiple Countries
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                We handle attestation for a wide range of countries, including UAE, GCC, Europe and more.
              </p>
            </div>

           
          </div>

          {/* Countries Row */}
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-6 items-center justify-items-center pt-2">
            {/* 1. UAE */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/ae.png"
                  alt="UAE Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">UAE</span>
            </Link>

            {/* 2. Saudi Arabia */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/sa.png"
                  alt="Saudi Arabia Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">Saudi Arabia</span>
            </Link>

            {/* 3. Qatar */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/qa.png"
                  alt="Qatar Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">Qatar</span>
            </Link>

            {/* 4. Kuwait */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/kw.png"
                  alt="Kuwait Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">Kuwait</span>
            </Link>

            {/* 5. Oman */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/om.png"
                  alt="Oman Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">Oman</span>
            </Link>

            {/* 6. Bahrain */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/bh.png"
                  alt="Bahrain Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">Bahrain</span>
            </Link>

            {/* 7. USA */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/us.png"
                  alt="USA Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">USA</span>
            </Link>

            {/* 8. UK */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/gb.png"
                  alt="UK Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">UK</span>
            </Link>

            {/* 9. EU */}
            <Link href="/contact-us" className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="https://flagcdn.com/w80/eu.png"
                  alt="EU Flag"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-[#021b38] group-hover:text-primary transition-colors">EU</span>
            </Link>

            

          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS - SIMPLE 3-STEP PROCESS SECTION ================= */}
      <section className="w-11/12 mx-auto pb-12">
        <div className=" border border-emerald-100/70 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-4 space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#021b38] leading-tight">
                Simple <span className="text-primary font-medium">3-Step Process</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                Get your documents attested without any hassle.
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
                      Submit Documents
                    </h3>
                    <p className="text-slate-500 text-xs font-normal mt-0.5">
                      Upload or share your documents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow 1 */}
              <div className="hidden sm:block text-slate-400 text-base shrink-0 px-1">
                <FaArrowRight />
              </div>

              {/* Step 02 */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-primary text-primary text-[11px] font-semibold flex items-center justify-center shrink-0">
                      02
                    </span>
                    <IoIosSearch className="text-primary text-3xl shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#021b38]">
                      Verification
                    </h3>
                    <p className="text-slate-500 text-xs font-normal mt-0.5">
                      We verify with the authorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow 2 */}
              <div className="hidden sm:block text-slate-400 text-base shrink-0 px-1">
                <FaArrowRight />
              </div>

              {/* Step 03 */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-primary text-primary text-[11px] font-semibold flex items-center justify-center shrink-0">
                      03
                    </span>
                    <HiOutlineCheckBadge className="text-primary text-3xl shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#021b38]">
                      Attestation Completed
                    </h3>
                    <p className="text-slate-500 text-xs font-normal mt-0.5">
                      Get your attested documents safely.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US - YOUR TRUSTED TRAVEL PARTNER SECTION ================= */}
      <section className="w-11/12 mx-auto pb-12 lg:pb-16">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-3xl overflow-hidden border border-emerald-100/80 bg-slate-100">
            
            {/* Left Column: Landmark Image Card with Floating Cursive Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-video rounded-2xl md:rounded-r-none md:rounded-l-3xl overflow-hidden shadow-sm">
                <Image
                  src="/calicut_landmark_card.jpg"
                  alt="Serving Calicut & Beyond - Middle East Travels"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                
            
              </div>
            </div>

            {/* Right Column: Title, Subtitle & 4 Features Row */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  WHY CHOOSE US
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium text-[#021b38] leading-tight">
                  Your Trusted <span className="text-primary font-medium">Travel Partner</span>
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
                  With years of experience in travel and attestation services, we ensure a smooth and reliable process for you.
                </p>
              </div>

              {/* 4 Features Row with Vertical Dividers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-emerald-200/60 pt-2">
                
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                  <HiOutlineShieldCheck className="text-primary text-3xl sm:text-4xl shrink-0" />
                  <div className="space-y-0.5">
                    <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                      100% Secure
                    </h3>
                    <p className="text-slate-500 text-[11px] font-normal">
                      & Confidential
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                  <HiOutlineUsers className="text-primary text-3xl sm:text-4xl shrink-0" />
                  <div className="space-y-0.5">
                    <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                      Experienced
                    </h3>
                    <p className="text-slate-500 text-[11px] font-normal">
                      Team
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center p-2 sm:px-3 space-y-2">
                  <HiOutlineStar className="text-primary text-3xl sm:text-4xl shrink-0" />
                  <div className="space-y-0.5">
                    <h3 className="font-semibold text-[#021b38] text-xs sm:text-sm">
                      Hassle-Free
                    </h3>
                    <p className="text-slate-500 text-[11px] font-normal">
                      Process
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
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
        </div>
      </section>

    </div>
  );
}