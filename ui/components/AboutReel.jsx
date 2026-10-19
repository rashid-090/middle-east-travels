"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeXmark,
  FaExpand,
  FaCompress,
  FaHeart,
  FaShareNodes,
  FaInstagram,
  FaCircleCheck,
  FaArrowRight,
  FaLocationDot,
  FaCompass,
} from "react-icons/fa6";

export default function AboutReel() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return "00:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Autoplay / pause on intersection observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto play only if user hasn't manually paused
            if (!userPaused) {
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                  // Autoplay policy prevented playback without interaction
                  setIsPlaying(false);
                });
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [userPaused]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setUserPaused(false);
        })
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
      setUserPaused(true);
    }
  }, []);

  const toggleMute = useCallback((e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    const dur = video.duration || duration || 1;
    setProgress((video.currentTime / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration || 0);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * (video.duration || duration);
    video.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(ratio * 100);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => {
      const next = !prev;
      setLikes((l) => (next ? l + 1 : l - 1));
      if (next) {
        setShowHeartAnim(true);
        setTimeout(() => setShowHeartAnim(false), 900);
      }
      return next;
    });
  };

  const handleDoubleTap = (e) => {
    e.stopPropagation();
    if (!isLiked) {
      setIsLiked(true);
      setLikes((l) => l + 1);
    }
    setShowHeartAnim(true);
    setTimeout(() => setShowHeartAnim(false), 900);
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Middle East Travels & Tourism",
          text: "Check out this reel from Middle East Travels!",
          url: shareUrl,
        });
        return;
      } catch {
        // User dismissed share dialog
      }
    }
    // Fallback: Copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setShowCopiedToast(true);
        setTimeout(() => setShowCopiedToast(false), 2200);
      });
    }
  };

  return (
    <section className="w-11/12 mx-auto py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ================= LEFT COLUMN: NARRATIVE & HIGHLIGHTS (7 COLS) ================= */}
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] w-fit uppercase tracking-wider text-[#19a64b] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-bold inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WATCH OUR STORY
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Official Reel
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#021b38] tracking-tight leading-tight">
            See Middle East Travels <br />
            <span className="text-[#19a64b]">In Live Action</span>
          </h2>

          {/* Narrative text */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Every memorable trip begins with people who genuinely care about your
            journey. Take a quick look behind the scenes at Middle East Travels &
            Tourism — from our consultation counters in Calicut to our happy tour
            groups exploring dream destinations worldwide.
          </p>

          {/* 3 Pillars / Feature Points */}
          <div className="space-y-3.5 pt-1">
            <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#19a64b] flex items-center justify-center shrink-0 mt-0.5">
                <FaCompass className="text-base" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#021b38]">
                  Real Moments & Verified Tours
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Authentic glimpses of our holiday groups, bespoke family trips,
                  and milestone celebrations across Asia, Europe, and the Middle East.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#19a64b] flex items-center justify-center shrink-0 mt-0.5">
                <FaCircleCheck className="text-base" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#021b38]">
                  Dedicated Ground & Visa Specialists
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                  A glimpse into our daily hustle — verifying documents, coordinating
                  embassy submissions, and securing express visa stamps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#19a64b] flex items-center justify-center shrink-0 mt-0.5">
                <FaLocationDot className="text-base" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#021b38]">
                  Rooted in Kerala, Connected Globally
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Headquartered in Calicut, serving thousands of families, professionals,
                  and wanderers with trusted 24/7 travel care.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#19a64b] hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <span>Connect With Our Team</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <a
              href="https://www.instagram.com/middleeast_travels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200/80 shadow-xs active:scale-95 transition-all cursor-pointer group"
            >
              <FaInstagram className="text-pink-600 text-base group-hover:scale-110 transition-transform" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: SLEEK REEL VIDEO PLAYER (5 COLS) ================= */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-primary/20 rounded-[3rem] blur-2xl -z-10 pointer-events-none" />

            {/* Smartphone / Reel Frame */}
            <div
              ref={containerRef}
              onClick={togglePlay}
              onDoubleClick={handleDoubleTap}
              className="relative aspect-[9/16] w-full rounded-[2.25rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-2xl border-[5px] border-slate-900 ring-1 ring-slate-900/40 select-none group cursor-pointer"
            >
              {/* Dynamic Island / Speaker Notch at Top */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center justify-center">
                <div className="w-20 h-3.5 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-between px-2.5 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-6 h-1 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* The HTML5 Reel Video */}
              <video
                ref={videoRef}
                src="/middle-east-reel.mp4"
                playsInline
                loop
                muted={isMuted}
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Top Gradient Overlay */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

              {/* TOP OVERLAY: Brand Identity & Sound Toggle */}
              <div className="absolute top-5 inset-x-3.5 z-20 flex items-center justify-end pointer-events-none">
              

                {/* Sound Toggle Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  title={isMuted ? "Click to unmute" : "Mute"}
                  className="pointer-events-auto w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/15 shadow-md active:scale-90"
                >
                  {isMuted ? (
                    <FaVolumeXmark className="text-xs text-white" />
                  ) : (
                    <FaVolumeHigh className="text-xs text-emerald-400" />
                  )}
                </button>
              </div>

              {/* CENTER: Floating Play/Pause Indicator */}
              <div
                className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                  !isPlaying
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-60"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-black/55 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                  {isPlaying ? (
                    <FaPause className="text-xl" />
                  ) : (
                    <FaPlay className="text-xl translate-x-0.5 text-emerald-400" />
                  )}
                </div>
              </div>

              {/* DOUBLE TAP HEART POP ANIMATION */}
              {showHeartAnim && (
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none animate-ping duration-700">
                  <FaHeart className="text-6xl text-rose-500 drop-shadow-2xl" />
                </div>
              )}

              {/* RIGHT SIDEBAR: REEL QUICK ACTIONS */}
              <div className="absolute right-3 bottom-14 z-20 flex flex-col items-center gap-3.5 pointer-events-auto">
                {/* Like Button */}
                <button
                  type="button"
                  onClick={handleLike}
                  title="Like Reel"
                  className="flex flex-col items-center gap-1 group/btn"
                >
                  <div
                    className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center border transition-all active:scale-90 shadow-md ${
                      isLiked
                        ? "bg-rose-500/80 border-rose-400 text-white"
                        : "bg-black/40 border-white/15 text-white hover:bg-black/60"
                    }`}
                  >
                    <FaHeart
                      className={`text-sm ${
                        isLiked ? "text-white" : "text-white"
                      }`}
                    />
                  </div>
                  <span className="text-[10px] text-white/90 font-medium">
                    {likes}
                  </span>
                </button>

                {/* Share Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  title="Share Reel"
                  className="flex flex-col items-center gap-1 group/btn"
                >
                  <div className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 shadow-md">
                    <FaShareNodes className="text-sm" />
                  </div>
                  <span className="text-[10px] text-white/90 font-medium">
                    Share
                  </span>
                </button>

            
              </div>

              {/* BOTTOM OVERLAY: CAPTION & AUDIO */}
              <div className="absolute bottom-5 inset-x-3.5 z-20 pointer-events-none space-y-2">
                <div className="max-w-[78%]">
                  <p className="text-white text-[11px] sm:text-xs font-medium leading-snug drop-shadow-md">
                    Your Journey, Our Responsibility ✨ Making travel smooth &
                    hassle-free!
                  </p>
             
                </div>

                {/* Timeline Progress Bar & Time */}
                <div className="pointer-events-auto pt-1 flex items-center gap-2">
                  <div
                    ref={progressRef}
                    onClick={handleSeek}
                    className="flex-1 h-1 bg-white/30 rounded-full cursor-pointer overflow-hidden relative group/bar hover:h-1.5 transition-all"
                  >
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-white/80 font-mono shrink-0">
                    {formatTime(currentTime)}
                  </span>
                </div>
              </div>

              {/* "Copied to Clipboard" Toast */}
              {showCopiedToast && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg font-medium">
                  Link copied!
                </div>
              )}

              {/* Unmute hint when hovering if muted */}
              {isMuted && (
                <div className="absolute top-16 right-3 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] bg-black/75 text-white/90 px-2 py-0.5 rounded-md backdrop-blur-xs border border-white/10">
                    Tap to unmute
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
