import { HeroLeftImage } from "./hero-left-image";
import { HeroRightImage } from "./hero-right-image";
import { StackedContentBlock } from "./stacked-content-block";

export const Hero = ({ component, index }: any) => {
  switch (component.layout) {
    case "hero-left-image":
      return <HeroLeftImage index={index} {...component} />;
    case "hero-right-image":
      return <HeroRightImage index={index} {...component} />;
    case "stacked":
      return <StackedContentBlock index={index} {...component} />;
    default:
      return <HeroLeftImage index={index} {...component} />;
  }
};
