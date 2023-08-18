import s from "./Hero.module.scss";
import placeHolder from "../../images/nfts/placeholder.png";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";

export const Hero = () => {
  return (
    <>
      <Section id={"hero"}>
        <div className={s.border}>
          <Container>
            <div className={s.wrapper}>
              <p className={s.text}>
                Prepare to be transported beyond the boundaries of traditional
                gaming with the StarRunner Ecosystem – the beating heart that
                drives the adrenaline-charged galactic P2E odyssey of
                &#39;StarRunner.&#39;
              </p>
              <div className={s.collectionImages}>
                <div className={s.imgWrapper}>
                  <img src={placeHolder} alt="" className={s.img} />
                </div>
                <div className={s.imgWrapper}>
                  <img src={placeHolder} alt="" className={s.img} />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className={s.runningTextWrapper}>
          <div className={s.runningText}>DEXOLA CAMP</div>
        </div>
      </Section>
    </>
  );
};
