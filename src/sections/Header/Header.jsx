import { Logo } from "../../components/Logo/logo";
import { JoinNowButton } from "../../components/JoinUsButton/JoinNowButton";

import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <Logo />
        <JoinNowButton />
      </div>
    </header>
  );
};
