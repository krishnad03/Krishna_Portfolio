"use client";

import { motion } from "framer-motion";

export function HeroDragon() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
      animate={{ rotate: 360 }}
      transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      style={{ transformOrigin: "50% 50%" }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ x: -18, y: -210 }}
        animate={{
          x: [-18, 42, 12, -48, -18],
          y: [-210, -120, 18, -92, -210],
          rotate: [-8, 10, 22, -16, -8],
          scale: [0.9, 1, 1.08, 0.96, 0.9]
        }}
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: [0, -8, 5, 0], scaleY: [1, 0.94, 1.02, 1] }}
          transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
          className="hero-dragon-glow"
        >
          <svg viewBox="0 0 220 130" className="h-20 w-28 lg:h-24 lg:w-36">
            <defs>
              <linearGradient id="dragonGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,235,200,0.95)" />
                <stop offset="55%" stopColor="rgba(201,161,95,0.9)" />
                <stop offset="100%" stopColor="rgba(120,82,20,0.8)" />
              </linearGradient>
            </defs>
            <path
              d="M111 60c8-19 23-29 38-31 13-2 28 3 36 11-13-2-27 1-35 8 18 1 36 12 44 26-12-5-25-8-40-7 8 11 8 24 4 35-8-11-16-18-29-22-5 15-17 24-35 29 9-10 14-19 15-29-13 3-28 2-41-2-9 10-23 16-42 20 15-10 24-19 30-31-16 2-30 0-42-8 18-3 31-10 40-21-14-3-28-10-39-22 21 6 38 7 53 2 8-14 24-23 43-25-9 8-15 17-15 28z"
              fill="url(#dragonGlow)"
              opacity="0.92"
            />
            <path
              d="M106 58c-11-18-28-28-47-29-14-1-29 5-38 16 14-3 27-1 36 5-18 4-34 17-40 33 11-6 24-11 40-12-6 11-4 24 0 35 7-12 15-20 28-26 8 14 22 21 41 22-12-8-18-17-20-27 13 1 28-1 42-7 10 9 25 13 44 14-17-7-28-15-35-26 16-1 31-4 45-11-18-5-32-9-42-18 15-5 28-14 37-27-20 8-37 12-53 10-10-13-27-20-46-18 10 6 17 15 18 26z"
              fill="rgba(30,30,34,0.92)"
            />
            <path
              d="M95 64c19 6 37 7 55 4 17-3 31-10 44-19-8 14-21 24-36 30 7 7 11 16 13 26-11-11-22-17-34-20-5 11-16 19-34 24 8-8 13-16 14-25-17 1-33-2-48-9-10 8-23 12-37 13 12-7 21-14 28-23-15 0-29-4-42-11 17-1 31-6 43-14-11-5-20-14-28-26 15 9 29 14 42 16 5-12 16-21 34-26-8 8-13 16-14 24z"
              fill="rgba(8,8,11,0.88)"
            />
            <path d="M112 54c8 0 15 7 15 15 0 10-7 18-15 26-8-8-15-16-15-26 0-8 7-15 15-15z" fill="rgba(8,8,11,0.96)" />
            <path
              d="M125 44c12-8 24-9 35-5-9 2-16 6-20 13 7 2 13 8 15 15-6-3-12-4-18-4 1 8-1 15-5 21-3-8-7-14-13-17z"
              fill="rgba(8,8,11,0.96)"
            />
            <circle cx="146" cy="49" r="2.2" fill="rgba(255,92,34,0.95)" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
