import { KeyIcon } from "lucide-react";
import { Animate } from "../animate/animation";

export const ServiceList = ({ highlight, desc, heading }: any) => {
  return (
    <section className="container max-w-[1200px] mx-auto py-20 flex flex-col px-4">
      <div className="flex-col md:w-full flex md:flex-row justify-end items-end gap-10">
        <div>
          <p className="text-primary text-lg pb-2">{highlight}</p>
          <h2 className="text-6xl">{heading}</h2>
        </div>
        <div className="md:text-right">
          <p className="md:pt-6 text-xl">{desc}</p>
        </div>
      </div>
      <div className="py-10">
        <ul className="grid grid-cols-1 md:grid-cols-4 flex-wrap gap-4 overflow-hidden pt-10">
          <Animate
            as="li"
            variant="FadeInBottom"
            className=" flex-row gap-10 items-start pb-10 bg-primary text-white border-primary border-2 p-4 rounded-xl"
          >
            <div>
              <div className="rounded-xl w-10 h-10 bg-white/70 flex items-center justify-center text-primary">
                <KeyIcon />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-white pt-2">
                Door and window installations
              </h3>
              <p className="pt-6 text-md">
                At Door Surgeon, we provide a wide range of services to both
                commercial and residential customers.
              </p>
            </div>
          </Animate>
          <Animate
            as="li"
            variant="FadeInBottom"
            delay={0.3}
            className="flex-1 flex-row gap-10 items-start pb-10  border-primary border-2 p-4 rounded-xl"
          >
            <div>
              <div className="rounded-xl w-10 h-10 bg-white/70 flex items-center justify-center text-primary">
                <KeyIcon />
              </div>
            </div>
            <div>
              <h3 className="text-2xl  pt-2">Door Repair Services</h3>
              <p className="pt-6 text-md">
                The Door Surgeon offers a wide range of solutions to repairing
                your door rather than spending hundreds of pounds on a brand-new
                door. See more information…
              </p>
            </div>
          </Animate>
          <Animate
            as="li"
            variant="FadeInBottom"
            delay={0.4}
            className="flex-1 flex-row gap-10 items-start pb-10 bg-primary text-white border-primary border-2 p-4 rounded-xl"
          >
            <div>
              <div className="rounded-xl w-10 h-10 bg-white/70 flex items-center justify-center text-primary">
                <KeyIcon />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-white  pt-2">
                Double glazed unit service
              </h3>
              <p className="pt-6 text-md">
                Are your double-glazed units misted or cracked? Whether it’s
                misted, broken or energy saving upgrades your looking for, The
                Door Surgeon can provide high standard replacements at an
                affordable price. See more information…
              </p>
            </div>
          </Animate>
          <Animate
            as="li"
            variant="FadeInBottom"
            delay={0.5}
            className="flex-1 flex-row gap-10 items-start pb-10  border-primary border-2 p-4 rounded-xl"
          >
            <div>
              <div className="rounded-xl w-10 h-10 bg-white/70 flex items-center justify-center text-primary">
                <KeyIcon />
              </div>
            </div>
            <div>
              <h3 className="text-2xl  pt-2">Window Repair Services</h3>
              <p className="pt-6 text-md">
                At Door Surgeon, we provide a wide range of services to both
                commercial and residential customers.
              </p>
            </div>
          </Animate>
        </ul>
      </div>
    </section>
  );
};
