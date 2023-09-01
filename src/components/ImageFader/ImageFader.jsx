import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import s from "./ImageFader.module.scss";

export const ImageFader = ({ images, delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Handler function to set isPageLoaded to true when the page is fully loaded
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    // Add the event listener to detect when the page is fully loaded
    window.addEventListener("load", handlePageLoad);

    // Clear the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    const startInterval = () => {
      return setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // 4 seconds for each image
    };

    if (isPageLoaded) {
      // Start the interval only when the page is fully loaded
      const timeout = setTimeout(() => {
        startInterval();
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [images, delay, isPageLoaded]);
  console.log(images);

  return (
    <div className={s.imageContainer}>
      {!isPageLoaded ? (
        <img
          src={images[0]}
          alt={`Nft image `}
          className={s.image}
        />
      ) : (
        images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Nft image ${index}`}
            className={`${s.image} ${
              index === currentImageIndex ? s.active : ""
            }`}
          />
        ))
      )}
    </div>
  );
};

ImageFader.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
};

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
