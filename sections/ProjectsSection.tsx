"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { projects } from "@/utils/content";

export function ProjectsSection() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section id="projects" title="The Great Battles" subtitle="House sigil cards from real engineering campaigns.">
      <div className="space-y-5">
        {projects.map((project, idx) => (
          <article key={project.name} className="rounded-lg border border-zinc-700 bg-black/35 p-6 text-justify">
            <h3 className="font-display text-xl uppercase tracking-[0.12em] text-gold">{project.name}</h3>
            <p className="mt-1 text-sm text-zinc-300">
              {project.role} | {project.timeline}
            </p>
            <ul className="mt-3 space-y-1 text-zinc-200">
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded border border-zinc-600 px-2 py-1 text-xs text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-zinc-600 px-4 py-2 text-xs uppercase tracking-[0.12em] text-zinc-200 transition hover:border-gold hover:text-gold"
              >
                GitHub
              </a>
              <button
                type="button"
                onClick={() => setActive(idx)}
                className="rounded border border-ember/70 bg-blood/25 px-4 py-2 text-xs uppercase tracking-[0.12em] text-zinc-100 transition hover:bg-blood/45"
              >
                Enter the Battlefield
              </button>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-black/70 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-zinc-600 bg-charcoal p-6"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="font-display text-2xl uppercase tracking-[0.12em] text-gold">{projects[active].name}</h4>
              <p className="mt-3 text-justify text-zinc-200">{projects[active].impact}</p>
              <div className="mt-5 rounded border border-zinc-700 bg-black/30 p-4 text-zinc-300">
                Architecture diagram placeholder: add a lightweight SVG in `public/assets/architecture-pipeline.svg`.
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="mt-6 rounded border border-zinc-500 px-4 py-2 text-sm text-zinc-200 transition hover:border-gold hover:text-gold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
