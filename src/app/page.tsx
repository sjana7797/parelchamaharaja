"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useSWR from "swr";
import Script from "next/script";
import {
  Calendar,
  Clock,
  HandHeart,
  Music4,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import UpiQR from "@/features/donation/components/upi-qr";
import dynamic from "next/dynamic";
import { MarqueeGallery } from "@/components/gallery/marquee-gallery";
import Hero from "@/components/hero";
import AboutUs from "@/features/home/components/about-us";
import Events from "@/features/home/components/events";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function SocialFeed() {
  const { data } = useSWR("/api/social", fetcher, { refreshInterval: 30000 });
  return (
    <section id="live" className="bg-amber-50 py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="heading-font text-pretty text-3xl md:text-4xl festive-maroon">
          Live Celebrations
        </h2>
        <p className="mt-2">Instagram reels/photos and live stream.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* YouTube/Facebook Live placeholder */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                title="Live Aarti Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                title="Live Aarti Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Instagram embed placeholder (replace with official post embed URL) */}
          <div className="aspect-[9/16] w-full overflow-hidden rounded-lg border">
            <iframe
              className="h-full w-full"
              src="https://www.instagram.com/p/DNfr2KsodS4/embed"
              title="Instagram Live Post"
            />
          </div>
        </div>

        {/* Auto-updating grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(data?.posts ?? []).map((p: any) => (
            <a
              key={p.id}
              href={p.permalink}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-md border"
              aria-label={p.caption}
            >
              <img
                src={p.image || "/placeholder.svg"}
                alt={p.alt}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-1 right-1 rounded bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white">
                {p.type}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="donate" className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="heading-font text-pretty text-3xl md:text-4xl festive-maroon">
        Make a Donation
      </h2>
      <p className="mt-2 max-w-3xl leading-relaxed">
        Your contribution helps us run cultural programs, seva drives and
        facilities for devotees. Donate securely via UPI.
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
        <UpiQR
          upiId="ganeshutsav@upi"
          payeeName="Parel Cha Maharaja"
          defaultAmount={501}
          note="Ganesh Utsav Donation"
        />
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>
            • Funds support public amenities, safety and cleanliness around the
            pandal.
          </li>
          <li>
            • Add your email in the UPI note to receive a digital
            acknowledgement.
          </li>
          <li>
            • For large donations and receipts, visit the Mandal help desk at
            the venue.
          </li>
        </ul>
      </div>
    </section>
  );
}

function Event() {
  const cards = [
    {
      icon: <Clock className="h-5 w-5 text-yellow-600" />,
      title: "Aarti Timings",
      text: "Kakad Aarti 6:00 AM • Madhyan Aarti 12:00 PM • Sandhya Aarti 7:30 PM • Shej Aarti 11:30 PM",
    },
    {
      icon: <Music4 className="h-5 w-5 text-yellow-600" />,
      title: "Cultural Programs",
      text: "Bhajan Sandhya, Dhol-Tasha, Children’s performances and classical showcases every evening.",
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-yellow-600" />,
      title: "Social Initiatives",
      text: "Blood donation, medical camps, food distribution and environmental drives throughout the festival.",
    },
  ];

  // Structured Data (JSON-LD) for events
  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "Parel Cha Maharaja Ganesh Utsav 2025",
    eventSchedule: {
      "@type": "Schedule",
      startDate: "2025-08-26",
      endDate: "2025-09-05",
      repeatFrequency: "P1D",
    },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Parel Cha Maharaja Mandal",
      address: "Parel, Mumbai, Maharashtra, India",
    },
  };

  return (
    <section id="events" className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="heading-font text-pretty text-3xl md:text-4xl festive-maroon">
        Events & Highlights
      </h2>
      <p className="mt-2">
        Plan your visit around aartis, cultural programs, and seva.
      </p>
      <Script
        id="events-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center gap-2">
              {c.icon}
              <CardTitle className="text-lg">{c.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">{c.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parel-cha-maharaja-this-year-v0-nqmur317dilf1.jpg-3FwKVBzaPizY8PAKLf5aVDJ5owB9v2.jpeg",
      alt: "Parel Cha Maharaja — Lord Ganesha",
    },
    { src: "/devotees-during-aarti.png", alt: "Devotees during aarti" },
    {
      src: "/evening-lighting-at-pandal.png",
      alt: "Evening lighting at the pandal",
    },
    { src: "/eco-visarjan.png", alt: "Eco-friendly visarjan" },
    { src: "/cultural-program.png", alt: "Cultural program" },
  ];

  return (
    <section id="gallery" className="bg-white py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="heading-font text-pretty text-3xl md:text-4xl festive-maroon">
          Gallery
        </h2>
        <p className="mt-2 text-muted-foreground">
          Hover to pause. Tap and hold on mobile to pause.
        </p>
        <div className="mt-6">
          <MarqueeGallery images={images} />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "Felt Bappa’s blessings the moment I stepped in.",
      a: "Devotee from Dadar",
    },
    { q: "Most organized darshan and soulful aartis.", a: "Visitor from Pune" },
    { q: "Community service here truly inspires.", a: "Local Resident" },
  ];
  return (
    <section id="testimonials" className="bg-amber-50 py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="heading-font text-pretty text-3xl md:text-4xl festive-maroon">
          Devotee Testimonials
        </h2>
        <div className="mt-6 flex snap-x items-stretch gap-4 overflow-x-auto pb-4">
          {quotes.map((t) => (
            <Card key={t.q} className="min-w-[260px] snap-start">
              <CardContent className="p-6">
                <p className="italic">“{t.q}”</p>
                <p className="mt-3 text-sm text-muted-foreground">— {t.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section id="visit" className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="heading-font text-pretty text-3xl md:text-4xl festive-maroon">
        Visit Us
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="aspect-video w-full overflow-hidden rounded-lg border">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps?q=Parel,+Mumbai&output=embed"
            title="Map to Parel Cha Maharaja Mandal"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-amber-700" />
            <p>Festival Dates: Aug 26 – Sep 5, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-700" />
            <p>Location: Parel, Mumbai, Maharashtra, India</p>
          </div>
          <div className="flex items-center gap-2">
            <HandHeart className="h-5 w-5 text-amber-700" />
            <p>Directions: Nearest stations – Parel, Currey Road, Dadar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="body-font border-t bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="heading-font text-xl festive-maroon">
            Parel Cha Maharaja
          </p>
          <nav className="flex items-center gap-4">
            <a className="text-sm hover:underline" href="/about">
              About
            </a>
            <a className="text-sm hover:underline" href="/events">
              Events
            </a>
            <a className="text-sm hover:underline" href="/gallery">
              Gallery
            </a>
            <a className="text-sm hover:underline" href="/donate">
              Donate
            </a>
          </nav>
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          SEO: Ganesh Utsav Mumbai, Parel Cha Maharaja, Parel Cha Raja Mandal,
          Mumbai Ganpati 2025, live darshan, aarti timings, cultural programs,
          charity, blood donation, eco-friendly visarjan.
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="body-font">
      <Hero />
      <AboutUs />
      <SocialFeed />
      <Donate />
      <Events />
      <Gallery />
      <Testimonials />
      <VisitUs />
      <Footer />
    </main>
  );
}
