import { KeyIcon } from "lucide-react";
import { Animate } from "../animate/animation";
import { getBySlug } from "@/src/utils";
import Link from "next/link";

export const ServiceList = ({
  highlight,
  desc,
  heading,
  services,
  color,
  ...props
}: any) => {
  return (
    <div className={`${color}`}>
      <section
        className={`container max-w-[1200px] mx-auto py-10 flex flex-col px-4`}
      >
        <div className="flex-col flex md:flex-row md:justify-between justify-start items-start md:items-end md:gap-10 gap-4">
          <div>
            {highlight && (
              <p className="text-primary text-lg pb-2">{highlight}</p>
            )}
            <h2 className="text-4xl md:text-6xl">{heading}</h2>
          </div>
          <div className="md:text-right">
            <p className="md:pt-6 md:text-xl">{desc}</p>
          </div>
        </div>
        <div className="md:py-10 py-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 overflow-hidden pt-10">
            {services?.map((slug: string) => {
              const service = getBySlug(slug.split("/"));

              return (
                <Animate
                  as="li"
                  variant="FadeInBottom"
                  className="flex-row gap-10 items-start pb-10 [&:nth-child(4n+1)]:bg-primary [&:nth-child(4n+4)]:bg-primary [&:nth-child(4n+1)]:text-white [&:nth-child(4n+4)]:text-white [&:nth-child(4n+3)]:text-black [&:nth-child(4n+2)]:text-black border-primary border-2 p-4 rounded-xl"
                >
                  <Link
                    href={service?.slug}
                    className="flex-row gap-10 items-start pb-10"
                  >
                    <div>
                      <div className="rounded-xl w-10 h-10 bg-white/70 flex items-center justify-center text-primary">
                        <KeyIcon />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl text-inherit pt-2">
                        {service?.title}
                      </h3>
                      <p className="pt-6 text-md">{service?.description}</p>
                    </div>
                  </Link>
                </Animate>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
