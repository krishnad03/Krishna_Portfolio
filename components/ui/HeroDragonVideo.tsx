"use client";

import { motion } from "framer-motion";

export function HeroDragonVideo() {
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
        animate={{
          y: [0, -8, 0, -5, 0],
          x: [0, -10, -4, -8, 0],
          rotate: [0, -2.5, 0.8, -1.2, 0]
        }}
        transition={{ duration: 6.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <video
          className="hero-dragon-video h-full w-full object-contain"
          src="/video/hero-dragon.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </motion.div>
    </motion.div>
  );
}
