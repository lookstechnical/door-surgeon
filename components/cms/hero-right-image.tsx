import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";

const colors = [
  "bg-primary",
  "bg-primary/50",
  "bg-primary/20",
  "bg-primary/10",
  "bg-primary/5",
];

export const HeroRightImage = ({
  highlight,
  heading,
  desc,
  link,
  linkTitle,
  image,
  color,
}: any) => {
  return (
    <section className={`p-4 py-10 ${color}`}>
      <section className="flex flex-col md:flex-row container max-w-[1125px] mx-auto py-10 items-center overflow-hidden">
        <div className="md:w-1/2">
          <Animate variant="FadeInRight">
            {highlight && <p className="pb-2">{highlight}</p>}
            <h1 className="text-5xl md:text-7xl ">{heading}</h1>
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
              <img src={image} />
            </div>
          </Animate>
        </div>
      </section>
    </section>
  );
};
