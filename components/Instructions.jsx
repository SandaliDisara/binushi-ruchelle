export default function Instructions() {
    return (
        <section className="bg-[#4b4b3a] text-[#F2F1EC] py-16 md:py-24">
            <div className="mx-auto max-w-screen-sm px-6 flex flex-col items-center text-center">
                <div className="relative mt-10 md:mt-12 font-display text-lg md:text-5xl tracking-[0.2em]">
                    SHANGRILLA BALLROOM
                    <span className="absolute left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/2 font-script text-6xl md:text-xl leading-relaxed [text-wrap:balance] pointer-events-none text-[#FAF7EE]/[0.17]">
                        Location
                    </span>
                </div>


                <hr className="my-20 border-t border-[#FAF7EE]/[0.42] w-80"/>

                <div className="relative mt-10 md:mt-12 font-display text-lg md:text-5xl tracking-[0.2em]">
                    FORMAL ELEGANCE
                    <span className="absolute left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/2 font-script text-6xl md:text-xl leading-relaxed [text-wrap:nowrap] pointer-events-none text-[#FAF7EE]/[0.17]">
                        Dress Code
                    </span>
                </div>

            </div>
        </section>
    );
}
