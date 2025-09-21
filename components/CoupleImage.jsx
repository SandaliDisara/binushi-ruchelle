import Image from "next/image";

export default function CoupleImage() {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh]">
      {/* Background image */}
      <Image
        src="/coupleImage.webp"
        alt="Couple photo"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Optional subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text overlay */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
        <p className="font-third text-white text-base md:text-xl lg:text-2xl drop-shadow-md leading-relaxed">
          Two hearts, one<br />beautiful journey
        </p>
      </div>
    </section>
  );
}
