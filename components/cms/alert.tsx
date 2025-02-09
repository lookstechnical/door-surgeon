import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";

export const Alert = ({ heading, highlight, description }: any) => {
  return (
    <section className="container mx-auto max-w-[1200px] text-white py-10 px-4">
      <Animate
        variant="Scale"
        className="bg-primary p-10 py-40 rounded-xl text-white flex flex-col justify-center items-center"
      >
        {highlight && <p>{highlight}</p>}
        <h3 className="text-6xl text-white text-center">{heading} </h3>
        <p className="">{description}</p>
        <Link
          href="tel:07912 294 111"
          className="hidden md:flex bg-primary border-2 border-white mt-4 hover:bg-primary text-white mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
        >
          <PhoneCall className="mr-2 h-4 w-4 " /> 07912 294 111
        </Link>
      </Animate>
    </section>
  );
};
