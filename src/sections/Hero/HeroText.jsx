// Constants/Utilities/Styles
import s from "./Hero.module.scss";
const text =
  "Prepare to be transported beyond the boundaries of traditional gaming with the StarRunner Ecosystem – the beating heart that drives the adrenaline-charged galactic P2E odyssey of 'StarRunner.'";

export const HeroText = () => {
  return (
    <>
      <p className={s.text}>{text}</p>
    </>
  );
};
