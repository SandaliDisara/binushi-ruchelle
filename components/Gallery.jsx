// components/Gallery.jsx
import Image from "next/image";

export default function Gallery({ images = [] }) {
  return (
    <section className="bg-[#f8f6f2]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {images.map(({ src, alt }, i) => (
          <div key={i} className="relative w-full aspect-[3/4]">
            <Image
              src={src}
              alt={alt || ""}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              className="object-cover"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
