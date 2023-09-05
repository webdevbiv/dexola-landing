import s from "./Footer.module.scss";
export const DexolaLink = () => {
  return (
    <a
      href='https://dexola.com/'
      target='_blank'
      rel='noreferrer noopener'
      className={s.link}
    >
      Designed by Dexola - 2023
    </a>
  );
};
