import { Container } from "../../components/Container/Container";
import s from "./Footer.module.scss";
import facebook from "../../images/icons/social-facebook.svg";
import instagram from "../../images/icons/social-instagram.svg";
import discord from "../../images/icons/social-discord.svg";
import telegram from "../../images/icons/social-telegram.svg";
import { useEffect, useState } from "react";

const socialLinks = [
  { icon: facebook, link: "", name: "facebook  icon image" },
  { icon: instagram, link: "", name: "instagram icon image" },
  { icon: discord, link: "", name: "discord icon image" },
  { icon: telegram, link: "", name: "telegram icon image" },
];

export const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth >= 1440) {
    return (
      <footer>
        <div className={s.border}>
          <Container>
            <div className={s.wrapper}>
              <a
                href='https://dexola.com/'
                target='_blank'
                rel='noreferrer noopener'
                className={s.link}
              >
                Designed by Dexola - 2023
              </a>
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
  }
  if (windowWidth < 1440) {
    return (
      <footer>
        <div className={s.border}>
          <Container>
            <div className={s.wrapper}>
              <div className={s.textTabletWrapper}>
                <a
                  href='https://dexola.com/'
                  target='_blank'
                  rel='noreferrer noopener'
                  className={s.link}
                >
                  Designed by Dexola - 2023
                </a>
                <p className={s.text}>© All rights reserved</p>
              </div>
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
          </Container>
        </div>
      </footer>
    );
  }
};
