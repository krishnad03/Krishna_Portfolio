"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { metrics } from "@/utils/content";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1200;
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const next = target * progress;
          setValue(target % 1 === 0 ? Math.floor(next) : Number(next.toFixed(2)));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-3xl text-gold md:text-4xl">
      {value}
      {suffix}
    </div>
  );
}

export function MetricsSection() {
  return (
    <Section id="metrics" title="The Realm in Numbers" subtitle="Measured outcomes from the kingdom's campaigns.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((item) => (
          <article key={item.label} className="rounded-lg border border-zinc-700 bg-black/25 p-4">
            <Counter target={item.value} suffix={item.suffix} />
            <p className="mt-2 text-sm text-zinc-300">{item.label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
