"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";
import React from "react";
import Image from "next/image";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Restricting to valid heading levels
  children: React.ReactNode; // Content of the heading
  className: string;
}
const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  return React.createElement(`h${level}`, { className }, children);
};

export const HeroLeftImage = ({
  highlight,
  heading,
  desc,
  link,
  linkTitle,
  color,
  index,
  image,
}: any) => {
  return (
    <section className={`${color} py-0 py-10`}>
      <section className="flex flex-col md:flex-row container max-w-[1200px] mx-auto py-0 items-center overflow-hidden px-4">
        <div className="md:pr-20 md:w-1/2 pb-4 md:pb-0">
          <Animate variant="FadeInBottom">
            <div className="rounded-xl overflow-hidden">
              <Image
                width={700}
                height={400}
                alt={`${heading} image`}
                src={image}
                priority={index === 0}
              />
            </div>
          </Animate>
        </div>
        <Animate className="md:w-1/2" variant="FadeInLeft">
          {highlight && <p className="pb-2 text-primary">{highlight}</p>}
          <Heading
            level={index === 0 ? 1 : 2}
            className="text-5xl md:text-7xl "
          >
            {heading}
          </Heading>
          <p className="pt-4">{desc}</p>
          {link && linkTitle && (
            <Link
              href={link}
              className="mb-10 md:mb-0 mt-10 bg-primary hover:bg-primary text-white w-fit flex flex-row justify-center items-center py-3 px-4 rounded-xl inline-block"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> {linkTitle}
            </Link>
          )}
        </Animate>
      </section>
    </section>
  );
};
