import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";

export const StatsBlock = () => {
  return (
    <div className="bg-primary/5 pb-10">
      <Animate
        variant="Scale"
        className="bg-primary/20 p-10 rounded-xl flex flex-col gap-4 md:flex-row container max-w-[1200px] mx-auto"
      >
        <div className="md:w-1/2 md:pr-40">
          <ul className="flex flex-row gap-4 justify-between">
            <li className="flex flex-col">
              <span className="text-5xl text-primary">25+</span>Years experience
            </li>
            <li className="flex flex-col">
              <span className="text-5xl text-primary">1000s</span>Projects
            </li>
          </ul>
        </div>
        <div className="text-xl md:w-1/2">
          For over 25 years we have been providing our customers with great
          service, wether it be Door Repairs, Window Repairs, Double Glazed Unit
          Replacement, Door and Window Installation or Locksmith and Security
          services we have you covered.
        </div>
      </Animate>
    </div>
  );
};
