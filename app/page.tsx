import { Hero } from "@/components/sections/Hero";
import { CurrentBuilding } from "@/components/sections/CurrentBuilding";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentBuilding />
      <About />
      <Capabilities />
      <TechStack />
      <Experience />
      <CTA />
      <Contact />
    </>
  );
}
