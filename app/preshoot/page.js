import PreshootHero from "@/components/PreshootHero";
import Gallery from "@/components/Gallery";

const preshootImages = [
  { src: "/preshoot/pre1.webp", alt: "Preshoot 01" },
  { src: "/preshoot/pre2.webp", alt: "Preshoot 02" },
  { src: "/preshoot/pre3.webp", alt: "Preshoot 03" },
  { src: "/preshoot/pre4.webp", alt: "Preshoot 04" },
  { src: "/preshoot/pre5.webp", alt: "Preshoot 05" },
  { src: "/preshoot/pre6.webp", alt: "Preshoot 06" },
  { src: "/preshoot/pre12.webp", alt: "Preshoot 12" },
  { src: "/preshoot/pre7.webp", alt: "Preshoot 07" },
  { src: "/preshoot/pre8.webp", alt: "Preshoot 08" },
  { src: "/preshoot/pre9.webp", alt: "Preshoot 09" },
  { src: "/preshoot/pre10.webp", alt: "Preshoot 10" },
  { src: "/preshoot/pre11.webp", alt: "Preshoot 11" },

  // add as many as you need…
];

export default function PreshootPage() {
  return (
    <main>
      <PreshootHero />
      <Gallery images={preshootImages} />
    </main>
  );
}
