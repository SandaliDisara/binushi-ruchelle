// components/EventImages.jsx
import Image from "next/image";

const items = [
  { src: "/preshootCover.webp", title: "Pre Shoot", alt: "Pre-shoot photo" },
  { src: "/engageCover.webp", title: "Engagement", alt: "Engagement photo" },
];

export default function EventImages() {
  return (
    <section className="bg-[#f8f6f2]">
      <div className="flex flex-col">
        {items.map(({ src, title, alt }) => (
          <figure
            key={title}
            className="relative w-full aspect-[4/3] md:aspect-[16/9]"
          >
            {/* Image */}
            <Image
              src={src}
              alt={alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* slight gradient for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />

            {/* Centered title */}
            <figcaption className="absolute inset-0 flex items-center justify-center">
              <span className="font-script text-white drop-shadow text-5xl md:text-7xl lg:text-8xl tracking-wide">
                {title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
