"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroDragonVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const stopAtLanding = window.setTimeout(() => {
      video.pause();
    }, 4800);

    return () => window.clearTimeout(stopAtLanding);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block"
      initial={{ opacity: 0, x: 420, y: -130, scale: 0.72 }}
      animate={{ opacity: 0.92, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 4.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute bottom-[18%] right-[17%] h-[10.5rem] w-[15rem] lg:bottom-[17%] lg:right-[19%] lg:h-[12rem] lg:w-[17rem]"
        animate={{ y: 0, x: 0, rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        <video
          ref={videoRef}
          className="hero-dragon-video h-full w-full object-contain"
          src="/video/hero-dragon.webm"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      </motion.div>
    </motion.div>
  );
}
