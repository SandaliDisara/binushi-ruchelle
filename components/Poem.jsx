export default function Poem() {
  return (
    <section className="bg-[#f8f6f2] text-[#53513C] py-32 md:py-40">
      <div className="mx-auto max-w-screen-sm px-6 text-center">
        
        {/* Title Block (same structure as Wedding Schedule) */}
        <div className="relative text-center mb-16">
          {/* Big faint background title */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2 className="font-script text-[3rem] md:text-[6rem] leading-none text-[#53513C]/20 select-none">
              Words of Praise
            </h2>
          </div>

          {/* Foreground title */}
          <h3 className="relative font-display tracking-wide text-[1.25rem] md:text-[1.875rem] inline-block font-normal">
            LOVE AND BLESSING
          </h3>
        </div>
      </div>

      {/* Poem text */}
      <div className="mt-20 px-6 md:px-0 font-display text-base md:text-lg leading-7 select-none text-[#53513C] text-center mx-auto max-w-2xl font-normal">
        Love divine, all loves excelling,<br />
        Joy of heaven to earth come down,<br />
        Fix in us Thy humble dwelling,<br />
        All Thy faithful mercies crown.<br />
        Jesus, Thou art all compassion,<br />
        Pure, unbounded love Thou art;<br />
        Visit us with Thy salvation,<br />
        Enter every trembling heart.
      </div>
    </section>
  );
}
