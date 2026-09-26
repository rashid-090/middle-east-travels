"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Playball } from "next/font/google";
import {
  FaPlane,
  FaArrowRight,
  FaHeadset,
  FaGlobe,
  FaPassport,
  FaGraduationCap,
  FaBriefcase,
  FaCircleCheck,
  FaHospital,
  FaWallet,
  FaShieldHalved,
  FaFileLines,
  FaFileCircleCheck,
} from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";

import {
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineMapPin,
} from "react-icons/hi2";
import TouchMarquee from "@/components/TouchMarquee";
import Testimonials from "@/components/Testimonials";

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const immigrationServicesData = [
  {
    id: "passport",
    title: "Passport",
    description:
      "Get your passport and related services with ease and expert support.",
    icon: FaPassport,
  },
  {
    id: "visa",
    title: "Visa",
    description:
      "Apply for tourist, study, work and other visa categories with our guidance.",
    icon: FaFileLines,
  },
  {
    id: "work-permits",
    title: "Work or Residence Permits",
    description:
      "Secure your employment or residence permits with professional assistance.",
    icon: FaBriefcase,
  },
  {
    id: "health-medical",
    title: "Health and Medical Documents",
    description:
      "Complete your health-related documents, vaccination records and medical certificates.",
    icon: FaHospital,
  },
  {
    id: "financial-proof",
    title: "Financial Proof",
    description:
      "Get support for fund documentation and financial statements as required.",
    icon: FaWallet,
  },
  {
    id: "criminal-check",
    title: "Criminal Record Check",
    description:
      "Obtain police clearance certificates for your immigration process.",
    icon: FaShieldHalved,
  },
  {
    id: "education",
    title: "Educational Qualifications",
    description:
      "Provide study documents, transcripts and qualification certificates.",
    icon: FaGraduationCap,
  },
  {
    id: "customs",
    title: "Customs Declarations",
    description:
      "Get help with customs regulations and declarations for your travel.",
    icon: LuBaggageClaim,
  },
  {
    id: "emigration-forms",
    title: "Emigration Forms & Applications",
    description:
      "Complete and submit all required emigration forms and applications on time.",
    icon: FaFileCircleCheck,
  },
];

export default function ImmigrationServicePage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative overflow-hidden bg-[#edf8f3] min-h-[380px] lg:min-h-[500px] flex items-center border-b border-slate-100">
        {/* Full Banner Right-Side Overlay Background Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src="/Immigration Service bg.webp"
            alt="Immigration Service Background - Globe, Passport and Landmarks"
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
            {/* Left Column: Banner Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcf2e5] border border-emerald-300/60 text-[#0f8a3c] font-medium text-xs tracking-wider uppercase shadow-xs">
                <FaPlane className="text-xs" />
                <span>IMMIGRATION SERVICES FROM CALICUT</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#021b38]">
                Immigration Service <br />
                <span className="text-[#0f8a3c]">from Calicut</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
                Your global journey starts here. Get expert guidance for visa,
                immigration and relocation services from our experienced team in
                Calicut. We help you move, study, work and build a better future
                abroad.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 px-4 md:px-7 py-3.5 rounded-full bg-[#0f8a3c] hover:bg-emerald-700 text-white font-medium text-xs md:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <FaArrowRight className="text-xs" />
                </Link>

                <a
                  href="https://wa.me/918714806661?text=Hi!%20I%20want%20to%20talk%20to%20an%20expert%20about%20immigration%20services"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 md:px-6 py-3.5 rounded-full border-2 border-[#0f8a3c] text-[#0f8a3c] bg-white/90 hover:bg-white font-semibold text-xs md:text-sm shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <FaHeadset className="text-base" />
                  <span>Talk to an Expert</span>
                </a>
              </div>

              {/* Feature Highlights Row Below CTA Buttons (Matches reference image) */}
              <div className="pt-6 mt-4 border-t border-slate-200/60">
                <div className="grid grid-cols-1 gap-y-5 md:flex md:flex-wrap items-center gap-4 md:gap-6">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3">
                    <HiOutlineShieldCheck className="text-[#0f8a3c] text-3xl sm:text-4xl shrink-0" />
                    <span className="text-xs text-[#021b38] leading-tight">
                      <strong className="font-medium block text-sm">
                        10+ Years
                      </strong>
                      of Travel & Immigration Experience
                    </span>
                  </div>

                  {/* Divider 1 */}
                  <div className="hidden md:block h-8 w-[1px] bg-slate-300/80" />

                  {/* Item 2 */}
                  <div className="flex items-center gap-3">
                    <HiOutlineUsers className="text-[#0f8a3c] text-3xl sm:text-4xl shrink-0" />
                    <span className="text-xs text-[#021b38] leading-tight">
                      <strong className="font-medium block text-sm">
                        Personalized Guidance
                      </strong>
                      at Every Step
                    </span>
                  </div>

                  {/* Divider 2 */}
                  <div className="hidden md:block h-8 w-[1px] bg-slate-300/80" />

                  {/* Item 3 */}
                  <div className="flex items-center gap-3">
                    <HiOutlineGlobeAlt className="text-[#0f8a3c] text-3xl sm:text-4xl shrink-0" />
                    <span className="text-xs text-[#021b38] leading-tight">
                      <strong className="font-medium block text-sm">
                        Trusted by Thousands
                      </strong>
                      of Happy Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR IMMIGRATION SERVICES SECTION ================= */}
      <section className="w-11/12 mx-auto py-12 lg:py-16">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#0f8a3c] font-medium">
              OUR SERVICES
            </span>
            <h2 className="pt-3 text-2xl sm:text-3xl lg:text-4xl font-medium text-[#021b38] tracking-tight">
              Our Immigration Services
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
              Complete immigration support for individuals, families and
              professionals at every step of your journey.
            </p>
          </div>

          {/* Mobile View: TouchMarquee Auto-Scroll Carousel */}
          <div className="block md:hidden w-full py-2">
            <TouchMarquee speed={1.2}>
              {immigrationServicesData.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="w-[290px] sm:w-[320px] px-2.5 shrink-0"
                  >
                    <div className="bg-white rounded-2xl p-3 py-4 border border-slate-100 transition-all duration-300 flex flex-col justify-between group space-y-4 h-full">
                      <div className="flex flex-col items-start gap-4">
                        {/* Light Green Circular Icon Badge */}
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcf2e5] text-[#0f8a3c] flex items-center justify-center shrink-0 text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>

                        {/* Content */}
                        <div className="space-y-1 pt-0.5">
                          <h3 className="font-medium text-base sm:text-lg text-[#021b38] group-hover:text-[#0f8a3c] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Learn More Link */}
                      <div className="">
                        <Link
                          href="/contact-us"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f8a3c] hover:gap-2.5 transition-all cursor-pointer"
                        >
                          <span>Learn More</span>
                          <FaArrowRight className="text-[10px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TouchMarquee>
          </div>

          {/* Desktop & Tablet View: 3x3 Grid of 9 Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immigrationServicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group space-y-4 h-full"
                >
                  <div className="flex items-start gap-4">
                    {/* Light Green Circular Icon Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcf2e5] text-[#0f8a3c] flex items-center justify-center shrink-0 text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>

                    {/* Content */}
                    <div className="space-y-1 pt-0.5">
                      <h3 className="font-medium text-base sm:text-lg text-[#021b38] group-hover:text-[#0f8a3c] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f8a3c] hover:gap-2.5 transition-all cursor-pointer"
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              );
            })}
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
                Why Choose{" "}
                <span className="text-[#0f8a3c]">Middle East Travels?</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
                Trusted by individuals and families from Calicut and across
                Kerala for reliable and professional immigration support.
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
                {/* Item 1: 10+ Years of Experience */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] text-[#0f8a3c] flex items-center justify-center shrink-0 shadow-xs text-2xl">
                    <HiOutlineStar />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      10+ Years of Experience
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      A decade of trust in travel & immigration.
                    </p>
                  </div>
                </div>

                {/* Item 2: Personalized Case Guidance */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] text-[#0f8a3c] flex items-center justify-center shrink-0 shadow-xs text-2xl">
                    <HiOutlineUser />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      Personalized Case Guidance
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Tailored support for your unique needs.
                    </p>
                  </div>
                </div>

                {/* Item 3: Transparent Process */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] text-[#0f8a3c] flex items-center justify-center shrink-0 shadow-xs text-2xl">
                    <HiOutlineShieldCheck />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      Transparent Process
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Clear communication at every step.
                    </p>
                  </div>
                </div>

                {/* Item 4: Support from Calicut */}
                <div className="flex flex-col items-start xl:items-center text-left xl:text-center xl:px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#dcf2e5] text-[#0f8a3c] flex items-center justify-center shrink-0 shadow-xs text-2xl">
                    <HiOutlineMapPin />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm sm:text-base text-[#021b38]">
                      Support from Calicut
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      Local team, global reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
