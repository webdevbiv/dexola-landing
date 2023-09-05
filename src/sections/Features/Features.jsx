// Components
import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import { FeaturesList } from "./FeaturesList";

// Styles
import s from "./Features.module.scss";

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
        <FeaturesList />
      </div>
    </Section>
  );
};
