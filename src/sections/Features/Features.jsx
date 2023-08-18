import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import s from "./Features.module.scss";
import img01 from "../../images/star-runner/01.png";
import img02 from "../../images/star-runner/02.png";
import img03 from "../../images/star-runner/03.png";
import arrow from "../../images/icons/button-arrow.svg";
import { Title } from "../../components/Title/Title";

export const Features = () => {
  return (
    <Section id={"features"}>
      <Container>
        <Title text={"Features"} number={"01"} />
        <div className={s.description}>
          <h3 className={s.subTitle}>About StarRunner</h3>
          <p className={s.text}>
            The StarRunner Blockchain Ecosystem isn&#39;t a mere playground;
            it&#39;s a living, evolving entity that adapts to the desires and
            creativity of its players.
          </p>
        </div>
        <ul className={s.cardsList}>
          <li className={s.card}>
            <img src={img01} alt="star runner nft" />
            <div className={s.cardContent}>
              <h4>
                <span>01</span>
                <span>STRU Token sale</span>
              </h4>
              <p>
                The StarRunner Token the exclusive crypto currency fueling the
                adventure of the Play-to-Earn sensation.
              </p>
              <div className={s.buttonWrapper}>
                <button className={s.button}>
                  <img src={arrow} alt="join-now" className={s.arrow} />
                  <span>discover now</span>
                </button>
              </div>
            </div>
          </li>
          <li className={s.card}>
            <img src={img02} alt="star runner nft" />
            <div className={s.cardContent}>
              <h4>
                <span>02</span>
                <span>Staking</span>
              </h4>
              <p>
                Join a thriving community of stakers, united by their passion
                for exploration, strategy, and gaming.
              </p>
              <div className={s.buttonWrapper}>
                <button className={s.button}>
                  <img src={arrow} alt="join-now" className={s.arrow} />
                  <span>discover now</span>
                </button>
              </div>
            </div>
          </li>
          <li className={s.card}>
            <img src={img03} alt="star runner nft" />
            <div className={s.cardContent}>
              <h4>
                <span>03</span>
                <span>NFT minting</span>
              </h4>
              <p>
                Every StarRunner NFT tells a story – YOUR story. This NFT
                encapsulates the essence of your journey like never before.
              </p>
              <div className={s.buttonWrapper}>
                <button className={s.button}>
                  <img src={arrow} alt="join-now" className={s.arrow} />
                  <span>discover now</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
