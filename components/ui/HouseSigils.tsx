import Image from "next/image";

const sigils = [
  { src: "/assets/sigils/stark.png", alt: "House Stark Sigil" },
  { src: "/assets/sigils/lannister.png", alt: "House Lannister Sigil" },
  { src: "/assets/sigils/baratheon.png", alt: "House Baratheon Sigil" },
  { src: "/assets/sigils/greyjoy.png", alt: "House Greyjoy Sigil" },
  { src: "/assets/sigils/tully.png", alt: "House Tully Sigil" },
  { src: "/assets/sigils/bolton.png", alt: "House Bolton Sigil" },
  { src: "/assets/sigils/arryn.png", alt: "House Arryn Sigil" },
  { src: "/assets/sigils/martell.png", alt: "House Martell Sigil" }
];

export function HouseSigils() {
  return (
    <div className="pointer-events-none fixed inset-y-24 left-0 right-0 z-[4] hidden justify-between px-2 lg:flex">
      <div className="flex flex-col gap-4">
        {sigils.slice(0, 4).map((item) => (
          <div key={item.src} className="relative h-16 w-16 opacity-45">
            <Image src={item.src} alt={item.alt} fill sizes="64px" className="object-contain drop-shadow-[0_0_18px_rgba(255,92,34,0.25)]" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {sigils.slice(4).map((item) => (
          <div key={item.src} className="relative h-16 w-16 opacity-45">
            <Image src={item.src} alt={item.alt} fill sizes="64px" className="object-contain drop-shadow-[0_0_18px_rgba(255,92,34,0.25)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
