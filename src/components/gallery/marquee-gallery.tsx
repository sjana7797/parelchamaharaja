type Img = { src: string; alt: string };

export function MarqueeGallery({
  images,
  speed = 30,
}: {
  images: Img[];
  speed?: number;
}) {
  // Duplicate the list to create a seamless loop
  const track = [...images, ...images];

  return (
    <div className="group" aria-label="Scrolling photo gallery">
      {/* Row 1 */}
      <div className="overflow-hidden">
        <div
          className="marquee flex items-center gap-4 whitespace-nowrap"
          style={{ animationDuration: `${speed}s` }}
        >
          {track.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`r1-${i}-${img.src}`}
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="h-40 w-auto rounded-lg border object-cover"
              height={160}
              width={240}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Row 2 (reverse) */}
      <div className="mt-4 overflow-hidden">
        <div
          className="marquee-reverse flex items-center gap-4 whitespace-nowrap"
          style={{ animationDuration: `${speed + 8}s` }}
        >
          {track.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`r2-${i}-${img.src}`}
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="h-40 w-auto rounded-lg border object-cover"
              height={160}
              width={240}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeGallery;
