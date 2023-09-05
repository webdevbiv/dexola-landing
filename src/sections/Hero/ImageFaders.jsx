import { ImageFader } from "../../components/ImageFader/ImageFader";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { getImageSet } from "./imagesSelector";

export const ImageFaders = () => {
  const windowWidth = useWindowWidth();
  const isRetina = window.devicePixelRatio > 1;
  const [firstImageSet, secondImageSet] = getImageSet(windowWidth, isRetina);
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
