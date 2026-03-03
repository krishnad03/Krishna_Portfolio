import { Section } from "@/components/ui/Section";

export function TrainingSection() {
  return (
    <Section
      id="training"
      title="The Dragon's Training"
      subtitle="Before commanding dragons, one must train in fire."
    >
      <article className="flip-card h-48">
        <div className="flip-card-inner">
          <div className="flip-card-face rounded-xl border border-ember/45 bg-[radial-gradient(circle_at_top,rgba(255,92,34,0.16),rgba(17,18,23,0.7))] p-6">
            <h3 className="font-display text-xl uppercase tracking-[0.12em] text-gold">Wipro Talent Next Program</h3>
            <p className="mt-3 text-zinc-200">Trainee - Java</p>
            <p className="text-zinc-300">Duration: July 2025 - September 2025</p>
            <p className="mt-2 text-xs text-zinc-400">Hover to reveal details</p>
          </div>
          <div className="flip-card-face flip-card-back rounded-xl border border-gold/50 bg-[linear-gradient(145deg,rgba(255,92,34,0.18),rgba(17,18,23,0.82))] p-6">
            <p className="text-sm text-zinc-100">
              Completed intensive Java training focused on backend logic, coding discipline, and enterprise-ready
              development practices.
            </p>
          </div>
        </div>
      </article>
    </Section>
  );
}
