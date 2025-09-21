import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Timeline from "@/components/Timeline";
import Instructions from "@/components/Instructions";
import Poem from "@/components/Poem";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Invitation/>
            <Timeline/>
            <Instructions/>
            <Poem />
            <Footer />
        </main>
    );
}
