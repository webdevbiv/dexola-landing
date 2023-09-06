import { useWindowWidth } from "../../hooks/useWindowWidth";

import { featuresCardsData as getCards } from "./featuresCardsData";

import arrow from "../../assets/images/icons/button-arrow.svg";

import s from "./Features.module.scss";

export const FeaturesList = () => {
  const windowWidth = useWindowWidth();
  const isRetina = window.devicePixelRatio > 1;
  const cards = getCards(windowWidth, isRetina);
  const handleClick = () => {
    window.location.hash = "#join-us";

    setTimeout(() => {
      history.replaceState(null, null, " ");
    }, 0);
  };

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
            <button
              className={s.button}
              onClick={handleClick}
            >
              <img
                src={arrow}
                alt='join-now'
                className={s.arrow}
              />
              <span>discover now</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
