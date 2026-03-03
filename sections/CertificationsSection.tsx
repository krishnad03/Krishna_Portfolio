import { Section } from "@/components/ui/Section";
import { certifications } from "@/utils/content";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      title="The Maester's Scrolls"
      subtitle="Ancient parchment records from formal training paths."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <article key={cert.title} className="flip-card h-44">
            <div className="flip-card-inner">
              <div className="flip-card-face rounded-lg border border-gold/35 bg-[linear-gradient(145deg,rgba(217,164,65,0.12),rgba(17,18,23,0.5))] p-5">
                <h3 className="font-display uppercase tracking-[0.1em] text-zinc-100">{cert.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">Hover to reveal details</p>
              </div>
              <div className="flip-card-face flip-card-back rounded-lg border border-gold/55 bg-[linear-gradient(145deg,rgba(255,92,34,0.18),rgba(17,18,23,0.8))] p-5">
                <p className="text-sm text-zinc-100">{cert.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
