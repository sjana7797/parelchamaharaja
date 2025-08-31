"use client";

import { useState, useEffect } from "react";
import ScrollExpandMedia from "@/components/scroll-expansion-hero";
import Image from "next/image";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: "/videos/hero.mp4",
    poster:
      "https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg",
    background: "/images/ganesha-hero.jpg",
    title: "Parel Cha Maharaja",
    date: "Ganesh Utsav Mandal",
    scrollToExpand:
      "Experience the divine celebrations of Mumbai’s beloved Bappa.",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.",
      conclusion:
        "The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
    title: "Dynamic Image Showcase",
    date: "Underwater Adventure",
    scrollToExpand: "Scroll to Expand Demo",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.",
      conclusion:
        "The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.",
    },
  },
};

const MediaContent = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white text-center">
        Parel Cha Maharaja
      </h2>
      <p className="text-lg mb-8 text-black dark:text-white text-center">
        Join the celebrations of Mumbai’s beloved Ganpati. Experience devotion,
        culture, and tradition at Parel Cha Raja.
      </p>

      <div className="p-2 bg-red-400/20 rounded-lg">
        <Image
          src="/images/ganesha-hero.jpg"
          alt="Ganesha"
          width={3352}
          height={2267}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

const Hero = () => {
  const [mediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType as "video" | "image"}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export default Hero;
