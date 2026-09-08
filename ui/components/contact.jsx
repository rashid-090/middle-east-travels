"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaPaperPlane,
  FaSpinner,
  FaCircleCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="w-full py-14 lg:py-20 border-t border-slate-200/60 font-sans">
      <div className="w-11/12 xl:w-10/12 mx-auto">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: IMAGE WITH STAT BADGE (5 COLS) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=100"
              alt="Travel Explorer looking at mountain landscape"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={90}
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

           
          </div>

          {/* RIGHT COLUMN: HEADINGS & FORM (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Headings */}
            <div className="space-y-2">
      
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#021b38] tracking-tight">
                Get In Touch <span className="text-primary">With Us</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg">
                Have questions about our travel packages or visa services? Drop us a message and we'll get back to you.
              </p>
            </div>

            {/* Contact Form */}
            {submitted ? (
              <div className="py-10 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3 p-6">
                <FaCircleCheck className="text-emerald-500 text-4xl mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Sent!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-[#19A64B] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      suppressHydrationWarning
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#19A64B] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      suppressHydrationWarning
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#19A64B] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#19A64B] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    suppressHydrationWarning
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#19A64B] focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit py-4 px-10 rounded-xl bg-primary hover:bg-secondary text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-xs" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}