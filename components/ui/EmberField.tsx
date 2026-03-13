export function EmberField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[3] overflow-hidden">
      {Array.from({ length: 48 }).map((_, i) => (
        <span
          key={i}
          className="absolute animate-emberFloat rounded-full bg-ember/80 shadow-[0_0_12px_rgba(255,92,34,0.45)]"
          style={{
            left: `${(i * 11) % 100}%`,
            bottom: `${-10 - (i % 7) * 16}px`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            opacity: 0.4 + (i % 4) * 0.12,
            animationDuration: `${6 + (i % 7)}s`,
            animationDelay: `${(i % 11) * 0.65}s`
          }}
        />
      ))}
    </div>
  );
}
