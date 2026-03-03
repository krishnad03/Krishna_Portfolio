# Asset Strategy

## Images

- Use lightweight `.webp` stills for background mood frames.
- Keep individual assets under 300 KB when possible.
- Prefer layered CSS gradients and SVG overlays for atmosphere over videos.

## SVGs

- Sword divider and architecture diagrams should be SVG for sharpness and low weight.
- Keep paths simple and reuse gradients via `<defs>`.

## Audio

- Ambient loop target: 90-150 seconds compressed MP3.
- Hover and interaction sounds target: <50 KB each.
- Normalize levels to avoid sharp volume jumps.

## Performance Rules

- Lazy load non-critical images.
- Do not autoplay large media before user interaction.
- Use one dragon roar event per first visit (stored in `localStorage`).
