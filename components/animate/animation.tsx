"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

export const Animate = ({
  variant,
  className,
  children,
  delay = 0,
  as = "div",
}: PropsWithChildren<{
  variant: keyof typeof variants;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}>) => {
  const controls = useAnimation(); // Controls the animation
  const ref = useRef(null);
  const inView = useInView(ref); // Tracks visibility in viewport

  // Animation variants
  const variants = {
    FadeInBottom: {
      hidden: { opacity: 0, y: 100, transition: { duration: 0.5, delay } },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
    },
    FadeInTop: {
      hidden: { opacity: 0, y: -100, transition: { duration: 0.5, delay } },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
    },
    FadeInLeft: {
      hidden: { opacity: 0, x: 100, transition: { duration: 0.5, delay } },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
    },
    FadeInRight: {
      hidden: { opacity: 0, x: -100, transition: { duration: 0.5, delay } },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
    },
    Fade: {
      hidden: { opacity: 0, transition: { duration: 0.5, delay } },
      visible: { opacity: 1, transition: { duration: 0.5, delay } },
    },
    Scale: {
      hidden: { opacity: 0, scale: 0, transition: { duration: 0.5, delay } },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } },
    },
  };

  // Trigger animation when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // @ts-ignore -- works
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
