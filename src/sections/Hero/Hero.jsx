import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { ImageFader } from "../../components/ImageFader/ImageFader";
import { Section } from "../../components/Section/Section";
import { images01 } from "../../images/nfts/variant01/index.js";
import { images02 } from "../../images/nfts/variant02/index.js";

import s from "./Hero.module.scss";

const Text = () => (
  <p className={s.text}>
    Prepare to be transported beyond the boundaries of traditional gaming with
    the StarRunner Ecosystem – the beating heart that drives the
    adrenaline-charged galactic P2E odyssey of &#39;StarRunner.&#39;
  </p>
);

const ImageGroup = () => (
  <div className={s.collectionImages}>
    <ImageFader
      images={images01}
      delay={0}
    />
    <ImageFader
      images={images02}
      delay={1000}
    />
  </div>
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
  }, []);

  if (windowWidth >= 1440) {
    return (
      <>
        <Section id={"hero"}>
          <div className={s.border}>
            <Container>
              <div className={s.wrapper}>
                <Text />
                <ImageGroup />
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
      <>
        <Section id={"hero"}>
          <Container>
            <div className={s.wrapperTablet}>
              <div className={s.collectionImages}>
                <ImageGroup />
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
      </>
    );
  }
};
