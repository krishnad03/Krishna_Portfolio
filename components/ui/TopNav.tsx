"use client";

import Image from "next/image";

const navItems = [
  { label: "Throne", href: "#hero" },
  { label: "Battles", href: "#projects" },
  { label: "Maester's Scrolls", href: "#certifications" },
  { label: "Houses of Skill", href: "#skills" },
  { label: "Council", href: "#leadership" },
  { label: "Faceless Architect", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Dragon's Training", href: "#training" },
  { label: "Send a Raven", href: "#contact", icon: true }
];

export function TopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[130] border-b border-zinc-700/60 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-3 py-3 md:px-7">
        <a href="#hero" className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gold/60">
          <div className="absolute inset-0">
            <Image src="/assets/targaryen-logo.png" alt="Targaryen Sigil" fill sizes="40px" className="object-cover" />
          </div>
        </a>

        <nav className="flex flex-1 items-center justify-evenly gap-2 overflow-hidden text-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1 whitespace-nowrap text-[10px] uppercase tracking-[0.1em] text-zinc-200 transition hover:text-gold md:text-[11px]"
            >
              {item.icon ? (
                <Image
                  src="/assets/sigils/hand-of-king.png"
                  alt="Hand of the King Pin"
                  width={14}
                  height={14}
                  className="opacity-90"
                />
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
