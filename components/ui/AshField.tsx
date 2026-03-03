export function AshField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {Array.from({ length: 55 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] animate-ashFall rounded-full bg-zinc-300/50"
          style={{
            left: `${(i * 9) % 100}%`,
            top: `${-5 - (i % 8) * 10}%`,
            animationDuration: `${10 + (i % 9)}s`,
            animationDelay: `${(i % 11) * 0.6}s`
          }}
        />
      ))}
    </div>
  );
}
