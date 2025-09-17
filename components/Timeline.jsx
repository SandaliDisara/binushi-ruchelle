// components/Timeline.jsx
import Image from "next/image";

export default function Timeline() {
  return (
    <section className="bg-[#f8f6f2] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="relative text-center mb-16">
          <h2 className="font-display text-[3rem] md:text-[5rem] text-black/5 absolute inset-0 flex items-center justify-center select-none">
            Wedding Schedule
          </h2>
          <h3 className="relative font-display text-2xl md:text-3xl tracking-wide">
            WEDDING DAY TIMELINE
          </h3>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left image + Right schedule */}
          <div className="flex flex-col gap-8">
            <div className="relative">
              <Image
                src="/timelineLeft.webp"
                alt="Couple photo"
                width={600}
                height={800}
                className="object-cover w-full"
              />
              <p className="absolute top-4 left-4 font-script text-white text-sm md:text-base">
                A gentle kind of forever
              </p>
            </div>

            <div className="space-y-6">
              <TimelineItem time="4 pm" text="Guest Arrival at Church" />
              <TimelineItem time="5 pm" text="Wedding Ceremony" />
              <TimelineItem time="5:30 pm" text="Group Photo" />
              <TimelineItem time="6 pm" text="Travel to Reception Venue" />
            </div>
          </div>

          {/* Right schedule + Left image */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <TimelineItem time="6 pm" text="Cocktail Hour" />
              <TimelineItem time="6:30 pm" text="Reception Opens" />
              <TimelineItem time="5:45 pm" text="Bride & Groom Entrance" />
              <TimelineItem time="7 pm" text="Dinner is Served" />
              <TimelineItem time="8 pm" text="First Dance & Speeches" />
              <TimelineItem time="11:45 pm" text="Farewell & Send-Off" />
            </div>

            <div className="relative">
              <Image
                src="/timelineRight.webp"
                alt="Couple photo"
                width={600}
                height={800}
                className="object-cover w-full"
              />
              <p className="absolute top-4 left-4 font-script text-white text-sm md:text-base">
                Where love lives, joy follows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sub-component for timeline entries */
function TimelineItem({ time, text }) {
  return (
    <div className="flex items-start gap-4 border-b border-black/10 pb-3">
      <span className="font-display text-sm md:text-base font-semibold w-20 shrink-0">
        {time}
      </span>
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
}
