export default function Instructions() {
  return (
    <section className="bg-[#53513C] text-[#F2F1EC] py-24 md:py-32">
      <div className="mx-auto px-6 flex flex-col lg:flex-row items-center text-center lg:gap-24 max-w-5xl">
        
        {/* Location */}
        <div className="relative mt-10 md:mt-12 font-display text-lg md:text-[1.875rem] font-normal tracking-wide whitespace-nowrap flex-1">
          SHANGRILLA BALLROOM
          <span className="absolute left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/2 font-script text-[3rem] md:text-[6rem] leading-none pointer-events-none text-[#FAF7EE]/20 font-light">
            Location
          </span>
        </div>

        {/* Divider: horizontal on mobile, vertical on large */}
        <hr className="my-12 border-t border-[#FAF7EE]/40 w-40 
                      lg:my-0 lg:w-px lg:h-32 lg:border-t-0 lg:border-l" />

        {/* Dress Code */}
        <div className="relative mt-10 md:mt-12 font-display text-lg md:text-[1.875rem] font-normal tracking-wide whitespace-nowrap flex-1">
          FORMAL ELEGANCE
          <span className="absolute left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/2 font-script text-[3rem] md:text-[6rem] leading-none pointer-events-none text-[#FAF7EE]/20 font-light">
            Dress Code
          </span>
        </div>

      </div>
    </section>
  );
}
