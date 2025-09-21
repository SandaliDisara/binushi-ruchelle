import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Timeline from "@/components/Timeline";
import Instructions from "@/components/Instructions";
import EventImages from "@/components/EventImages";
import CoupleImage from "@/components/CoupleImage";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Invitation/>
            <Timeline/>
            <Instructions/>
            <CoupleImage/>
            <EventImages/>
        </main>
    );
}
