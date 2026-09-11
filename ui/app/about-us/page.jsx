"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaAward,
  FaCircleCheck,
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";
import Counts from "@/components/Counts";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";

export default function AboutUsPage() {
  return (
    <>
    <div className="h-full bg-slate-50 text-slate-900 flex flex-col font-sans">
      <main className="flex-1">
        {/* ================= STORY & MISSION SECTION (2 COLS) ================= */}
        <section className="w-11/12 mx-auto pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Image with Floating Card (5 COLS) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-[2.25rem] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=100"
                  alt="Explorer looking over scenic travel landscape"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Award Badge Box */}
              <div className="absolute -bottom-5 -right-3 md:right-5 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs">
                <div className="w-12 h-12 animate-pulse rounded-xl bg-emerald-50 text-[#19a64b] flex items-center justify-center text-2xl shrink-0">
                  <FaAward />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#021b38]">
                    Top Rated Travel Agency
                  </h4>
                  <div className="flex items-center gap-1 text-amber-400 text-xs py-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-slate-600 text-[10px] ml-1 font-medium">
                      4.9/5 Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Content (7 COLS) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] w-fit uppercase tracking-wider text-[#19a64b] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-bold">
                  WHO WE ARE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#021b38] tracking-tight leading-tight">
                  Your Gateway to Seamless <span className="text-[#19a64b]">Global Travel</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Middle East Travels was founded with a single mission: to make
                world travel effortless, inspiring, and accessible for everyone.
                From exotic desert safaris in Dubai to cultural explorations in
                Eurasia and luxury island getaways in Bali, we specialize in
                delivering tailored holiday packages that create lifelong memories.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                With our main operational head office in Kozhikode, Kerala, and
                dedicated partner networks across the Middle East and Asia, we
                offer end-to-end solutions—including express tourist visas,
                flight reservations, hotel bookings, and 24/7 on-ground assistance.
              </p>

              {/* 4 Key Pillars Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5">
                  <FaCircleCheck className="text-[#19a64b] text-base shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    100% Customized Tour Packages
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCircleCheck className="text-[#19a64b] text-base shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Express Visa Approvals
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCircleCheck className="text-[#19a64b] text-base shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    24/7 Emergency Support
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCircleCheck className="text-[#19a64b] text-base shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Best Price Guarantee
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/tour-packages"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explore Tour Packages</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    <Counts/>
    <Testimonials/>
    </>
  );
}
