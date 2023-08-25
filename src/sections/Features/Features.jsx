import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import s from "./Features.module.scss";
import imgMobile01 from "../../images/features/mobile/(1).webp";
import imgMobile02 from "../../images/features/mobile/(2).webp";
import imgMobile03 from "../../images/features/mobile/(3).webp";
import arrow from "../../images/icons/button-arrow.svg";
import { Title } from "../../components/Title/Title";

const cards = [
  {
    imgMobile: imgMobile01,
    alt: "star runner nft image",
    number: "01",
    title: "STRU Token sale",
    text: "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    link: "",
  },
  {
    imgMobile: imgMobile02,
    alt: "star runner nft image",
    number: "02",
    title: "Staking",
    text: "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
    link: "",
  },
  {
    imgMobile: imgMobile03,
    alt: "star runner nft image",
    number: "03",
    title: "NFT minting",
    text: "Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey like never before.",
    link: "",
  },
];
export const Features = () => {
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
              <img
                src={card.imgMobile}
                className={s.cardImage}
                alt={card.alt}
              />
              <div className={s.cardContent}>
                <h4>
                  <span>{card.number}</span>
                  <span>{card.title}</span>
                </h4>
                <p>{card.text}</p>
                <div className={s.buttonWrapper}>
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
