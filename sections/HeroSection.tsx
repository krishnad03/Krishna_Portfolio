"use client";

import { motion } from "framer-motion";
import { HeroDragonVideo } from "@/components/ui/HeroDragonVideo";

type Props = {
  onThroneClick: () => void;
};

export function HeroSection({ onThroneClick }: Props) {
  return (
    <header id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(217,164,65,0.2),transparent_45%),linear-gradient(180deg,#111217_0%,#070708_70%)]" />
      <div className="absolute -top-10 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-zinc-100/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,92,34,0.25))] animate-firePulse" />
      <div className="absolute inset-x-0 top-1/2 mx-auto hidden h-[34rem] w-full max-w-5xl -translate-y-[54%] md:block">
        <HeroDragonVideo />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl p-8 text-center md:p-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative">
        <p className="mb-4 font-body text-xs uppercase tracking-[0.22em] text-zinc-300 md:text-sm">The Iron Data Throne</p>
        <h1 className="medieval-title whitespace-nowrap text-[2.35rem] sm:text-[3.2rem] md:text-[4.15rem] lg:text-[4.8rem]">KRISHNA DUBEY</h1>
        <h2 className="got-copy mt-3 font-body text-sm uppercase tracking-[0.08em] text-zinc-100 md:whitespace-nowrap md:text-[1.35rem] lg:text-[1.55rem]">
          The Architect of the Many-Faced Database
        </h2>
        <p className="got-copy mx-auto mt-6 max-w-2xl font-body text-sm text-zinc-300 md:text-base">
          Builder of scalable kingdoms. Keeper of historical truth. Master of transformation pipelines.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onThroneClick}
            className="rounded border border-ember/70 bg-blood/30 px-8 py-3 font-display uppercase tracking-[0.12em] text-zinc-100 transition hover:bg-blood/50 hover:shadow-ember"
          >
            Sit on the Iron Throne
          </button>
          <a
            href="#contact"
            className="rounded border border-gold/60 px-8 py-3 font-display uppercase tracking-[0.12em] text-gold transition hover:bg-gold/10"
          >
            Send a Raven
          </a>
        </div>
        </div>
      </motion.div>
    </header>
  );
}
