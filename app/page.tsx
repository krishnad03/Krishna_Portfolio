"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BraavosInitiation } from "@/components/initiation/BraavosInitiation";
import { AshField } from "@/components/ui/AshField";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DragonVideoBackground } from "@/components/ui/DragonVideoBackground";
import { EmberField } from "@/components/ui/EmberField";
import { HouseSigils } from "@/components/ui/HouseSigils";
import { MuteButton } from "@/components/ui/MuteButton";
import { SwordDivider } from "@/components/ui/SwordDivider";
import { TopNav } from "@/components/ui/TopNav";
import { useLocalStorageFlag } from "@/hooks/useLocalStorageFlag";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AboutSection } from "@/sections/AboutSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { JourneySection } from "@/sections/JourneySection";
import { LeadershipSection } from "@/sections/LeadershipSection";
import { MetricsSection } from "@/sections/MetricsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { TrainingSection } from "@/sections/TrainingSection";

export default function Page() {
  const [step, setStep] = useState(0);
  const [entered, setEntered] = useState(false);
  const [ignition, setIgnition] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [muted, setMuted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { value: roarPlayed, setValue: setRoarPlayed, ready } = useLocalStorageFlag("dragon-roar-played");

  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);
  const fireRef = useRef<HTMLAudioElement | null>(null);
  const roarRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    ambientRef.current = new Audio("/audio/ambient-medieval.mp3");
    ambientRef.current.loop = true;
    ambientRef.current.volume = 0.15;
    hoverRef.current = new Audio("/audio/sword-hover.mp3");
    hoverRef.current.volume = 0.12;
    fireRef.current = new Audio("/audio/fire-ignite.mp3");
    fireRef.current.volume = 0.22;
    roarRef.current = new Audio("/audio/dragon-roar.mp3");
    roarRef.current.volume = 0.2;

    return () => {
      ambientRef.current?.pause();
      hoverRef.current?.pause();
      fireRef.current?.pause();
      roarRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    const playHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("button, a")) return;
      if (!hoverRef.current || muted) return;
      hoverRef.current.currentTime = 0;
      void hoverRef.current.play().catch(() => undefined);
    };

    document.addEventListener("mouseover", playHover);
    return () => document.removeEventListener("mouseover", playHover);
  }, [muted]);

  useEffect(() => {
    const all = [ambientRef.current, hoverRef.current, fireRef.current, roarRef.current];
    all.forEach((audio) => {
      if (!audio) return;
      audio.muted = muted;
    });
  }, [muted]);

  const beginAudio = () => {
    if (!ambientRef.current || muted) return;
    void ambientRef.current.play().catch(() => undefined);
  };

  const nextInitiationStep = () => {
    beginAudio();
    if (step < 2) {
      setStep((s) => s + 1);
      return;
    }
    setIgnition(true);
    if (!muted) {
      void fireRef.current?.play().catch(() => undefined);
      if (ready && !roarPlayed) {
        void roarRef.current?.play().catch(() => undefined);
        setRoarPlayed(true);
      }
    }
    setTimeout(() => {
      setEntered(true);
      setIgnition(false);
    }, 1100);
  };

  const handleDragonTripleTap = useCallback(() => {
    setQuoteVisible(true);
    setTimeout(() => setQuoteVisible(false), 2200);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <DragonVideoBackground />
      {!reducedMotion ? <EmberField /> : null}
      {!reducedMotion ? <AshField /> : null}
      {!reducedMotion ? <CustomCursor onDragonTripleTap={handleDragonTripleTap} /> : null}
      <MuteButton muted={muted} onToggle={() => setMuted((m) => !m)} />

      {!entered ? <BraavosInitiation step={step} onNext={nextInitiationStep} /> : null}

      {ignition ? (
        <div className="pointer-events-none fixed inset-0 z-[145] bg-[radial-gradient(circle_at_center,rgba(255,92,34,0.45),transparent_50%),linear-gradient(180deg,rgba(255,92,34,0.35),transparent)] animate-firePulse" />
      ) : null}

      {quoteVisible ? (
        <div className="fixed bottom-6 left-1/2 z-[180] min-w-[320px] -translate-x-1/2 rounded border border-gold/50 bg-black/85 bg-[url('/assets/dragon-popup-bg.jpg')] bg-cover bg-center px-4 py-3 text-sm text-gold">
          <div className="rounded bg-black/60 p-2">Chaos isn&apos;t a pit. It&apos;s a data lake.</div>
        </div>
      ) : null}

      {entered ? (
        <>
          <TopNav />
          <HouseSigils />
          <div className="relative z-10">
            <HeroSection onThroneClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" })} />
            <SwordDivider />
            <AboutSection />
            <SwordDivider />
            <JourneySection />
            <SwordDivider />
            <SkillsSection />
            <SwordDivider />
            <ProjectsSection />
            <SwordDivider />
            <CertificationsSection />
            <SwordDivider />
            <LeadershipSection />
            <SwordDivider />
            <TrainingSection />
            <SwordDivider />
            <MetricsSection />
            <ContactSection />
          </div>
        </>
      ) : null}
    </main>
  );
}
