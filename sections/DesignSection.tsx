import { Section } from "@/components/ui/Section";

const designTracks = [
  {
    title: "Digital Art",
    detail: "Atmospheric visual compositions shaped by contrast, mood, and cinematic storytelling."
  },
  {
    title: "Posters & Social Creatives",
    detail: "Event graphics, promotional layouts, and bold campaign visuals built for strong first impact."
  },
  {
    title: "Visual Identity Work",
    detail: "Design direction driven by typography, hierarchy, and polished presentation choices."
  }
];

export function DesignSection() {
  return (
    <Section
      id="design"
      title="The Painted Table"
      subtitle="Graphic design work, digital art, and visual storytelling beyond the data realm."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-xl border border-zinc-700 bg-black/35 p-6 text-justify">
          <p className="text-zinc-200">
            I am also a graphic designer who loves to create digital art. This body of work reflects a parallel craft:
            building mood, clarity, and visual impact through design.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {designTracks.map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-700 bg-zinc-950/70 p-4">
                <h3 className="font-display text-sm uppercase tracking-[0.12em] text-gold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-gold/35 bg-[linear-gradient(145deg,rgba(217,164,65,0.1),rgba(17,18,23,0.72))] p-6 text-justify">
          <h3 className="font-display text-lg uppercase tracking-[0.14em] text-gold">Open the Gallery</h3>
          <p className="mt-3 text-zinc-300">
            View the full graphic design portfolio in the linked Drive collection.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1ZLk-LinLASPxXIhj-sNvyJenK4I1SNgL?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded border border-gold/60 px-5 py-3 font-display uppercase tracking-[0.12em] text-gold transition hover:bg-gold/10"
          >
            Enter the Gallery
          </a>
        </article>
      </div>
    </Section>
  );
}
