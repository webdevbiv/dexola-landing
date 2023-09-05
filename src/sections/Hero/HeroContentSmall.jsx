//Hooks
import { useWindowWidth } from "../../hooks/useWindowWidth";

//Components
import PropTypes from "prop-types";
import { ImageFaders } from "./ImageFaders";
import { HeroTitle } from "./HeroTitle";
import { HeroText } from "./HeroText";

//Styles
import s from "./Hero.module.scss";

export const HeroContentSmall = ({ firstImageSet, secondImageSet }) => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className={s.containerPictures}>
        <div
          key={windowWidth < 420 ? "mobile" : "tablet"}
          className={s.collectionImages}
        >
          <ImageFaders
            firstImageSet={firstImageSet}
            secondImageSet={secondImageSet}
          />
        </div>
      </div>
      <HeroTitle />
      <div className={s.containerText}>
        <HeroText />
      </div>
    </>
  );
};

HeroContentSmall.propTypes = {
  firstImageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondImageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
};
