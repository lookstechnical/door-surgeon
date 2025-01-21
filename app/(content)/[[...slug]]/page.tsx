import { Alert } from "@/components/cms/alert";
import { ContactFormSplit } from "@/components/cms/contact-form-split";
import { HeroLeftImage } from "@/components/cms/hero-left-image";
import { HeroRightImage } from "@/components/cms/hero-right-image";
import { ServiceList } from "@/components/cms/service-list";
import { SplitList } from "@/components/cms/split-list";
import { Testimonials } from "@/components/cms/testimonials";

export function generateStaticParams() {
  return [{ slug: [""] }, { slug: ["about"] }];
}

export default function Home() {
  return (
    <main className="pt-20">
      <HeroRightImage />
      <SplitList />
      <HeroLeftImage />
      <ServiceList />
      <Testimonials />
      <Alert />

      <ContactFormSplit />
    </main>
  );
}
