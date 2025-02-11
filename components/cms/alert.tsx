import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";
import { Whatsapp } from "../icons/whatsapp";

export const Alert = ({ heading, highlight, desc }: any) => {
  return (
    <section className="container mx-auto max-w-[1200px] text-white py-10 px-4">
      <Animate
        variant="Scale"
        className="bg-primary px-0 md:px-10 py-40 rounded-xl text-white flex flex-col justify-center items-center"
      >
        {highlight && <p>{highlight}</p>}
        <h3 className="text-4xl md:text-6xl text-white text-center">
          {heading}
        </h3>
        <p className="py-4 px-4 md:max-w-[70%]">{desc}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="tel:07912 294 111"
            className="hidden md:flex bg-primary border-2 border-white mt-4 hover:bg-primary text-white mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
          >
            <PhoneCall className="mr-2 h-4 w-4 " /> 07912 294 111
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=07912294111"
            className="hidden md:flex bg-primary border-2 border-white mt-4 hover:bg-primary text-white mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
          >
            <Whatsapp className="mr-2 h-4 w-4 " /> Whatsapp
          </Link>
        </div>
      </Animate>
    </section>
  );
};
