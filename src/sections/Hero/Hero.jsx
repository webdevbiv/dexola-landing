import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { ImageFader } from "../../components/ImageFader/ImageFader";
import { Section } from "../../components/Section/Section";
import { web01, web02 } from "../../images/nfts/web/index.js";
import { tablet01, tablet02 } from "../../images/nfts/tablet/index.js";
import { mobile01, mobile02 } from "../../images/nfts/mobile/index.js";

import s from "./Hero.module.scss";

const Text = () => (
  <p className={s.text}>
    Prepare to be transported beyond the boundaries of traditional gaming with
    the StarRunner Ecosystem – the beating heart that drives the
    adrenaline-charged galactic P2E odyssey of &#39;StarRunner.&#39;
  </p>
);

const HeroTitle = () => (
  <div className={s.runningTextWrapper}>
    <h1 className={s.runningText}>DEXOLA CAMP</h1>
  </div>
);

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  if (windowWidth >= 1440) {
    return (
      <>
        <Section id={"hero"}>
          <div className={s.border}>
            <Container>
              <div className={s.wrapper}>
                <Text />
                <div className={s.collectionImages}>
                  <ImageFader
                    images={web01}
                    delay={0}
                  />
                  <ImageFader
                    images={web02}
                    delay={1000}
                  />
                </div>
              </div>
            </Container>
          </div>
          <HeroTitle />
        </Section>
      </>
    );
  }

  if (windowWidth < 1440) {
    return (
      <Section id={"hero"}>
        <Container>
          <div className={s.wrapperTablet}>
            <div
              key={windowWidth < 744 ? mobile01 : tablet01}
              className={s.collectionImages}
            >
              <ImageFader
                images={windowWidth < 744 ? mobile01 : tablet01}
                delay={0}
              />
              <ImageFader
                images={windowWidth < 744 ? mobile02 : tablet02}
                delay={1000}
              />
            </div>
          </div>
        </Container>
        <HeroTitle />
        <Container>
          <div className={s.wrapperTablet}>
            <Text />
          </div>
        </Container>
      </Section>
    );
  }
};
