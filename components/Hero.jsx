// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full">
      {/* Background image */}
      <Image
        src="/heroImage.webp"
        alt="Binushi and Ruchelle"
        fill
        priority
        sizes="100vw"
        className="object-cover grayscale"
      />

      {/* Readability gradient (heavier at bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-8 md:bottom-12 flex flex-col items-center">
  <h1 className="font-display text-white text-7xl md:text-9xl leading-tight tracking-wide text-center drop-shadow">
    BINUSHI
    <span className="block text-2xl md:text-4xl font-normal">&amp;</span>
    <span className="block">RUCHELLE</span>
  </h1>

  <p className="font-script italic text-white/90 text-xl md:text-3xl text-center px-6 drop-shadow">
  Forever begins with this magical moment
</p>
</div>


    </section>
  );
}
