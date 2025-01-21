import { Check } from "lucide-react";

export const SplitList = () => {
  return (
    <section className="container max-w-[1200px] mx-auto py-20 flex flex-col md:flex-row overflow-hidden px-4">
      <div className="md:w-1/2 pr-20 animate-fadeInLeft duration-500">
        <p className="text-primary pb-2">Trusted choice</p>
        <h2 className="text-5xl">Why Choose us for your Windows and Doors?</h2>
        <p className="pt-6">
          At Door Surgeon, we pride ourselves on delivering exceptional service
          and quality. Here’s why we’re the trusted choice for doors and windows
          in West Yorkshire:
        </p>
      </div>
      <div className="pl-10 w-1/2">
        <ul className="flex flex-row flex-wrap gap-10 overflow-hidden">
          <li className="md:max-w-1/2 animate-fadeInBottom duration-500">
            <div className="rounded-xl w-10 h-10 bg-primary/50 flex items-center justify-center text-primary">
              <Check />
            </div>
            <h3 className="pt-4 pb-2">Exceptional Customer Service</h3>
            <p>
              Your satisfaction is our top priority. We’re here to help every
              step of the way.
            </p>
          </li>
          <li className="md:max-w-1/2 animate-fadeInBottom duration-500 delay-50">
            <div className="rounded-xl w-10 h-10 bg-primary/50 flex items-center justify-center text-primary">
              <Check />
            </div>
            <h3 className="pt-4 pb-2">Local and Reliable</h3>
            <p>
              We understand the needs of our community and are always nearby
              when you need us.
            </p>
          </li>
          <li className="md:max-w-1/2 animate-fadeInBottom duration-500  delay-100">
            <div className="rounded-xl w-10 h-10 bg-primary/50 flex items-center justify-center text-primary">
              <Check />
            </div>
            <h3 className="pt-4 pb-2">High-Quality Materials</h3>
            <p>
              We use only the best materials to ensure durability, energy
              efficiency, and long-lasting beauty.
            </p>
          </li>
          <li className="md:max-w-1/2 animate-fadeInBottom duration-500  delay-150">
            <div className="rounded-xl w-10 h-10 bg-primary/50 flex items-center justify-center text-primary">
              <Check />
            </div>
            <h3 className="pt-4 pb-2">Emergency Services</h3>
            <p>24/7 for issues quickly and efficiently.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
