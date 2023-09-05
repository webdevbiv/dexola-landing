import s from "./Hero.module.scss";

const title = "DEXOLA CAMP";
export const HeroTitle = () => {
  return (
    <div className={s.runningTextWrapper}>
      <h1 className={s.runningText}>{title}</h1>
    </div>
  );
};
