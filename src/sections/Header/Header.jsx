import { Logo } from "../../components/Logo/logo";
import s from "./Header.module.scss";
import { JoinNowButton } from "../../components/JoinUsButton/JoinNowButton";

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
