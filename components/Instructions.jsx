export default function Instructions() {
  return (
    <section className="bg-[#53513C] text-[#F2F1EC] py-24 md:py-32">
      <div className="mx-auto px-6 max-w-5xl flex flex-col lg:flex-row items-center text-center lg:gap-24">
        {/* Location */}
        <div className="flex-1">
          <p className="font-script text-[2rem] md:text-[3rem] leading-none text-[#FAF7EE]/40">
            Location
          </p>
          <h3 className="mt-0.1 font-display text-lg md:text-[1.875rem] tracking-wide">
            SHANGRILLA BALLROOM
          </h3>
        </div>

        {/* Divider: horizontal on mobile, vertical on large */}
        <hr className="my-12 w-40 border-t border-[#FAF7EE]/40 lg:my-0 lg:w-px lg:h-32 lg:border-t-0 lg:border-l" />

        {/* Dress Code */}
        <div className="flex-1">
          <p className="font-script text-[2rem] md:text-[3rem] leading-none text-[#FAF7EE]/40">
            Dress Code
          </p>
          <h3 className="mt-0.1 font-display text-lg md:text-[1.875rem] tracking-wide">
            FORMAL ELEGANCE
          </h3>
        </div>
      </div>
    </section>
  );
}
