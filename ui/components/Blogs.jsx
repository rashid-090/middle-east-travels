"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { blogsData } from "@/data/allData.js";

import "swiper/css";
import "swiper/css/navigation";

export default function Blogs() {
  return (
    <section className="w-full py-12 lg:py-16 bg-white font-sans overflow-hidden">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Header & Swiper Navigation Controls (4 Cols) */}
          <div className=" flex flex-col justify-start h-full space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold capitalize text-[#021b38] tracking-tight">
                Our latest <span className="text-[#021b38]">blogs</span>
              </h2>

              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mt-4 max-w-sm">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends in
                our field.
              </p>

              <Link
                href="/blogs"
                className="inline-block px-7 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm hover:bg-primary hover:text-white transition-all shadow-xs mt-6 cursor-pointer"
              >
                Know More
              </Link>
            </div>

            {/* Left & Right Round Navigation Buttons at Bottom Left */}
            <div className="flex items-center gap-3 pt-6 lg:pt-12">
              <button
                className="blog-prev w-10 h-10 rounded-full border border-slate-200 text-secondary hover:bg-primary hover:text-white hover:border-sectext-secondary flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous Blog"
              >
                <FaArrowLeft className="text-sm" />
              </button>

              <button
                className="blog-next w-10 h-10 rounded-full border border-slate-200 text-secondary hover:bg-primary hover:text-white hover:border-sectext-secondary flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Next Blog"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Blog Cards Swiper Carousel (8 Cols) */}
          <div className="lg:col-span-3 w-full min-w-0">
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".blog-prev",
                nextEl: ".blog-next",
              }}
              spaceBetween={10}
              slidesPerView={1.1}
              loop={true}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1.6,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="w-full"
            >
              {blogsData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={item.link} className="group block space-y-4  rounded-[2rem] p-3 border border-slate-200/70 shadow-xs  transition-all duration-300">
                    
                    {/* Blog Image Container */}
                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xs border border-slate-100/80">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        quality={90}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                  <div className="p-3 space-y-3">
                      {/* Blog Title */}
                    <h3 className="text-lg md:text-lg font-medium text-[#5f5f60] group-hover:text-[#021B38] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Blog Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Read More Link */}
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#021b38] group-hover:text-primary transition-colors pt-1">
                      <span>Read more</span>
                      <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                    </div>

                  </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}