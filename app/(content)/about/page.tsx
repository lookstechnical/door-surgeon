import { HeroRightImageAbout } from "@/components/cms/hero-right-imag-about";

import { StackedContentBlock } from "@/components/cms/stacked-content-block";
import { StatsBlock } from "@/components/cms/stats-bllock";
import { Testimonials } from "@/components/cms/testimonials";
import Link from "next/link";

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}

      <StackedContentBlock />
      <StatsBlock />
      <HeroRightImageAbout />
      <Testimonials />
    </main>
  );
}
