import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThisSunday from "@/components/ThisSunday";
import OurChurch from "@/components/OurChurch";
import Worship from "@/components/Worship";
import Community from "@/components/Community";
import Events from "@/components/Events";
import Sermons from "@/components/Sermons";
import Pastor from "@/components/Pastor";
import Ministries from "@/components/Ministries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ThisSunday />
        <OurChurch />
        <Worship />
        <Community />
        <Events />
        <Sermons />
        <Pastor />
        <Ministries />
      </main>
      <Footer />
    </>
  );
}
