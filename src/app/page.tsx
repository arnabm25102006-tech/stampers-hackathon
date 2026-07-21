import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import EventDetails from "./components/EventDetails";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Prizes from "./components/Prizes";
import WhyParticipate from "./components/WhyParticipate";
import FAQ from "./components/FAQ";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <EventDetails />
      <Timeline />
      <About />
      <Tracks />
      <Prizes />
      <Leadership />
      <WhyParticipate />
      <FAQ />
      
      <Footer />
    </>
  );
}