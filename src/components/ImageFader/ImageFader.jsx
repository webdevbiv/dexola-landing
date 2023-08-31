// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import s from "./ImageFader.module.scss";

// export const ImageFader = ({ images, delay }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const startInterval = () => {
//       return setInterval(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 4000); // 4 seconds for each image
//     };

//     const timeout = setTimeout(startInterval, delay);

//     return () => {
//       clearTimeout(timeout); // Cleanup timeout
//       clearInterval(startInterval); // Cleanup interval
//     };
//   }, [images, delay]);

//   return (
//     <div className={s.imageContainer}>
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt={`Nft image ${index}`}
//           className={`${s.image} ${
//             index === currentImageIndex ? s.active : ""
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// ImageFader.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   delay: PropTypes.number.isRequired,
// };

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import s from "./ImageFader.module.scss";
import { Skeleton } from "../Skeleton/Skeleton";

export const ImageFader = ({ images, delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds for each image

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timeout); // Cleanup timeout
      clearInterval(interval); // Cleanup interval
    };
  }, [images, delay]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <div className={s.imageContainer}>
      {images.map((src, index) => (
        <div
          key={index}
          className={s.imageWrapper}
        >
          <img
            src={src}
            alt={`Nft image ${index}`}
            onLoad={() => handleImageLoad(index)}
            className={`${s.image} ${
              index === currentImageIndex ? s.active : ""
            } `}
          />
          {loadedImages.includes(index) && <Skeleton />}
        </div>
      ))}
    </div>
  );
};

ImageFader.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
};
