import { Container } from "../../components/Container/Container";
import logo from "../../images/logo.svg";
import arrow from "../../images/button-arrow.svg";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className={s.wrapper}>
          <a
            href="https://dexola.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={logo} alt="logo" className={s.logo} />
          </a>
          <button className={s.button}>
            <img src={arrow} alt="join-now" className={s.arrow} />
            <span>Join Now</span>
          </button>
        </div>
      </Container>
    </header>
  );
};
