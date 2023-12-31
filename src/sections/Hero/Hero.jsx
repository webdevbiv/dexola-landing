import { useWindowWidth } from "../../hooks/useWindowWidth";

import { Section } from "../../components/Section/Section";
import { HeroContentLarge } from "./HeroContentLarge";
import { HeroContentSmall } from "./HeroContentSmall";

import { LARGE_SCREEN_BREAKPOINT } from "../../styles/breakpoints";

export const Hero = () => {
  const windowWidth = useWindowWidth();

  const isLargeScreen = windowWidth >= LARGE_SCREEN_BREAKPOINT;
  const HeroContent = isLargeScreen ? HeroContentLarge : HeroContentSmall;
  return (
    <Section id='hero'>
      <HeroContent />
    </Section>
  );
};
