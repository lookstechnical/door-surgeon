import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Animate } from "../animate/animation";

export const StackedContentBlock = () => {
  return (
    <section className="bg-primary/5 p-10">
      <section className="flex flex-col items-center container max-w-[1200px] mx-auto py-10 items-center overflow-hidden">
        <Animate
          variant="FadeInBottom"
          className="flex items-center justify-center flex-col md:px-40 text-center"
        >
          <p className="pt-4">Who are we</p>
          <h1 className="text-7xl ">Door & Window Specialists</h1>
          <p className="pt-4">
            The Door Surgeon is a small family run business offering an honest
            and reliable service. Providing a wide range of services throughout
            the West Yorkshire area.
          </p>
        </Animate>
        <div className="w-full pt-10 ">
          <Animate
            variant="FadeInBottom"
            delay={0.25}
            className="rounded-xl overflow-hidden aspect-[3/1] overflow-hidden"
          >
            <img
              src="https://doorsurgeon.netlify.app/static/door-3fc33bf54c7dae36b6d7413043737775.jpg"
              className="w-full h-full"
            />
          </Animate>
        </div>
      </section>
    </section>
  );
};
