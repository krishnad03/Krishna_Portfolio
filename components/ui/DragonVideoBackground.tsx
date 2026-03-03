export function DragonVideoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="h-full w-full bg-cover bg-center opacity-[0.65]"
        style={{ backgroundImage: "url('/assets/dragon-popup-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.88),rgba(0,0,0,0.8),rgba(0,0,0,0.9))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,92,34,0.15),transparent_45%)]" />
    </div>
  );
}
