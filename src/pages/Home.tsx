import Hero from "../components/sections/Hero";
import PartnersMarquee from "../components/sections/PartnersMarquee";
import About from "../components/sections/About";
import StatsCounter from "../components/sections/StatsCounter";
import Vision from "../components/sections/Vision";
import Expertise from "../components/sections/Expertise";
import Projects from "../components/sections/Projects";
import Values from "../components/sections/Values";
import WhyNGG from "../components/sections/WhyNGG";
import Training from "../components/sections/Training";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnersMarquee />
      <About />
      <StatsCounter />
      <Vision />
      <Expertise />
      <Projects />
      <Values />
      <WhyNGG />
      <Training />
      <CTA />
      <Contact />
    </div>
  );
}

