"use client";

import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  onDragonTripleTap: () => void;
};

export function CustomCursor({ onDragonTripleTap }: Props) {
  const [clickTimes, setClickTimes] = useState<number[]>([]);
  const [enabled, setEnabled] = useState(false);
  const springX = useSpring(0, { stiffness: 78, damping: 22, mass: 0.7 });
  const springY = useSpring(0, { stiffness: 78, damping: 22, mass: 0.7 });

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(pointerFine);
    if (!pointerFine) return;

    const move = (e: MouseEvent) => {
      // Anchor the top of the pin near the true pointer location.
      springX.set(e.clientX - 11);
      springY.set(e.clientY - 2);
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
    <motion.div
      className="pointer-events-none fixed z-[1000] opacity-90"
      style={{ x: springX, y: springY }}
    >
      <div className="relative h-[42px] w-[26px] overflow-hidden">
        <Image
          src="/assets/sigils/hand-of-king.png"
          alt="Hand of the King cursor"
          fill
          sizes="26px"
          className="object-cover object-top scale-[1.22] drop-shadow-[0_0_10px_rgba(217,164,65,0.35)]"
        />
      </div>
    </motion.div>
  );
}
