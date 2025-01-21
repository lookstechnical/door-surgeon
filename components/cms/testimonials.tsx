"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="flex md:flex-row container max-w-[1200px] mx-auto py-10 pb-40 px-4">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-primary">Tesitmonials</p>
        <h3 className="text-5xl pb-10">Our Customers Say</h3>
        <div ref={emblaRef} className="embla w-full">
          <ul className="flex flex-row gap-4 justify-between embla__container">
            <li className="flex flex-col bg-primary/20 p-4 rounded-xl flex-[0_0_100%] md:flex-[0_0_25%] embla__slide">
              <div>
                <div className="flex flex-row gap-4">
                  <img
                    src="https://www.yell.com/img/yell_icon_256x256.png"
                    className="w-10 h-10 pb-2"
                  />
                  <p>Emma</p>
                </div>
                <p>
                  My house had been broken into and needed the locks changing
                  quickly, I rang sean and he managed to come out to me straight
                  away and it didn't cost me any extra. Very happy with the
                  service will definitely use The Door Surgeon again
                </p>
              </div>
            </li>
            <li className="flex flex-col bg-primary/20 p-4 rounded-xl flex-[0_0_100%] md:flex-[0_0_25%]  embla__slide">
              <div>
                <div className="flex flex-row gap-4">
                  <img
                    src="https://www.yell.com/img/yell_icon_256x256.png"
                    className="w-10 h-10 pb-2"
                  />
                  <p>Emma</p>
                </div>
                <p>
                  My house had been broken into and needed the locks changing
                  quickly, I rang sean and he managed to come out to me straight
                  away and it didn't cost me any extra. Very happy with the
                  service will definitely use The Door Surgeon again
                </p>
              </div>
            </li>
            <li className="flex flex-col bg-primary/20 p-4 rounded-xl flex-[0_0_100%] md:flex-[0_0_25%]  embla__slide">
              <div>
                <div className="flex flex-row gap-4">
                  <img
                    src="https://www.yell.com/img/yell_icon_256x256.png"
                    className="w-10 h-10 pb-2"
                  />
                  <p>Emma</p>
                </div>
                <p>
                  My house had been broken into and needed the locks changing
                  quickly, I rang sean and he managed to come out to me straight
                  away and it didn't cost me any extra. Very happy with the
                  service will definitely use The Door Surgeon again
                </p>
              </div>
            </li>
            <li className="flex flex-col bg-primary/20 p-4 rounded-xl flex-[0_0_100%] md:flex-[0_0_25%]  embla__slide">
              <div>
                <div className="flex flex-row gap-4">
                  <img
                    src="https://www.yell.com/img/yell_icon_256x256.png"
                    className="w-10 h-10 pb-2"
                  />
                  <p>Emma</p>
                </div>
                <p>
                  My house had been broken into and needed the locks changing
                  quickly, I rang sean and he managed to come out to me straight
                  away and it didn't cost me any extra. Very happy with the
                  service will definitely use The Door Surgeon again
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
