import { Container } from "../../components/Container/Container";
import s from "./Footer.module.scss";
import facebook from "../../images/icons/social-facebook.svg";
import instagram from "../../images/icons/social-instagram.svg";
import discord from "../../images/icons/social-discord.svg";
import telegram from "../../images/icons/social-telegram.svg";

const socialLinks = [
  { icon: facebook, link: "", name: "facebook  icon image" },
  { icon: instagram, link: "", name: "instagram icon image" },
  { icon: discord, link: "", name: "discord icon image" },
  { icon: telegram, link: "", name: "telegram icon image" },
];

export const Footer = () => {
  return (
    <footer>
      <div className={s.border}>
        <Container>
          <div className={s.wrapper}>
            <p className={s.text}>Designed by Dexola - 2023</p>
            <div className={s.divider}>
              <ul className={s.list}>
                {socialLinks.map((item, index) => (
                  <li
                    className={s.listItem}
                    key={index}
                  >
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={s.icon}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className={s.text}>© All rights reserved</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
