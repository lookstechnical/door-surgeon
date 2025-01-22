import { Alert } from "@/components/cms/alert";
import { ContactFormSplit } from "@/components/cms/contact-form-split";
import { Hero } from "@/components/cms/hero";
import { ServiceList } from "@/components/cms/service-list";
import { ServiceListMain } from "@/components/cms/service-list-main";
import { SplitList } from "@/components/cms/split-list";
import { StatsBlock } from "@/components/cms/stats-block";
import { Testimonials } from "@/components/cms/testimonials";
import { Heading } from "@/components/cms/title";
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
  return slugs;
}

export default function Home({ params }: any) {
  const { slug = [], locale } = params;

  const page = getBySlug(slug);

  return (
    <main className="pt-20">
      {page?.content?.map((component: any, index: number) => {
        switch (component.type) {
          case "hero":
            return <Hero key={index} component={component} />;
          case "checklist":
            return <SplitList key={index} {...component} />;
          case "servicelist":
            return <ServiceList key={index} {...component} />;
          case "testimonials":
            return <Testimonials key={index} {...component} />;
          case "alert":
            return <Alert key={index} {...component} />;
          case "contactform":
            return <ContactFormSplit key={index} {...component} />;
          case "heading":
            return <Heading key={index} {...component} />;
          case "stats":
            return <StatsBlock key={index} {...component} />;
          case "service-list-main":
            return <ServiceListMain key={index} {...component} />;
        }
      })}
    </main>
  );
}
