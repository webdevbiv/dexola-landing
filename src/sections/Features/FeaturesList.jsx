// Hooks
import { useWindowWidth } from "../../hooks/useWindowWidth";

// Utils
import { featuresCardsData as getCards } from "./featuresCardsData";

// Assets
import arrow from "../../assets/images/icons/button-arrow.svg";

// Styles
import s from "./Features.module.scss";

export const FeaturesList = () => {
  const windowWidth = useWindowWidth();
  const isRetina = window.devicePixelRatio > 1;
  const cards = getCards(windowWidth, isRetina);
  console.log(cards);

  return (
    <ul className={s.cardsList}>
      {cards.map((card) => (
        <li
          className={s.card}
          key={card.number}
        >
          <div className={s.wrapperCardContent}>
            <div className={s.containerImage}>
              <img
                src={card.imgSrc}
                className={s.cardImage}
                alt={card.alt}
              />
            </div>
            <div className={s.cardContent}>
              <h4>
                <span>{card.number}</span>
                <span>{card.title}</span>
              </h4>
              <p>{card.text}</p>
            </div>
          </div>
          <div className={s.wrapperButton}>
            <a
              href={card.link}
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
        </li>
      ))}
    </ul>
  );
};
