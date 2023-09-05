import { JoinNowButton } from "./JoinNowButton";

import s from "./Header.module.scss";
import { Logo } from "./Logo";

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
