"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

export const Testimonials = ({ heading, highlight }: any) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(`/api/testimonals`);
        const data = await response.json();
        return data.result?.reviews || [];
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        return [];
      }
    };

    const fetchAllReviews = async () => {
      const [googleReviews] = await Promise.all([fetchGoogleReviews()]);

      setReviews(googleReviews.filter((review: any) => review.rating >= 4));
    };

    fetchAllReviews();
  }, []);

  return (
    <section className="flex md:flex-row container max-w-[1200px] mx-auto py-10 px-4">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-primary">{highlight || "Testimonials"}</p>
        <h3 className="text-4xl md:text-5xl pb-10">
          {heading || "Our Customers Say"}
        </h3>

        <div ref={emblaRef} className="embla w-full min-h-[300px] ">
          <ul className="flex flex-row gap-4 justify-between embla__container w-full h-full">
            {reviews.map((review: any) => (
              <li
                key={review.author_name}
                className="h-[300px] flex flex-col bg-primary/20 p-4 rounded-xl flex-[0_0_100%] md:flex-[0_0_25%] embla__slide relative"
              >
                <div>
                  <div className="flex flex-row gap-4">
                    <Image
                      alt="Yel logo"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      className="w-10 h-10 pb-2"
                    />
                    <div className="flex flex-row gap-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="max-h-[150px] overflow-hidden y-4 text-ellipsis">
                    {review.text}...
                  </p>
                  <p className="absolute bottom-4 right-4 text-right font-bold capitalize ">
                    {review.author_name}
                  </p>
                </div>
              </li>
            ))}
            {reviews.length === 0 && (
              <div className="text-center">No Reviews loaded</div>
            )}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
          <p className="text-xl">See more reviews: </p>
          <Link
            href="https://search.google.com/local/reviews?placeid=ChIJn9FGVZrde0gRZAKmmvH4_Mo"
            className="flex flex-row items-center justify-center gap-2 hover:text-primary"
            rel="nofollow"
          >
            <Image
              alt="Yel logo"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              className="w-10 h-10 pb-2"
            />
            Google reviews
          </Link>
          <Link
            href="https://www.yell.com/biz/the-door-surgeon-bradford-7061137/"
            className="flex flex-row items-center justify-center gap-2 hover:text-primary"
            rel="nofollow"
          >
            <Image
              alt="Yel logo"
              width={40}
              height={40}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI20mkiZYKCaJPhOITn9WL0kozjUJa49qaRA&s"
              className="w-10 h-10 pb-2"
            />
            Yell
          </Link>
        </div>
      </div>
    </section>
  );
};
