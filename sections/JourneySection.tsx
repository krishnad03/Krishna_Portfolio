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
      <div className="relative space-y-4 pl-8 md:pl-10">
        <div className="absolute bottom-2 left-3.5 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-gold/80 via-ember/70 to-zinc-600" />
        {journey.map((item) => (
          <article key={item.title} className="relative rounded-lg border border-zinc-700 bg-black/35 p-5">
            <span className="absolute -left-[22px] top-6 h-3 w-3 rounded-full bg-ember shadow-ember" />
            <p className="font-display text-xs uppercase tracking-[0.14em] text-gold">{item.place}</p>
            <h3 className="mt-2 font-display text-lg uppercase tracking-[0.08em] text-zinc-100">{item.title}</h3>
            <p className="mt-2 text-zinc-300">{item.details}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
