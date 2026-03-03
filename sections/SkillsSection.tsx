"use client";

import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/utils/content";

export function SkillsSection() {
  return (
    <Section id="skills" title="The Iron Throne of Data" subtitle="Sword-forged expertise with dragon-fire precision.">
      <div className="mb-5 rounded-lg border border-zinc-700 bg-black/30 p-3">
        <p className="text-sm text-zinc-300">Forged from fire and logic, every skill is battle-tested for production data systems.</p>
      </div>

      <div className="space-y-7">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-zinc-700 bg-black/25 p-5">
            <h3 className="font-display uppercase tracking-[0.14em] text-gold">{group.title}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded border border-zinc-600 bg-zinc-900/75 px-3 py-2 text-center text-sm text-zinc-100 transition hover:border-ember/80 hover:text-gold"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
