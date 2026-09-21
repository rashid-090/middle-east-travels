"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { teamMembersData } from "@/data/allData.js";

import "swiper/css";
import "swiper/css/pagination";

export default function Team() {
  const renderTeamCard = (member) => (
    <div
      key={member.id}
      className="bg-white rounded-[2.25rem] border border-slate-200/80 p-3 shadow-xs hover:shadow-xl transition-all duration-500 group flex flex-col justify-between relative overflow-hidden h-full"
    >
      {/* Member Photo Box */}
      <div>
        <div className="relative w-full aspect-square rounded-[1.75rem] overflow-hidden mb-4 bg-slate-100 border border-slate-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 380px"
            quality={90}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Social Action Overlay Buttons */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-center justify-center gap-2.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform sm:translate-y-2 sm:group-hover:translate-y-0">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                title="Send Email"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-[#19a64b] text-slate-800 hover:text-white backdrop-blur-md flex items-center justify-center text-xs shadow-md transition-all duration-200"
              >
                <FaEnvelope />
              </a>
            )}
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                title="Call Expert"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-[#19a64b] text-slate-800 hover:text-white backdrop-blur-md flex items-center justify-center text-xs shadow-md transition-all duration-200"
              >
                <FaPhone />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-sky-600 text-slate-800 hover:text-white backdrop-blur-md flex items-center justify-center text-xs shadow-md transition-all duration-200"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>

        {/* Member Details */}
        <div className="px-1 space-y-2">
          <div className="flex items-center justify-center text-center gap-2">
            <div>
              <h3 className="text-lg font-medium text-[#021b38] group-hover:text-[#19a64b] transition-colors leading-snug tracking-tight">
                {member.name}
              </h3>
              <p className="text-xs text-[#19a64b] mt-0.5">
                {member.designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 sm:py-20 bg-slate-50 font-sans relative overflow-hidden">
      {/* Decorative Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19a64b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#021b38] tracking-tight leading-tight">
              The Team Behind Your{" "}
              <span className="text-[#19a64b]">Dream Journeys</span>
            </h2>
          </div>
        </div>

        {/* Mobile Carousel Layout (1.2 View + Pagination Dots Only) */}
        <div className="block sm:hidden mt-7 w-full min-w-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={12}
            slidesPerView={1.2}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="team-swiper"
          >
            {teamMembersData.map((member) => (
              <SwiperSlide key={member.id} className="h-auto">
                {renderTeamCard(member)}
              </SwiperSlide>
            ))}
          </Swiper>

          <style>{`
            .team-swiper .swiper-pagination {
              position: relative !important;
              margin-top: 1.25rem !important;
              bottom: 0 !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 0.375rem !important;
            }
            .team-swiper .swiper-pagination-bullet {
              background: #cbd5e1 !important;
              opacity: 1 !important;
              width: 8px !important;
              height: 8px !important;
              transition: all 0.3s ease !important;
              margin: 0 !important;
            }
            .team-swiper .swiper-pagination-bullet-active {
              background: #19a64b !important;
              width: 16px !important;
              border-radius: 9999px !important;
            }
          `}</style>
        </div>

        {/* Desktop Team Members Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-7">
          {teamMembersData.map((member) => renderTeamCard(member))}
        </div>
      </div>
    </section>
  );
}