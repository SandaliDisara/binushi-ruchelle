// components/EngagementHero.jsx
import Image from "next/image";

export default function EngagementHero() {
  return (
    <section className="relative bg-[#53513C] text-[#F2F1EC]">
      {/* Top Section */}
      <div className="text-center py-16 md:py-24">
        <h2 className="font-script text-4xl md:text-6xl">Our Engagement</h2>
        <p className="mt-4 font-display text-lg md:text-2xl tracking-widest">
          20 · 12 · 2024
        </p>
      </div>

      {/* Image placeholder */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src="/engageCover.webp" // you can replace with your engagement hero image
          alt="Engagement couple"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Poem */}
      <div className="bg-[#53513C] text-[#F2F1EC] py-10 md:py-16">
        <p className="font-third italic text-center text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          In your eyes I found my home,
          <br />
          in your smile I found my peace.
          <br />
          With every heartbeat, love has grown,
          <br />a promise that will never cease.
        </p>
      </div>
    </section>
  );
}
