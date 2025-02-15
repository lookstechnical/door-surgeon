"use client";
import { Check } from "lucide-react";
import { Animate } from "../animate/animation";

export const SplitList = ({
  heading,
  desc,
  highlight,
  items,
  layout,
  color,
}: any) => {
  return (
    <section className={`${color} py-4`}>
      <div
        className={`${
          layout === "left" ? "md:flex-row-reverse" : "md:flex-row"
        }  container max-w-[1200px] mx-auto py-10 flex flex-col overflow-hidden px-4`}
      >
        <div
          className={`${
            layout === "left" ? "text-right md:pl-20" : "text-left md:pr-20"
          } md:w-1/2 animate-fadeInLeft duration-500`}
        >
          {highlight && <p className="text-primary pb-2">{highlight}</p>}
          <h2 className="text-5xl">{heading}</h2>
          <p className="pt-6">{desc}</p>
        </div>
        <div
          className={`${
            layout === "left" ? "md:pr-10" : "md:pl-10"
          } md:w-1/2 py-4`}
        >
          <ul className="flex w-full flex-col md:flex-row flex-wrap gap-10 overflow-hidden">
            {items?.map((item: any) => (
              <Animate
                as="li"
                variant="FadeInBottom"
                className="max-w-full md:max-w-1/2"
              >
                <div className="rounded-xl w-10 h-10 bg-primary/50 flex items-center justify-center text-primary">
                  <Check />
                </div>
                <h3 className="pt-4 pb-2">{item.heading}</h3>
                <p>{item.description}</p>
              </Animate>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
