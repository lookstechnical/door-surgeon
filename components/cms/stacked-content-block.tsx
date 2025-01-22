import Image from "next/image";
import { Animate } from "../animate/animation";

export const StackedContentBlock = ({
  highlight,
  heading,
  desc,
  image,
}: any) => {
  return (
    <section className="bg-primary/5 py-0 md:py-10 px-4">
      <section className="flex flex-col items-center container max-w-[1200px] mx-auto py-10 items-center overflow-hidden">
        <Animate
          variant="FadeInBottom"
          className="flex items-center justify-center flex-col md:px-40 text-center"
        >
          <p className="pt-4 text-primary text-lg">{highlight}</p>
          <h1 className="text-6xl">{heading}</h1>
          <p className="pt-4 text-lg">{desc}</p>
        </Animate>
        <div className="w-full pt-10 ">
          <Animate variant="FadeInBottom" delay={0.25} className="">
            <div className="relative aspect-[1/1] md:aspect-[3/1] rounded-xl overflow-hidden">
              <Image
                alt="image"
                width={300}
                height={100}
                src={`/${image}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Animate>
        </div>
      </section>
    </section>
  );
};
