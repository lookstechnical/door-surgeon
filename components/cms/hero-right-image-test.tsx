import { PhoneCall } from "lucide-react";
import Link from "next/link";

export const HeroRightImageTest = () => {
  return (
    <section className="bg-primary/5 p-10">
      <section className="flex flex-col md:flex-row container max-w-[1125px] mx-auto py-10 items-center overflow-hidden">
        <div className="md:w-1/2 animate-fadeInLeft duration-500">
          <h2 className="text-5xl ">Window installation</h2>
          <p className="pt-4">
            The Door Surgeon has over 20 years’ experience in fitting high
            security UPVC windows using the highest quality materials and the
            best craftmanship available. We take pride in our work giving you
            the best experience overall. We don’t use any pushy salesman or
            dishonest sales techniques, just a reliable honest service. Call now
            for a free quote.
          </p>
        </div>
        <div className="md:pl-20 md:w-1/2 animate-fadeInBottom duration-500">
          <div className="rounded-xl overflow-hidden">
            <img src="/img/window-installation.jpg" />
          </div>
        </div>
      </section>
    </section>
  );
};
