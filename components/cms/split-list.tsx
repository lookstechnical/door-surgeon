"use client";
import { Check } from "lucide-react";
import { Animate } from "../animate/animation";

export const SplitList = ({ heading, desc, highlight, items }: any) => {
  return (
    <section className="container max-w-[1200px] mx-auto md:py-10 flex flex-col md:flex-row overflow-hidden px-4">
      <div className="md:w-1/2 pr-20 animate-fadeInLeft duration-500">
        {highlight && <p className="text-primary pb-2">{highlight}</p>}
        <h2 className="text-5xl">{heading}</h2>
        <p className="pt-6">{desc}</p>
      </div>
      <div className="md:pl-10 md:w-1/2 py-4">
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
    </section>
  );
};
