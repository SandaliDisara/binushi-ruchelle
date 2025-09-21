export default function Poem() {
    return (
        <section className="bg-[#f8f6f2] text-[#53513C] py-16 md:py-24">
            <div className="mx-10 max-w-screen-sm px-6 flex flex-col items-center text-center">
                <div className="relative mt-10 md:mt-12 font-display text-lg md:text-5xl font-bold">
                    LOVE AND BLESSING
                    <span className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 font-script text-6xl md:text-xl leading-relaxed [text-wrap:nowrap] pointer-events-none text-[#53513C]/[0.21] font-light">
                        Words of Praise
                    </span>
                </div>
            </div>
            <div className="mt-20 px-26 md:px-0 font-display text-sm md:text-[6rem] [text-wrap:balance] leading-5 select-none text-[#53513C] text-center mx-auto max-w-2xl">
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
