// Components
import { HeroTitle } from "./HeroTitle";
import { ImageFaders } from "./ImageFaders";
import { HeroText } from "./HeroText";

// Constants/Utilities/Styles
import s from "./Hero.module.scss";

export const HeroContentLarge = () => {
  return (
    <>
      <div className={s.border}>
        <div className={s.containerWeb}>
          <div className={s.wrapper}>
            <HeroText />
            <div className={s.collectionImages}>
              <ImageFaders />
            </div>
          </div>
        </div>
      </div>
      <HeroTitle />
    </>
  );
};
