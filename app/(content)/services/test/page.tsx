import { CallBackForm } from "@/components/cms/call-back-form";
import { ContactFormSplit } from "@/components/cms/contact-form-split";
import { HeroRightImageAbout } from "@/components/cms/hero-right-imag-about";
import { HeroRightImageTest } from "@/components/cms/hero-right-image-test";
import { ServiceList } from "@/components/cms/service-list";
import { ServiceListMain } from "@/components/cms/service-list-main";

import { StackedContentBlock } from "@/components/cms/stacked-content-block";
import { StatsBlock } from "@/components/cms/stats-bllock";
import { Testimonials } from "@/components/cms/testimonials";
import { Heading } from "@/components/cms/title";
import Link from "next/link";

export default function Services() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <Heading />
      <HeroRightImageTest />
    </main>
  );
}
