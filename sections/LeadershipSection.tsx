import { Section } from "@/components/ui/Section";
import { leadership } from "@/utils/content";

export function LeadershipSection() {
  return (
    <Section
      id="leadership"
      title="The Council of Lords"
      subtitle="Leadership campaigns and event command roles."
    >
      <div className="flex flex-wrap justify-center gap-4">
        {leadership.map((item) => (
          <article key={item.title} className="flip-card h-44 w-full sm:w-[48%] lg:w-[31.5%]">
            <div className="flip-card-inner">
              <div className="flip-card-face rounded-xl border border-zinc-600 bg-black/35 p-5 text-center">
                <h3 className="font-display uppercase tracking-[0.1em] text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-xs text-zinc-400">Hover to reveal details</p>
              </div>
              <div className="flip-card-face flip-card-back rounded-xl border border-gold/50 bg-[linear-gradient(145deg,rgba(255,92,34,0.16),rgba(17,18,23,0.85))] p-5 text-center">
                <p className="text-sm text-zinc-100">{item.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
