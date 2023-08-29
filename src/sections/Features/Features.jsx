import { Section } from "../../components/Section/Section";
import s from "./Features.module.scss";
import imgMobile01 from "../../assets/images/features/mobile/(1).webp";
import imgMobile02 from "../../assets/images/features/mobile/(2).webp";
import imgMobile03 from "../../assets/images/features/mobile/(3).webp";
import imgTablet01 from "../../assets/images/features/tablet/01.webp";
import imgTablet02 from "../../assets/images/features/tablet/02.webp";
import imgTablet03 from "../../assets/images/features/tablet/03.webp";
import imgWeb01 from "../../assets/images/features/web/01.webp";
import imgWeb02 from "../../assets/images/features/web/02.webp";
import imgWeb03 from "../../assets/images/features/web/03.webp";
import arrow from "../../assets/images/icons/button-arrow.svg";
import { Title } from "../../components/Title/Title";
import { useEffect, useState } from "react";

const cards = [
  {
    imgMobile: imgMobile01,
    imgTablet: imgTablet01,
    imgWeb: imgWeb01,
    alt: "star runner nft image",
    number: "01",
    title: "STRU Token sale",
    text: "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    link: "",
  },
  {
    imgMobile: imgMobile02,
    imgTablet: imgTablet02,
    imgWeb: imgWeb02,
    alt: "star runner nft image",
    number: "02",
    title: "Staking",
    text: "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
    link: "",
  },
  {
    imgMobile: imgMobile03,
    imgTablet: imgTablet03,
    imgWeb: imgWeb03,
    alt: "star runner nft image",
    number: "03",
    title: "NFT minting",
    text: "Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey like never before.",
    link: "",
  },
];
export const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

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
                      : windowWidth >= 744 && windowWidth < 1440
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
                  src={card.link}
                  target='_blank'
                  rel='noreferrer noopener'
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
