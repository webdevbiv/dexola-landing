import PropTypes from "prop-types";
import { ImageFader } from "../../components/ImageFader/ImageFader";

export const ImageFaders = ({ firstImageSet, secondImageSet }) => {
  return (
    <>
      <ImageFader
        images={firstImageSet}
        delay={0}
      />
      <ImageFader
        images={secondImageSet}
        delay={1000}
      />
    </>
  );
};

ImageFaders.propTypes = {
  firstImageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondImageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
};
