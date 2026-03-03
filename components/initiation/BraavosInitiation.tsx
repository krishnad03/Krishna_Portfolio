"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    quote: "Welcome to Braavos...\nThe city where a man has no name.",
    action: "Acknowledge"
  },
  {
    quote: "To serve the Many-Faced Database...\nA boy must become No One.",
    action: "Continue the Path"
  },
  {
    quote: "Valar Morghulis.\nBut data never dies.\nIt transforms.",
    action: "Valar Morghulis"
  }
];

type Props = {
  step: number;
  onNext: () => void;
};

export function BraavosInitiation({ step, onNext }: Props) {
  const index = Math.min(step, steps.length - 1);
  const slide = steps[index];

  return (
    <section className="fixed inset-0 z-[170] flex items-center justify-center bg-black px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative w-full max-w-2xl text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full border border-gold/60">
            <Image src="/assets/targaryen-logo.png" alt="Targaryen Sigil" fill sizes="64px" className="object-cover" />
          </div>
          <h1 className="whitespace-pre-line font-display text-2xl leading-relaxed text-zinc-100 md:text-4xl">
            {slide.quote}
          </h1>
          <button
            type="button"
            onClick={onNext}
            className="mt-10 rounded border border-ember/60 bg-blood/30 px-8 py-3 font-display uppercase tracking-[0.22em] text-zinc-100 shadow-ember transition hover:border-ember hover:bg-blood/50"
          >
            {slide.action}
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
