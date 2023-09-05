//Hooks
import { useWindowWidth } from "../../hooks/useWindowWidth";

//Components
import { Section } from "../../components/Section/Section";
import { HeroContentLarge } from "./HeroContentLarge";
import { HeroContentSmall } from "./HeroContentSmall";

// Import Assets Images Selector Function
import { getImageSet } from "./imagesSelector";

export const Hero = () => {
  const windowWidth = useWindowWidth();
  const isRetina = window.devicePixelRatio > 1;
  const [firstImageSet, secondImageSet] = getImageSet(windowWidth, isRetina);
  const isLargeScreen = windowWidth >= 1440;
  const HeroContent = isLargeScreen ? HeroContentLarge : HeroContentSmall;
  return (
    <Section id='hero'>
      <HeroContent
        firstImageSet={firstImageSet}
        secondImageSet={secondImageSet}
      />
    </Section>
  );
};
