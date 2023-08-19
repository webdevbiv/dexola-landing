import { Container } from "../../components/Container/Container";
import { ImageFader } from "../../components/ImageFader/ImageFader";
import { Section } from "../../components/Section/Section";
import { images01 } from "../../images/nfts/variant01/index.js";
import { images02 } from "../../images/nfts/variant02/index.js";

import s from "./Hero.module.scss";

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
                <ImageFader
                  imgArray={images01}
                  startTime={1}
                />
                <ImageFader
                  imgArray={images02}
                  startTime={2}
                />
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
