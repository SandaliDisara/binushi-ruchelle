// components/TimelineTitle.jsx
import Image from "next/image";

export default function TimelineTitle() {
  return (
    <section className="relative bg-[#f8f6f2] dark:bg-[#f8f6f2] text-[#2c2c2c]">
      <div className="max-w-5xl mx-auto px-6 py-32 md:py-40 relative">
        {/* Title Block */}
        <div className="relative text-center mb-16">
          {/* Big faint background title */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2 className="font-script text-[3rem] md:text-[6rem] leading-none text-black/10 select-none">
              Wedding Schedule
            </h2>
          </div>

          {/* Foreground title */}
          <h3 className="relative font-display tracking-wide text-[1.25rem] md:text-[1.875rem] inline-block">
            WEDDING DAY TIMELINE
          </h3>
        </div>

        {/* --- Block 1: Image Left / Schedule Right --- */}
        <div className="grid grid-cols-[1fr_1.2fr] gap-6 md:gap-12 items-stretch mb-16">
          {/* LEFT: Photo */}
          <div className="relative h-full overflow-hidden"> {/* added overflow-hidden */}
          <Image
            src="/timelineLeft.webp"
            alt="Couple photo"
            fill
            priority
            className="object-cover object-[100%_center]" />
          <p className="absolute top-4 left-4 font-third text-white/95 text-sm md:text-base drop-shadow">
          A gentle kind<br />of forever</p>
          </div>

          {/* RIGHT: Schedule */}
          <div className="space-y-6 md:space-y-7 bg-[#f8f6f2] h-full">
            <TimelineItem time="4 pm" text="Guest Arrival at Church" />
            <Separator />
            <TimelineItem time="5 pm" text="Wedding Ceremony" />
            <Separator />
            <TimelineItem time="5:30 pm" text="Group Photo" />
            <Separator />
            <TimelineItem time="6 pm" text="Travel to Reception Venue" />
          </div>
        </div>

        {/* --- Block 2: Schedule Left / Image Right --- */}
        <div className="grid grid-cols-[1.2fr_1fr] gap-6 md:gap-12 items-stretch">
          {/* LEFT: Schedule */}
          <div className="space-y-6 md:space-y-7 bg-[#f8f6f2] h-full">
            <TimelineItem time="6 pm" text="Cocktail Hour" />
            <Separator />
            <TimelineItem time="6:30 pm" text="Reception Opens" />
            <Separator />
            <TimelineItem time="7 pm" text="Bride & Groom Entrance" />
            <Separator />
            <TimelineItem time="7:30 pm" text="Dinner is Served" />
            <Separator />
            <TimelineItem time="8 pm" text="First Dance & Speeches" />
            <Separator />
            <TimelineItem time="11:45 pm" text="Farewell & Send-Off" />
          </div>

          {/* RIGHT: Photo */}
<div className="relative h-full overflow-hidden">
  <Image
    src="/timelineRight.webp"
    alt="Reception photo"
    fill
    priority
    // shift focal point more to the right
    className="object-cover object-[10%_center] md:object-[75%_center]"
  />
  <p className="absolute top-4 left-4 font-third text-white/95 text-sm md:text-base drop-shadow">
    Where love lives,<br />joy follows
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

/* One timeline row */
function TimelineItem({ time, text }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <span className="font-display text-base md:text-lg">{time}</span>
      <p className="font-display text-base md:text-lg leading-7">{text}</p>
    </div>
  );
}

/* Divider line */
function Separator() {
  return <div className="h-px bg-[#2c2c2c]/15" />;
}
