"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playball } from "next/font/google";
import {
  FaPlaneDeparture,
  FaShieldHalved,
  FaArrowRight,
  FaHeadset,
  FaPercent,
  FaTicket,
  FaGlobe,
} from "react-icons/fa6";
import { RiRefundLine } from "react-icons/ri";
import { IoIosSearch, IoIosAirplane } from "react-icons/io";
import Testimonials from "@/components/Testimonials";
import TouchMarquee from "@/components/TouchMarquee";

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const popularDestinations = [
  {
    id: "dubai",
    title: "Dubai",
    price: "₹ 18,500",
    image: "/dubai_card.jpg",
  },
  {
    id: "singapore",
    title: "Singapore",
    price: "₹ 24,500",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bangkok",
    title: "Bangkok",
    price: "₹ 16,800",
    image: "/thailand_card.jpg",
  },
  {
    id: "kuala-lumpur",
    title: "Kuala Lumpur",
    price: "₹ 17,999",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "maldives",
    title: "Maldives",
    price: "₹ 28,999",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "jeddah",
    title: "Jeddah",
    price: "₹ 19,999",
    image: "/hero_bg.jpg",
  },
  {
    id: "london",
    title: "London",
    price: "₹ 38,500",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
];

const featuredAirlines = [
  {
    id: "emirates",
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
  },
  {
    id: "qatar",
    name: "Qatar Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Qatar_Airways_logo.svg",
  },
  {
    id: "flydubai",
    name: "flydubai",
    logo: "https://1000logos.net/wp-content/uploads/2020/04/FlyDubai-Logo.jpg",
  },
  {
    id: "saudia",
    name: "Saudia",
    logo: "https://logos-world.net/wp-content/uploads/2023/01/Saudi-Arabian-Airlines-Logo.jpg",
  },
  {
    id: "indigo",
    name: "IndiGo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1jiQLIfm1e0KK6xLkehKxqB7a-mpJ7PUhYFSQ2TERYo-v0qA643kIb0&s=10",
  },
  {
    id: "airindia",
    name: "Air India",
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/3840px-Air_India_2023.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    id: "turkish",
    name: "Turkish Airlines",
    logo: "https://cdn.worldvectorlogo.com/logos/turkish-airlines-logo.svg",
  },
  {
    id: "etihad",
    name: "Etihad Airways",
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad-airways-logo.svg/3840px-Etihad-airways-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    id: "oman",
    name: "Oman Air",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCaCxGTvRX5R3zim26MPt-TEdBZ0CjaWXP26cEM_p0H3PNWURF7pd8wh2&s=10",
  },
];

export default function BookFlightsPage() {


 

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative overflow-hidden bg-[#edf8f3] min-h-[350px] lg:min-h-[500px] flex items-center border-b border-slate-100">
        {/* Full Banner Right-Side Overlay Background Image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src="/flight_banner_bg.jpg"
            alt="Book Flights Background - Commercial Airplane flying over city skyline"
            fill
            priority
            loading="eager"
            sizes="100vw"
            quality={95}
            className="object-cover object-center md:object-right opacity-90 lg:opacity-100"
          />
          {/* Smooth Gradient Blend from Left Background (#edf8f3) to Right Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf8f3] via-[#edf8f3]/95 md:via-[#edf8f3]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#edf8f3]/90 via-transparent to-[#edf8f3]/40 lg:hidden" />
        </div>

        <div className="w-11/12 mx-auto py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Banner Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Top Sub-tag / Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dcf2e5] border border-emerald-300/60 text-[#0f8a3c] font-medium text-xs tracking-wider uppercase shadow-xs">
                <IoIosAirplane className="text-sm" />
                <span>FLY TO YOUR DREAMS</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#021b38]">
                Book Flights <br />
                <span className="text-slate-800">
                  to Your <span className="text-primary">Favourite Destinations</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal">
                Best fares, multiple airlines, hassle-free booking and 24/7
                customer support – only at Middle East Travels.
              </p>

              {/* Features List Row (Matches reference image icons bar) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl">
                {/* Item 1 */}
                <div className="flex items-center gap-2 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaPlaneDeparture className="text-lg" />
                  </div>
                  <span className="leading-tight">Best Price Guarantee</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaShieldHalved className="text-lg" />
                  </div>
                  <span className="leading-tight">100% Secure Booking</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <RiRefundLine className="text-lg" />
                  </div>
                  <span className="leading-tight">Easy Refund Option</span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-2 text-slate-800 font-medium text-xs sm:text-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#021b38] shrink-0">
                    <FaHeadset className="text-lg" />
                  </div>
                  <span className="leading-tight">24/7 Customer Support</span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

     

      {/* ================= POPULAR DESTINATIONS CAROUSEL SECTION ================= */}
      <section className="w-full py-8 lg:py-14 bg-slate-50 font-sans overflow-hidden">
        <div className="w-11/12 mx-auto space-y-6">
          {/* Section Header Row (Matching reference image layout) */}
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              {/* Green Dash Sub-tag */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-emerald-600 rounded-full" />
                <span className="text-[11px] uppercase tracking-widest font-semibold text-emerald-700">
                  POPULAR DESTINATIONS
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#021b38] tracking-tight">
                Explore the World
              </h2>
              <p className="text-slate-500 text-sm font-normal">
                One Flight at a Time
              </p>
            </div>

            {/* View All Flights Link */}
            <a
              href="https://wa.me/918714806661?text=Hi!%20I%20want%20to%20enquire%20about%20flight%20ticket%20booking"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#021b38] transition-colors"
            >
              <span>View All Flights</span>
              <FaArrowRight className="text-xs text-emerald-600 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Touch Marquee Carousel (Exact card design as reference image) */}
          <div className="w-full py-2">
            <TouchMarquee speed={1.2}>
              {popularDestinations.map((item) => (
                <div
                  key={item.id}
                  className="w-[240px] sm:w-[270px] lg:w-[285px] px-2.5 py-2 shrink-0"
                >
                  <a
                    href={`https://wa.me/918714806661?text=${encodeURIComponent(
                      `Hi, I want to book a flight ticket to ${item.title}. Please share available flights & best fares.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative w-full aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden block transition-all duration-300 group"
                  >
                    {/* Background Destination Photo */}
                    <Image
                      src={item.image}
                      alt={`${item.title} Flight Destination`}
                      fill
                      sizes="(max-width: 640px) 240px, 285px"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Bottom Soft Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Card Text & Arrow Button Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 z-10">
                      <div className="space-y-0.5">
                        <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 font-normal">
                          From{" "}
                          <span className="text-sm font-semibold text-white">
                            {item.price}
                          </span>
                        </p>
                      </div>

                      {/* White Arrow Circle Button */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#021b38] group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md shrink-0">
                        <FaArrowRight className="text-xs sm:text-sm" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </TouchMarquee>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="w-11/12 mx-auto pb-10 lg:pb-16">
        <div className="bg-white rounded-3xl border border-slate-100/90 shadow-xs overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Area: Text Content Side-by-Side with Traveler Photo */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Text Content Column (Sub-tag, Title, Description, Button) */}
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
                    Your Trusted <br />
                    Travel Partner
                  </h2>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    At Middle East Travels, we make flight booking simple, safe and affordable. With years of experience and a customer-first approach, we ensure your journey is comfortable from start to finish.
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-1">
                  <a
                    href="https://wa.me/918714806661?text=Hi!%20I%20want%20to%20know%20more%20about%20Middle%20East%20Travels"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-primary hover:bg-secondary text-white text-xs sm:text-sm font-medium shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>

              {/* Traveler Photo Column (Placed Side-by-Side right next to Text & Button) */}
              <div className="md:col-span-6 relative h-[280px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xs">
                <Image
                  src="/why_choose_traveler.jpg"
                  alt="Happy female traveler with passport and tickets at airport runway with airplane"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-center"
                />
              </div>

            </div>

            {/* Right Area: 6 Feature Items List */}
            <div className="lg:col-span-4 space-y-5 lg:pl-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0">
              
              {/* Item 1: Best Price Guarantee */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#021b38] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FaPercent className="text-xs" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-medium text-[#021b38] text-xs sm:text-sm">
                    Best Price Guarantee
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Get the lowest fares with no hidden charges.
                  </p>
                </div>
              </div>

              {/* Item 2: 24/7 Customer Support */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#021b38] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FaHeadset className="text-xs" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-medium text-[#021b38] text-xs sm:text-sm">
                    24/7 Customer Support
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    We're always here, whenever you need us.
                  </p>
                </div>
              </div>

              {/* Item 3: 100% Secure Booking */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#021b38] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FaShieldHalved className="text-xs" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-medium text-[#021b38] text-xs sm:text-sm">
                    100% Secure Booking
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Your data and payments are always safe with us.
                  </p>
                </div>
              </div>

              {/* Item 4: Easy Refund Option */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#021b38] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <RiRefundLine className="text-sm" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-medium text-[#021b38] text-xs sm:text-sm">
                    Easy Refund Option
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Hassle-free refunds as per airline policy.
                  </p>
                </div>
              </div>

              {/* Item 5: Flexible Travel Options */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#021b38] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FaPlaneDeparture className="text-xs" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-medium text-[#021b38] text-xs sm:text-sm">
                    Flexible Travel Options
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    Multiple airlines, multiple choices.
                  </p>
                </div>
              </div>

              {/* Item 6: Global Destinations */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#021b38] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <FaGlobe className="text-xs" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <h3 className="font-medium text-[#021b38] text-xs sm:text-sm">
                    Global Destinations
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-normal leading-normal">
                    From popular cities to hidden gems.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

       {/* ================= FEATURED AIRLINES CAROUSEL SECTION ================= */}
      <section className="w-full py-8 lg:py-12 bg-slate-50 font-sans overflow-hidden">
        <div className="w-11/12 mx-auto space-y-5">
          {/* Section Header Row (Matching reference image layout) */}
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              {/* Green Dash Sub-tag */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-emerald-600 rounded-full" />
                <span className="text-[11px] uppercase tracking-widest font-semibold text-emerald-700">
                  FEATURED AIRLINES
                </span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                We work with top airlines to bring you the best deals and a seamless journey.
              </p>
            </div>

          
          </div>

          {/* Touch Marquee Airlines Logo Carousel */}
          <div className="w-full py-2">
            <TouchMarquee speed={1.0}>
              {featuredAirlines.map((airline) => (
                <div
                  key={airline.id}
                  className="w-[160px] sm:w-[190px] lg:w-[210px] px-2.5 py-2 shrink-0"
                >
                  <div className="bg-white rounded-2xl border border-slate-100/90 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 sm:p-5 h-20 sm:h-24 group">
                    <img
                      src={airline.logo}
                      alt={`${airline.name} Logo`}
                      className="max-h-10 sm:max-h-12 w-auto max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </TouchMarquee>
          </div>
        </div>
      </section>

      <Testimonials/>
      
    </div>
  );
}
