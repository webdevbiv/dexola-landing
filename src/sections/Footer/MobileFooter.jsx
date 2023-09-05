import { SocialLinksList } from "./SocialLinksList";
import { DexolaLink } from "./DexolaLink";
import s from "./Footer.module.scss";

export const MobileFooter = () => {
  return (
    <>
      <div className={s.textWrapper}>
        <DexolaLink />
        <p className={s.text}>© All rights reserved</p>
      </div>
      <SocialLinksList />
    </>
  );
};
