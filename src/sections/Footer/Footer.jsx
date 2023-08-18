import { Container } from "../../components/Container/Container";
import s from "./Footer.module.scss";
import facebook from "../../images/icons/social-facebook.svg";
import instagram from "../../images/icons/social-instagram.svg";
import discord from "../../images/icons/social-discord.svg";
import telegram from "../../images/icons/social-telegram.svg";

export const Footer = () => {
  return (
    <footer>
      <div className={s.border}>
        <Container>
          <div className={s.wrapper}>
            <p className={s.text}>Designed by Dexola - 2023</p>

            <div className={s.divider}>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <a>
                    <img src={facebook} alt="facebook" className={s.icon} />
                  </a>
                </li>
                <li className={s.listItem}>
                  <a>
                    <img src={instagram} alt="instagram" className={s.icon} />
                  </a>
                </li>
                <li className={s.listItem}>
                  <a>
                    <img src={discord} alt="discord" className={s.icon} />
                  </a>
                </li>
                <li className={s.listItem}>
                  <a>
                    <img src={telegram} alt="telegram" className={s.icon} />
                  </a>
                </li>
              </ul>
            </div>

            <p className={s.text}>© All rights reserved</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
