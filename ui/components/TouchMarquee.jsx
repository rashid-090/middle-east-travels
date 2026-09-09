"use client";

import React, { useRef, useEffect, useState } from "react";

export default function TouchMarquee({
  children,
  speed = 1,
  className = "",
  resumeDelay = 2500,
}) {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Mouse drag tracking for desktop
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastTime = performance.now();

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused && el && el.scrollWidth > 0) {
        const halfWidth = el.scrollWidth / 2;
        el.scrollLeft += (speed * delta) / 16;

        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isPaused, speed]);

  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, resumeDelay);
  };

  // Touch Handlers for Mobile
  const handleTouchStart = () => {
    pauseAutoScroll();
  };

  const handleTouchEnd = () => {
    scheduleResume();
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    pauseAutoScroll();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      scheduleResume();
    }
  };

  const handleMouseLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
    }
    setIsPaused(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`flex overflow-x-auto no-scrollbar touch-pan-x select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <div className="flex shrink-0 items-stretch">{children}</div>
      <div className="flex shrink-0 items-stretch" aria-hidden="true">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, {
            key: child.key ? `${child.key}-dup-${index}` : `dup-${index}`,
          });
        })}
      </div>
    </div>
  );
}
