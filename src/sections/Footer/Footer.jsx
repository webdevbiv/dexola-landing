import s from "./Footer.module.scss";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { LARGE_SCREEN_BREAKPOINT } from "../../styles/breakpoints";
import { MobileFooter } from "./MobileFooter";
import { WebFooter } from "./WebFooter";
export const Footer = () => {
  const windowWidth = useWindowWidth();
  const isWeb = windowWidth >= LARGE_SCREEN_BREAKPOINT;
  return (
    <footer>
      <div className={s.border}>
        <div className={isWeb ? s.containerWeb : s.container}>
          <div className={s.wrapper}>
            {isWeb ? <WebFooter /> : <MobileFooter />}
          </div>
        </div>
      </div>
    </footer>
  );
};
