export default function Poem() {
  return (
    <section className="bg-[#f8f6f2] text-[#53513C] py-20 md:py-40">
      <div className="mx-auto max-w-screen-sm px-6 text-center mb-16">
        {/* Script title (top) */}
        <p className="font-script text-[1.5rem] md:text-[6rem] leading-none text-[#53513C]/20 select-none">
          Words of Praise
        </p>

        {/* Main title (bottom) */}
        <h3 className="mt-0.1 font-display tracking-wide text-[1.25rem] md:text-[1.875rem] inline-block font-normal text-[#53513C]">
          LOVE AND BLESSING
        </h3>
      </div>

      {/* Poem text */}
      <div className="mt-20 px-6 md:px-0 font-display text-base md:text-lg leading-7 select-none text-[#53513C] text-center mx-auto max-w-2xl font-normal">
        Love divine, all loves excelling,
        <br />
        Joy of heaven to earth come down,
        <br />
        Fix in us Thy humble dwelling,
        <br />
        All Thy faithful mercies crown.
        <br />
        Jesus, Thou art all compassion,
        <br />
        Pure, unbounded love Thou art;
        <br />
        Visit us with Thy salvation,
        <br />
        Enter every trembling heart.
      </div>
    </section>
  );
}
