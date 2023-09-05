// Assets
import arrow from "../../assets/images/icons/button-arrow.svg";

// Styles
import s from "./JoinNowButton.module.scss";

export const JoinNowButton = () => {
  const handleClick = () => {
    window.location.hash = "#join-us";

    setTimeout(() => {
      history.replaceState(null, null, " ");
    }, 0);
  };

  return (
    <button
      className={s.button}
      onClick={handleClick}
    >
      <img
        src={arrow}
        alt='Arrow Icon'
        className={s.arrow}
      />
      <span>Join Now</span>
    </button>
  );
};
