export function EmberField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 animate-emberFloat rounded-full bg-ember/70"
          style={{
            left: `${(i * 13) % 100}%`,
            bottom: `${-4 - (i % 6) * 12}px`,
            animationDuration: `${7 + (i % 8)}s`,
            animationDelay: `${(i % 9) * 0.7}s`
          }}
        />
      ))}
    </div>
  );
}
