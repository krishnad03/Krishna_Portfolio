"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto my-16 w-full max-w-6xl px-5 md:px-8"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-shell ember-layer smoke-layer">
        <h2 className="medieval-title text-xl md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-3xl text-zinc-300">{subtitle}</p> : null}
        <div className="mt-7">{children}</div>
      </div>
    </motion.section>
  );
}
