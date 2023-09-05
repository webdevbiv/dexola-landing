import { useWindowWidth } from "../../hooks/useWindowWidth";

import { ImageFaders } from "./ImageFaders";
import { HeroTitle } from "./HeroTitle";
import { HeroText } from "./HeroText";

import s from "./Hero.module.scss";
import { SMALL_SCREEN_BREAKPOINT } from "../../styles/breakpoints";

export const HeroContentSmall = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className={s.containerPictures}>
        <div
          key={windowWidth < SMALL_SCREEN_BREAKPOINT ? "mobile" : "tablet"}
          className={s.collectionImages}
        >
          <ImageFaders />
        </div>
      </div>
      <HeroTitle />
      <div className={s.containerText}>
        <HeroText />
      </div>
    </>
  );
};
