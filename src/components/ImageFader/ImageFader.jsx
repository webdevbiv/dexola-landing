import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import s from "./ImageFader.module.scss";

export const ImageFader = ({ imgArray, startTime }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(imgArray[0]);
  const [nextImage, setNextImage] = useState(imgArray[1]);
  const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImageIndex((prevIndex) => {
  //       const newIndex = (prevIndex + 1) % imgArray.length;
  //       if (isActive) {
  //         setNextImage(imgArray[newIndex]);
  //       } else {
  //         setCurrentImage(imgArray[newIndex]);
  //       }
  //       return newIndex;
  //     });
  //     setIsActive(!isActive);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [imageIndex, isActive, imgArray]);

  useEffect(() => {
    let interval;

    const startTimerWithDelay = () => {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % imgArray.length;
          if (isActive) {
            setNextImage(imgArray[newIndex]);
          } else {
            setCurrentImage(imgArray[newIndex]);
          }
          return newIndex;
        });
        setIsActive(!isActive);
      }, 2000);
    };

    const delayStartTime = setTimeout(() => {
      startTimerWithDelay();
    }, startTime * 1000); // Set the delay time using the startTime variable

    // Cleanup function to clear the interval and timeout when the component unmounts or when the dependency array changes
    return () => {
      clearInterval(interval);
      clearTimeout(delayStartTime);
    };
  }, [imageIndex, isActive, imgArray, startTime]);

  return (
    <div className={s.imgWrapper}>
      <img
        src={currentImage}
        alt=''
        className={`${s.img} ${isActive ? s.active : s.inactive}`}
      />
      <img
        src={nextImage}
        alt=''
        className={`${s.img} ${isActive ? s.inactive : s.active}`}
      />
    </div>
  );
};

ImageFader.propTypes = {
  imgArray: PropTypes.array.isRequired,
  startTime: PropTypes.number.isRequired,
};
