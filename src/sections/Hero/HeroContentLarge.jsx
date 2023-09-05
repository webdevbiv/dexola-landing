//Components
import PropTypes from "prop-types";
import { HeroTitle } from "./HeroTitle";
import { ImageFaders } from "./ImageFaders";
import { HeroText } from "./HeroText";

//Styles
import s from "./Hero.module.scss";

export const HeroContentLarge = ({ firstImageSet, secondImageSet }) => {
  return (
    <>
      <div className={s.border}>
        <div className={s.containerWeb}>
          <div className={s.wrapper}>
            <HeroText />
            <div className={s.collectionImages}>
              <ImageFaders
                firstImageSet={firstImageSet}
                secondImageSet={secondImageSet}
              />
            </div>
          </div>
        </div>
      </div>
      <HeroTitle />
    </>
  );
};

HeroContentLarge.propTypes = {
  firstImageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondImageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
};
