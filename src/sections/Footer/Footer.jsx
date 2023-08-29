import s from "./Footer.module.scss";
import facebook from "../../assets/images/icons/social-facebook.svg";
import instagram from "../../assets/images/icons/social-instagram.svg";
import discord from "../../assets/images/icons/social-discord.svg";
import telegram from "../../assets/images/icons/social-telegram.svg";
import { useEffect, useState } from "react";

const socialLinks = [
  { icon: facebook, link: "https://dexola.com/", name: "facebook  icon image" },
  {
    icon: instagram,
    link: "https://dexola.com/",
    name: "instagram icon image",
  },
  { icon: discord, link: "https://dexola.com/", name: "discord icon image" },
  { icon: telegram, link: "https://dexola.com/", name: "telegram icon image" },
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
          <div className={s.containerWeb}>
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
          </div>
        </div>
      </footer>
    );
  }
  if (windowWidth < 1440) {
    return (
      <footer>
        <div className={s.border}>
          <div className={s.container}>
            <div className={s.wrapper}>
              <div className={s.textWrapper}>
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
          </div>
        </div>
      </footer>
    );
  }
};
