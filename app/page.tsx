import NavBar from "@/components/NavBar";
import Reveal from "@/components/Reveal";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ForWho from "@/components/sections/ForWho";
import HowItWorks from "@/components/sections/HowItWorks";
import VagaCerta from "@/components/sections/VagaCerta";
import About from "@/components/sections/About";
import Talentos from "@/components/sections/Talentos";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Reveal />
      <NavBar />
      <Hero />
      <Stats />
      <ForWho />
      <HowItWorks />
      <VagaCerta />
      <About />
      <Talentos />
      <CtaFinal />
      <Footer />
    </>
  );
}
