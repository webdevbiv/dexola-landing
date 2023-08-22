import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import s from "./Features.module.scss";
import img01 from "../../images/star-runner/01.png";
import img02 from "../../images/star-runner/02.png";
import img03 from "../../images/star-runner/03.png";
import arrow from "../../images/icons/button-arrow.svg";
import { Title } from "../../components/Title/Title";

const cards = [
  {
    img: img01,
    alt: "star runner nft image",
    number: "01",
    title: "STRU Token sale",
    text: "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    link: "",
  },
  {
    img: img02,
    alt: "star runner nft image",
    number: "02",
    title: "Staking",
    text: "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
    link: "",
  },
  {
    img: img03,
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
      <Container>
        <Title
          text={"Features"}
          number={"01"}
        />
        <div className={s.description}>
          <h3 className={s.subTitle}>About StarRunner</h3>
          <p className={s.text}>
            The StarRunner Blockchain Ecosystem isn&#39;t a mere playground;
            it&#39;s a living, evolving entity that adapts to the desires and
            creativity of its players.
          </p>
        </div>
        <ul className={s.cardsList}>
          {cards.map((card) => (
            <li
              className={s.card}
              key={card.number}
            >
              <div
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                // src={card.img}
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
      </Container>
    </Section>
  );
};
