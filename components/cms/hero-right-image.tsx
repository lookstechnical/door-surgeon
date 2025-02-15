import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";
import React from "react";
import Image from "next/image";

const colors = [
  "bg-primary",
  "bg-primary/50",
  "bg-primary/20",
  "bg-primary/10",
  "bg-primary/5",
];

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Restricting to valid heading levels
  children: React.ReactNode; // Content of the heading
  className: string;
}
const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  return React.createElement(`h${level}`, { className }, children);
};

export const HeroRightImage = ({
  highlight,
  heading,
  desc,
  link,
  linkTitle,
  image,
  color,
  index,
}: any) => {
  return (
    <section className={`p-4 py-10 ${color}`}>
      <section className="flex flex-col md:flex-row container max-w-[1200px] mx-auto py-0 items-center overflow-hidden px-4">
        <div className="md:w-1/2">
          <Animate variant="FadeInRight">
            {highlight && <p className="text-primary pb-2">{highlight}</p>}
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
        </div>
        <div className="md:pl-20 md:w-1/2">
          <Animate variant="FadeInBottom">
            <div className="rounded-xl overflow-hidden">
              <Image
                width={471}
                height={471}
                alt={`${heading} image`}
                src={image}
                priority={index === 0}
                sizes="(min-width: 1240px) 471px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Animate>
        </div>
      </section>
    </section>
  );
};
