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
import Team from "@/components/Team";

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
                  src="/abt-bg2.webp"
                  alt="Explorer looking over scenic travel landscape"
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

           
            </div>

            {/* Right Column: Narrative Content (7 COLS) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] w-fit uppercase tracking-wider text-[#19a64b] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-bold">
                  WHO WE ARE
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#021b38] tracking-tight leading-tight">
                 Your Journey, 
<br/><span className="text-[#19a64b]">Our Responsibility </span>
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
At Middle East Travels & Tourism, we believe that every traveller has different needs, preferences, and budgets. That's why we offer customized travel solutions designed around your requirements.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
From choosing the right destination and accommodation to arranging flights, transfers, sightseeing, and visa assistance, our experienced team works closely with you to make your journey smooth from start to finish.
We serve travellers from Calicut and across Kerala, providing reliable travel services for popular destinations around the world.

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
    <Team/>
    </>
  );
}
