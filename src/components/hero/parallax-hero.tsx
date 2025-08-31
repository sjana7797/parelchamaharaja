"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Lazy-load 3D to keep TTI fast
const GaneshThreeScene = dynamic(
  () => import("../three/ganesh-three-scene").then((m) => m.GaneshThreeScene),
  {
    ssr: false,
    loading: () => null,
  }
);

type ParallaxHeroProps = {
  title: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc?: string;
};

export function ParallaxHero({
  title,
  subtitle,
  ctaPrimary = { label: "Donate", href: "/donate" },
  ctaSecondary = { label: "Events", href: "/events" },
  imageSrc = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parel-cha-maharaja-this-year-v0-nqmur317dilf1.jpg-3FwKVBzaPizY8PAKLf5aVDJ5owB9v2.jpeg",
}: ParallaxHeroProps) {
  const { scrollY } = useScroll();
  // Parallax transforms
  const yTitle = useTransform(scrollY, [0, 400], [0, -60]);
  const yArt = useTransform(scrollY, [0, 400], [0, 40]);
  const opacityOverlay = useTransform(scrollY, [0, 300], [0.15, 0.35]);

  // Reduced motion: freeze parallax
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <section className="relative isolate overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          {/* Pass the Source URL to the 3D scene so it always uses the user's Ganesha image */}
          <GaneshThreeScene imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parel-cha-maharaja-this-year-v0-nqmur317dilf1.jpg-3FwKVBzaPizY8PAKLf5aVDJ5owB9v2.jpeg" />
        </Suspense>
      </div>

      {/* Decorative image layer with slight parallax */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: yArt }}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-8 -z-10 w-[min(840px,85vw)] opacity-70"
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt=""
          width={1600}
          height={900}
          priority
          className="select-none rounded-2xl shadow-2xl ring-1 ring-black/10"
        />
      </motion.div>

      {/* Color wash for brand feel (saffron x deep blue) */}
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: opacityOverlay }}
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-blue-900/40"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 md:py-32">
        <motion.h1
          style={prefersReducedMotion ? undefined : { y: yTitle }}
          className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-6xl"
        >
          {title}
        </motion.h1>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
          {subtitle}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <Button
            asChild
            className="bg-orange-600 text-white hover:bg-orange-700"
          >
            <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-orange-600 text-orange-700 hover:bg-orange-50 bg-transparent"
          >
            <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
          </Button>
        </div>

        {/* Stats mini-row with subtle float */}
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Days of Celebration", "10"],
            ["Aartis Daily", "5"],
            ["Volunteers", "250+"],
            ["Devotees", "100K+"],
          ].map(([label, val]) => (
            <motion.div
              key={label}
              whileInView={{ y: [10, 0], opacity: [0, 1] }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl border border-orange-600/20 bg-background/70 px-4 py-3 shadow-sm backdrop-blur"
            >
              <div className="text-xs uppercase tracking-wide text-foreground/60">
                {label}
              </div>
              <div className="text-lg font-semibold text-foreground">{val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
