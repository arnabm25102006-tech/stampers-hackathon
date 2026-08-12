import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import IndiaMap from "./components/IndiaMap/IndiaMap";
import About from "./components/About/About";
import Rewards from "./components/Rewards/Rewards";
import Timeline from "./components/Timeline/Timeline";
import Tracks from "./components/Tracks/Tracks";
import Sponsors from "./components/Sponsors/Sponsors";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import FeaturedCompetitions from "./components/FeaturedCompetitions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCompetitions />
       <IndiaMap />
       <About />
        <Tracks />
       <Rewards />
        <Timeline />
        <Sponsors />
        <FAQ />
        <Footer />
    </>
  );
}