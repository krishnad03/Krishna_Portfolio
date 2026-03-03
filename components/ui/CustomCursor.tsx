"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  onDragonTripleTap: () => void;
};

export function CustomCursor({ onDragonTripleTap }: Props) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [clickTimes, setClickTimes] = useState<number[]>([]);
  const [enabled, setEnabled] = useState(false);
  const springX = useSpring(0, { stiffness: 110, damping: 16 });
  const springY = useSpring(0, { stiffness: 110, damping: 16 });

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(pointerFine);
    if (!pointerFine) return;

    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX + 18);
      springY.set(e.clientY + 10);
    };

    const click = () => {
      const now = Date.now();
      const next = [...clickTimes.filter((t) => now - t < 1200), now];
      setClickTimes(next);
      if (next.length === 3) onDragonTripleTap();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, [clickTimes, onDragonTripleTap, springX, springY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[120] h-5 w-5 rounded-full border border-ember/80"
        style={{
          x: mouse.x - 10,
          y: mouse.y - 10,
          boxShadow: "0 0 18px rgba(255,92,34,0.8), 0 0 38px rgba(255,92,34,0.25)"
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[118] opacity-60"
        style={{ x: springX, y: springY }}
      >
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M1 12L8 8L14 10L20 4L23 5L18 11L13 13L7 12L4 15L1 12Z" fill="#d9a441" />
        </svg>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[119] h-2 w-2 rounded-full bg-ember/70"
        animate={{ x: mouse.x - 3, y: mouse.y - 3, opacity: [0.6, 0.15, 0.6] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </>
  );
}
