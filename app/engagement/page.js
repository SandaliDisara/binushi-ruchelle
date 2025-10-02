import EngagementHero from "@/components/EngagementHero";
import Gallery from "@/components/Gallery";

const engagementImages = [
  { src: "/engagement/eng1.webp", alt: "Engagement 01" },
  { src: "/engagement/eng2.webp", alt: "Engagement 02" },
  { src: "/engagement/eng3.webp", alt: "Engagement 03" },
  { src: "/engagement/eng4.webp", alt: "Engagement 04" },
  { src: "/engagement/eng5.webp", alt: "Engagement 05" },
  { src: "/engagement/eng6.webp", alt: "Engagement 06" },
  { src: "/engagement/eng7.webp", alt: "Engagement 07" },
  { src: "/engagement/eng8.webp", alt: "Engagement 08" },
  { src: "/engagement/eng9.webp", alt: "Engagement 09" },
  { src: "/engagement/eng10.webp", alt: "Engagement 10" },
  { src: "/engagement/eng11.webp", alt: "Engagement 11" },
  { src: "/engagement/eng13.webp", alt: "Engagement 13" },
];

export default function EngagementPage() {
  return (
    <main>
      <EngagementHero />
      <Gallery images={engagementImages} />
    </main>
  );
}
