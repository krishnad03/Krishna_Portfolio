import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" title="The Faceless Architect" subtitle="A systems-first builder focused on reliable data platforms.">
      <div className="grid gap-4 font-body text-zinc-200 md:grid-cols-2">
        <article className="rounded-lg border border-zinc-700 bg-black/30 p-5">
          <p>Location: Indore, Madhya Pradesh</p>
          <p>Role: Data Engineer</p>
          <p>CGPA: 7.80</p>
          <p>Institute: Acropolis Institute of Technology and Research, Indore</p>
        </article>
        <article className="rounded-lg border border-zinc-700 bg-black/30 p-5">
          <p>Detail-oriented Data Engineering enthusiast with practical exposure to enterprise-grade ETL pipelines and historical data management. Looking to leverage strong problem-solving skills and data transformation expertise to build efficient, production-ready data platforms.</p>
          <p className="mt-3">Driven by a strong foundation in scalable architecture and change-data tracking, I focus on building reliable systems that preserve data integrity while enabling meaningful business insights. Passionate about transforming complex datasets into structured, trustworthy assets that power strategic decision-making.</p>
        </article>
      </div>
    </Section>
  );
}
