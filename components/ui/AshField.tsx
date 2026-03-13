export function AshField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[4] overflow-hidden">
      {Array.from({ length: 95 }).map((_, i) => (
        <span
          key={i}
          className="absolute animate-ashFall rounded-full bg-zinc-200/70"
          style={{
            left: `${(i * 7.5) % 100}%`,
            top: `${-8 - (i % 10) * 11}%`,
            width: `${1 + (i % 3)}px`,
            height: `${4 + (i % 5)}px`,
            opacity: 0.22 + (i % 4) * 0.1,
            filter: `blur(${(i % 2) * 0.4}px)`,
            animationDuration: `${9 + (i % 8)}s`,
            animationDelay: `${(i % 13) * 0.55}s`
          }}
        />
      ))}
    </div>
  );
}
