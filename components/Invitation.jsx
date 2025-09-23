// components/Invitation.jsx
export default function Invitation() {
  return (
    <section className="bg-[#4b4b3a] text-[#F2F1EC] py-32 md:py-40">
      <div className="mx-auto max-w-screen-sm px-6 flex flex-col items-center text-center">
        {/* SVG */}
        <img
          src="/hands.svg"
          alt=""
          className="w-24 md:w-28 h-auto mb-8 opacity-90"
        />

        <p className="font-third text-base md:text-lg leading-relaxed [text-wrap:balance] max-w-xl">
          <span className="block md:hidden">
            Surrounded by those we cherish<br />
            most, we&apos;ll begin our forever.<br />
            We can&apos;t wait to celebrate<br />
            this magical chapter with you.
          </span>
          <span className="hidden md:block">
            Surrounded by those we cherish most, we&apos;ll begin our forever.<br />
            We can&apos;t wait to celebrate this magical chapter with you.
          </span>
        </p>

        <div className="mt-10 md:mt-12 font-display text-3xl md:text-5xl tracking-[0.2em]">
          <span className="sr-only">Date:</span>
          <span>04</span>
          <span className="mx-2">.</span>
          <span>12</span>
          <span className="mx-2">.</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
}
