"use client";

import { motion } from "framer-motion";

type Props = {
  onThroneClick: () => void;
};

export function HeroSection({ onThroneClick }: Props) {
  return (
    <header id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(217,164,65,0.2),transparent_45%),linear-gradient(180deg,#111217_0%,#070708_70%)]" />
      <div className="absolute -top-10 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-zinc-100/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,92,34,0.25))] animate-firePulse" />

      <motion.div
        className="relative z-10 w-full max-w-4xl p-8 text-center md:p-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative">
        <p className="mb-4 font-body text-sm uppercase tracking-[0.28em] text-zinc-300">The Iron Data Throne</p>
        <h1 className="medieval-title text-4xl md:text-7xl lg:text-[6.2rem]">KRISHNA</h1>
        <h2 className="mt-5 font-body text-base uppercase tracking-[0.14em] text-zinc-100 md:whitespace-nowrap md:text-[1.7rem] lg:text-[1.95rem]">
          The Architect of the Many-Faced Database
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-zinc-300">
          Builder of scalable kingdoms. Keeper of historical truth. Master of transformation pipelines.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onThroneClick}
            className="rounded border border-ember/70 bg-blood/30 px-8 py-3 font-display uppercase tracking-[0.2em] text-zinc-100 transition hover:bg-blood/50 hover:shadow-ember"
          >
            Sit on the Iron Throne
          </button>
          <a
            href="#contact"
            className="rounded border border-gold/60 px-8 py-3 font-display uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10"
          >
            Send a Raven
          </a>
        </div>
        </div>
      </motion.div>
    </header>
  );
}
