"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";

export const HeroLeftImage = ({
  highlight,
  heading,
  desc,
  link,
  linkTitle,
}: any) => {
  return (
    <section className="bg-primary/5 p-10">
      <section className="flex flex-col md:flex-row container max-w-[1125px] mx-auto py-10 items-center overflow-hidden">
        <div className="md:pr-20 md:w-1/2">
          <Animate variant="FadeInBottom">
            <div className="rounded-xl overflow-hidden">
              <img src="/img/surgeon.webp" />
            </div>
          </Animate>
        </div>
        <Animate className="md:w-1/2" variant="FadeInLeft">
          {highlight && <p>{highlight}</p>}
          <h1 className="text-7xl ">{heading}</h1>
          <p className="pt-4">{desc}</p>
          <Link
            href={link}
            className="mb-10 md:mb-0 mt-10 bg-primary hover:bg-primary text-white w-fit flex flex-row justify-center items-center py-3 px-4 rounded-xl inline-block"
          >
            <PhoneCall className="mr-2 h-4 w-4" /> {linkTitle}
          </Link>
        </Animate>
      </section>
    </section>
  );
};
