import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import s from "./ImageFader.module.scss";

export const ImageFader = ({ images, delay, placeholder }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const startInterval = () => {
      return setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // 4 seconds for each image
    };

    const timeout = setTimeout(startInterval, delay);

    return () => {
      clearTimeout(timeout); // Cleanup timeout
      clearInterval(startInterval); // Cleanup interval
    };
  }, [images, delay]);

  return (
    <div className={s.imageContainer}>
      {images.map((src, index) => (
        <LazyLoadImage
          PlaceholderSrc={placeholder}
          loading='lazy'
          key={index}
          src={src}
          alt={`Nft image ${index}`}
          className={`${s.image} ${
            index === currentImageIndex ? s.active : ""
          }`}
        />
      ))}
    </div>
  );
};

ImageFader.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
};
