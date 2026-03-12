import { Section } from "@/components/ui/Section";

const journey = [
  {
    place: "Dragonstone - The Present Realm",
    title: "Data Engineer, Startappss Pvt Ltd",
    details: "Current role focused on data systems, transformations, and scalable pipelines."
  },
  {
    place: "Oldtown - The College Citadel",
    title: "B.Tech CSE, AITR Indore (2022-2026)",
    details: "Current CGPA: 7.80"
  },
  {
    place: "King's Landing - Senior School",
    title: "Class XII, St. Paul's School, Gwalior (2022)",
    details: "Score: 90%"
  },
  {
    place: "Winterfell - Foundation Years",
    title: "Class X, St. Paul's School, Gwalior (2020)",
    details: "Score: 81%"
  }
];

export function JourneySection() {
  return (
    <Section id="journey" title="Journey Across Westeros" subtitle="Milestones mapped as realms on the path to the data throne.">
      <div className="space-y-4 pl-8 md:pl-10">
        {journey.map((item, index) => (
          <div key={item.title} className="relative pb-4 last:pb-0">
            {index > 0 ? (
              <span className="absolute left-[-12px] top-0 h-[30px] w-px bg-gradient-to-b from-gold/80 to-ember/70" />
            ) : null}
            {index < journey.length - 1 ? (
              <span className="absolute bottom-[-16px] left-[-12px] top-[30px] w-px bg-gradient-to-b from-ember/70 to-zinc-600" />
            ) : null}
            <span className="absolute left-[-18px] top-6 h-3 w-3 rounded-full bg-ember shadow-ember" />
            <article className="relative rounded-lg border border-zinc-700 bg-black/35 p-5">
              <p className="font-display text-[0.72rem] uppercase tracking-[0.08em] text-gold md:text-xs">{item.place}</p>
              <h3 className="mt-2 font-display text-base uppercase tracking-[0.04em] leading-[1.35] text-zinc-100 md:text-[1.1rem]">{item.title}</h3>
              <p className="got-copy mt-2 text-sm text-zinc-300 md:text-base">{item.details}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
