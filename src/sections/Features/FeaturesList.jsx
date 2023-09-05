// Hooks
import { useWindowWidth } from "../../hooks/useWindowWidth";

// Components
import { FeaturesCard } from "./FeaturesCard";

// Utils
import { featuresCardsData as getCards } from "./featuresCardsData";

// Styles
import s from "./Features.module.scss";

export const FeaturesList = () => {
  const windowWidth = useWindowWidth();
  const isRetina = window.devicePixelRatio > 1;
  const cards = getCards(windowWidth, isRetina);
  console.log(cards);

  return (
    <ul className={s.cardsList}>
      {cards.map((card, index) => (
        <FeaturesCard
          key={index}
          card={card}
        />
      ))}
    </ul>
  );
};
