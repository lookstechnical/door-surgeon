"use client";
import { Facebook } from "lucide-react";
import { Animate } from "../animate/animation";
import { Whatsapp } from "../icons/whatsapp";

export const ContactBlock = ({ heading, desc, highlight, image }: any) => {
  return (
    <section className="container max-w-[1200px] mx-auto py-10 flex flex-col md:flex-row overflow-hidden px-4">
      <div className="md:w-1/2 pr-20 animate-fadeInLeft duration-500">
        {highlight && <p className="text-primary pb-2">{highlight}</p>}
        <h2 className="text-5xl">{heading}</h2>
        <p className="pt-6">{desc}</p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/pages/The-door-surgeon/364962176914907"
            className="text-primary-200 hover:text-primary-400"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=07912294111"
            className="text-primary-200 hover:text-primary-400"
          >
            <Whatsapp className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="md:pl-10 md:w-1/2 py-4">
        <Animate variant="FadeInBottom">
          <div className="rounded-xl overflow-hidden">
            <img src={image} />
          </div>
        </Animate>
      </div>
    </section>
  );
};
