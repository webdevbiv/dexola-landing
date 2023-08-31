import { Section } from "../../components/Section/Section";
import s from "./Features.module.scss";

import {
  imgsMobile,
  imgsMobileX2,
  imgsMobileQuality,
  imgsMobileQualityX2,
  imgsTabletQuality,
  imgsTabletQualityX2,
  imgsWeb,
  imgsWebX2,
} from "../../assets/images/features";
import arrow from "../../assets/images/icons/button-arrow.svg";
import { Title } from "../../components/Title/Title";
import { useEffect, useState } from "react";
// import { Skeleton } from "../../components/Skeleton/Skeleton";

const cards = [
  {
    // Mobile images
    imgMobile: imgsMobile[0],
    imgMobileX2: imgsMobileX2[1],
    imgMobileQuality: imgsMobileQuality[0],
    imgMobileQualityX2: imgsMobileQualityX2[0],
    // Tablet images
    imgTablet: imgsTabletQuality[0],
    imgTabletX2: imgsTabletQualityX2[0],
    // Web images
    imgWeb: imgsWeb[0],
    imgWebX2: imgsWebX2[0],
    alt: "star runner nft image",
    number: "01",
    title: "STRU Token sale",
    text: "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    link: "#join-us",
  },
  {
    // Mobile images
    imgMobile: imgsMobile[1],
    imgMobileX2: imgsMobileX2[1],
    imgMobileQuality: imgsMobileQuality[1],
    imgMobileQualityX2: imgsMobileQualityX2[1],
    // Tablet images
    imgTablet: imgsTabletQuality[1],
    imgTabletX2: imgsTabletQualityX2[1],
    // Web images
    imgWeb: imgsWeb[1],
    imgWebX2: imgsWebX2[1],
    alt: "star runner nft image",
    number: "02",
    title: "Staking",
    text: "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
    link: "#join-us",
  },
  {
    // Mobile images
    imgMobile: imgsMobile[2],
    imgMobileX2: imgsMobileX2[1],
    imgMobileQuality: imgsMobileQuality[2],
    imgMobileQualityX2: imgsMobileQualityX2[2],
    // Tablet images
    imgTablet: imgsTabletQuality[2],
    imgTabletX2: imgsTabletQualityX2[2],
    // Web images
    imgWeb: imgsWeb[2],
    imgWebX2: imgsWebX2[2],
    alt: "star runner nft image",
    number: "03",
    title: "NFT minting",
    text: "Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey like never before.",
    link: "#join-us",
  },
];
export const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [loadedImages, setLoadedImages] = useState([]);
  const isRetina = window.devicePixelRatio > 1;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const handleImageLoad = (index) => {
  //   setLoadedImages((prev) => [...prev, index]);
  // };

  return (
    <Section id={"features"}>
      <Title
        text={"Features"}
        number={"01"}
      />
      <div className={s.containerText}>
        <div className={s.description}>
          <h3 className={s.subTitle}>About StarRunner</h3>
          <p className={s.text}>
            The StarRunner Blockchain Ecosystem isn&#39;t a mere playground;
            it&#39;s a living, evolving entity that adapts to the desires and
            creativity of its players.
          </p>
        </div>
      </div>
      <div className={s.containerCardsList}>
        <ul className={s.cardsList}>
          {cards.map((card) => (
            <li
              className={s.card}
              key={card.number}
            >
              <div className={s.wrapperCardContent}>
                <div className={s.containerImage}>
                  <img
                    src={
                      windowWidth >= 1440
                        ? isRetina
                          ? card.imgWebX2
                          : card.imgWeb
                        : windowWidth >= 744 && windowWidth < 1440
                        ? isRetina
                          ? card.imgTabletX2
                          : card.imgTablet
                        : windowWidth >= 420 && windowWidth < 744
                        ? isRetina
                          ? card.imgMobileQualityX2
                          : card.imgMobileQuality
                        : isRetina
                        ? card.imgMobileX2
                        : card.imgMobile
                    }
                    className={s.cardImage}
                    alt={card.alt}
                    // onLoad={() => handleImageLoad(card.number)}
                  />
                  {/* {!loadedImages.includes(card.number) && <Skeleton />} */}
                </div>
                <div className={s.cardContent}>
                  <h4>
                    <span>{card.number}</span>
                    <span>{card.title}</span>
                  </h4>
                  <p>{card.text}</p>
                </div>
              </div>
              <div className={s.wrapperButton}>
                <a
                  href={card.link}
                  className={s.buttonLink}
                >
                  <button className={s.button}>
                    <img
                      src={arrow}
                      alt='join-now'
                      className={s.arrow}
                    />
                    <span>discover now</span>
                  </button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
