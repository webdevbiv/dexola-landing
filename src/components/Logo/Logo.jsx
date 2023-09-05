// Assets
import logo from "../../assets/images/icons/logo.svg";

// Styles
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
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
  );
};
