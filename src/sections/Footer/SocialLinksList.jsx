import s from "./Footer.module.scss";
import { socialLinks } from "./socialLinks";
export const SocialLinksList = () => {
  return (
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
  );
};
