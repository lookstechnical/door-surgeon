import { HeroLeftImage } from "./hero-left-image";
import { HeroRightImage } from "./hero-right-image";
import { StackedContentBlock } from "./stacked-content-block";

export const Hero = ({ component }: any) => {
  switch (component.layout) {
    case "hero-left-image":
      return <HeroLeftImage {...component} />;
    case "hero-right-image":
      return <HeroRightImage {...component} />;
    case "stacked":
      return <StackedContentBlock {...component} />;
    default:
      return <HeroLeftImage {...component} />;
  }
};
