import { Alert } from "@/components/cms/alert";
import { ContactFormSplit } from "@/components/cms/contact-form-split";
import { HeroLeftImage } from "@/components/cms/hero-left-image";
import { HeroRightImage } from "@/components/cms/hero-right-image";
import { ServiceList } from "@/components/cms/service-list";
import { SplitList } from "@/components/cms/split-list";
import { Testimonials } from "@/components/cms/testimonials";
import { getBySlug, getSlugs } from "@/src/utils";

export async function generateMetadata({ params }: any): Promise<any> {
  const { slug = [], locale } = params;

  const page = getBySlug(slug);

  if (page) {
    return {
      title: page.title,
      description: page.description,
    };
  }

  return {
    title: "The Door Surgeon",
    description: "West yourkshire window and door repair",
  };
}

export function generateStaticParams() {
  const slugs = getSlugs();
  return [{ slug: [""] }];
}

export default function Home({ params }: any) {
  const { slug = [], locale } = params;

  const page = getBySlug(slug);

  return (
    <main className="pt-20">
      {page?.content.map((component: any) => {
        switch (component.type) {
          case "hero":
            return <HeroRightImage {...component} />;
        }
      })}

      <SplitList />
      <HeroLeftImage />
      <ServiceList />
      <Testimonials />
      <Alert />

      <ContactFormSplit />
    </main>
  );
}
