import { useEffect, useState } from "react";
import { ImageFader } from "../../components/ImageFader/ImageFader";
import { Section } from "../../components/Section/Section";
import { web01, web02 } from "../../assets/images/hero/web/index.js";
// import { tablet01, tablet02 } from "../../assets/images/hero/tablet/index.js";
import { mobile01, mobile02 } from "../../assets/images/hero/mobile/index.js";
import { hero01, hero02 } from "../../assets/images/hero/universal/index.js";

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
            <div className={s.containerWeb}>
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
            </div>
          </div>
          <HeroTitle />
        </Section>
      </>
    );
  }

  if (windowWidth < 1440) {
    return (
      <Section id={"hero"}>
        <div className={s.containerPictures}>
          <div
            key={windowWidth < 500 ? "mobile" : "tablet"}
            className={s.collectionImages}
          >
            <ImageFader
              images={windowWidth < 500 ? mobile01 : hero01}
              delay={0}
              placeholder={mobile01[0]}
            />
            <ImageFader
              images={windowWidth < 500 ? mobile02 : hero02}
              placeholder={mobile02[0]}
              delay={1000}
            />
          </div>
        </div>
        <HeroTitle />
        <div className={s.containerText}>
          <Text />
        </div>
      </Section>
    );
  }
};
