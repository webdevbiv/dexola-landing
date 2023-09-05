// Modules
import PropTypes from "prop-types";

// Assets
import arrow from "../../assets/images/icons/button-arrow.svg";

// Styles
import s from "./Features.module.scss";

export const FeaturesCard = ({ card }) => {
  return (
    <li className={s.card}>
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
  );
};

FeaturesCard.propTypes = {
  card: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
