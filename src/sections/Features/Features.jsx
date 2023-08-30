import { Section } from "../../components/Section/Section";
import s from "./Features.module.scss";

import { imgsMobile, imgsTablet, imgsWeb } from "../../assets/images/features";
import arrow from "../../assets/images/icons/button-arrow.svg";
import { Title } from "../../components/Title/Title";
import { useEffect, useState } from "react";

const cards = [
  {
    imgMobile: imgsMobile[0],
    imgTablet: imgsTablet[0],
    imgWeb: imgsWeb[0],
    alt: "star runner nft image",
    number: "01",
    title: "STRU Token sale",
    text: "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    link: "#join-us",
  },
  {
    imgMobile: imgsMobile[1],
    imgTablet: imgsTablet[1],
    imgWeb: imgsWeb[1],
    alt: "star runner nft image",
    number: "02",
    title: "Staking",
    text: "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
    link: "#join-us",
  },
  {
    imgMobile: imgsMobile[2],
    imgTablet: imgsTablet[2],
    imgWeb: imgsWeb[2],
    alt: "star runner nft image",
    number: "03",
    title: "NFT minting",
    text: "Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey like never before.",
    link: "#join-us",
  },
];
export const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <img
                  src={
                    windowWidth >= 1440
                      ? card.imgWeb
                      : windowWidth >= 420 && windowWidth < 1440
                      ? card.imgTablet
                      : card.imgMobile
                  }
                  className={s.cardImage}
                  alt={card.alt}
                />
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
