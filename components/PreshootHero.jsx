// components/EngagementHero.jsx
import Image from "next/image";

export default function PreshootHero() {
  return (
    <section className="relative bg-[#53513C] text-[#F2F1EC]">
      {/* Top Section */}
      <div className="text-center py-16 md:py-24">
        <h2 className="font-script text-4xl md:text-6xl">Our preshoot</h2>
        <p className="mt-4 font-display text-lg md:text-2xl tracking-widest">
          15 · 12 · 2025
        </p>
      </div>

      {/* Image placeholder */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src="/preshootCover.webp"
          alt="Preshoot couple"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Poem */}
      <div className="bg-[#53513C] text-[#F2F1EC] py-10 md:py-16">
        <p className="font-third italic text-center text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          In your arms, the world feels right,
          <br />
          where every shadow turns to light.
          <br />
          A love so soft, yet deeply true,
          <br />
          my heart begins and ends with you.
        </p>
      </div>
    </section>
  );
}
