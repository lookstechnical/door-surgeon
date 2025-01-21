import { PhoneCall } from "lucide-react";
import Link from "next/link";

export const HeroRightImageAbout = () => {
  return (
    <section className="bg-primary/5 p-10">
      <section className="flex flex-col md:flex-row container max-w-[1125px] mx-auto py-10 items-center overflow-hidden">
        <div className="md:w-1/2 animate-fadeInLeft duration-500">
          <p>Who is the door surgeon</p>
          <h1 className="text-7xl ">Meet the Door Surgeon</h1>
          <p className="pt-4">
            Sean Ellis bLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s,{" "}
          </p>
          <Link
            href="tel:07912 294 111"
            className="mb-10 md:mb-0 mt-10 bg-primary hover:bg-primary text-white w-fit flex flex-row justify-center items-center py-3 px-4 rounded-xl inline-block"
          >
            <PhoneCall className="mr-2 h-4 w-4" /> 07912 294 111
          </Link>
        </div>
        <div className="md:pl-20 md:w-1/2 animate-fadeInBottom duration-500">
          <div className="rounded-xl overflow-hidden">
            <img src="/img/surgeon.webp" />
          </div>
        </div>
      </section>
    </section>
  );
};
