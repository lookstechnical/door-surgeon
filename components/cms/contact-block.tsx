"use client";
import { Facebook } from "lucide-react";
import { Animate } from "../animate/animation";
import { Whatsapp } from "../icons/whatsapp";
import Image from "next/image";

export const ContactBlock = ({
  heading,
  desc,
  highlight,
  image,
  index,
}: any) => {
  return (
    <div className="w-full bg-primary/5">
      <section className="container max-w-[1200px] mx-auto py-10 flex flex-col md:flex-row overflow-hidden px-4 ">
        <div className="md:w-1/2 pr-20 animate-fadeInLeft duration-500">
          {highlight && <p className="text-primary pb-2">{highlight}</p>}
          <h2 className="text-5xl">{heading}</h2>
          <p className="pt-6">{desc}</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572937736426"
              className="text-primary hover:text-primary-400"
            >
              <Facebook className="h-12 w-12" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=07912294111"
              className="text-primary hover:text-primary-400"
            >
              <Whatsapp className="h-12 w-12" />
            </a>
          </div>
        </div>
        <div className="md:pl-10 md:w-1/2 py-4">
          <Animate variant="FadeInBottom">
            <div className="rounded-xl overflow-hidden">
              <Image
                alt="contact us"
                width={700}
                height={100}
                sizes="400px"
                src={image}
                priority={index === 0}
              />
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
};
