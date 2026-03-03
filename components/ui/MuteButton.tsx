"use client";

type Props = {
  muted: boolean;
  onToggle: () => void;
};

export function MuteButton({ muted, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed right-4 top-20 z-[150] rounded-full border border-zinc-600 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-100 transition hover:border-gold hover:text-gold"
      aria-label={muted ? "Unmute audio" : "Mute audio"}
    >
      {muted ? "Unmute" : "Mute"}
    </button>
  );
}
