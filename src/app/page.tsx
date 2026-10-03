import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Showreel } from "@/components/sections/showreel";
import { Services } from "@/components/sections/services";
import { SelectedWork } from "@/components/sections/selected-work";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Showreel />
      <Services />
      <SelectedWork />
      <Testimonials />
      <CallToAction />
    </>
  );
}
