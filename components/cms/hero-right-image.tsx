import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";

export const HeroRightImage = () => {
  return (
    <section className="bg-primary/5 p-10">
      <section className="flex flex-col md:flex-row container max-w-[1125px] mx-auto py-10 items-center overflow-hidden">
        <div className="md:w-1/2">
          <Animate variant="FadeInRight">
            <h1 className="text-7xl ">
              Door &<br /> Window Specialists
            </h1>
            <p className="pt-4">
              Expertly crafted doors and windows with professional installation
              across West Yorkshire.
            </p>
            <Link
              href="tel:07912 294 111"
              className="mb-10 md:mb-0 mt-10 bg-primary hover:bg-primary text-white w-fit flex flex-row justify-center items-center py-3 px-4 rounded-xl inline-block"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> 07912 294 111
            </Link>
          </Animate>
        </div>
        <div className="md:pl-20 md:w-1/2">
          <Animate variant="FadeInBottom">
            <div className="rounded-xl overflow-hidden">
              <img src="/img/install-windows.webp" />
            </div>
          </Animate>
        </div>
      </section>
    </section>
  );
};
