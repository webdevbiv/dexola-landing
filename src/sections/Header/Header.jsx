import logo from "../../images/icons/logo.svg";
import arrow from "../../images/icons/button-arrow.svg";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <a
          href='https://dexola.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            src={logo}
            alt='logo'
            className={s.logo}
          />
        </a>
        <a
          href='#join-us'
          className={s.buttonLink}
        >
          <button className={s.button}>
            <img
              src={arrow}
              alt='join-now'
              className={s.arrow}
            />
            <span>Join Now</span>
          </button>
        </a>
      </div>
    </header>
  );
};
