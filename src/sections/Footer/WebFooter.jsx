import { SocialLinksList } from "./SocialLinksList";
import { DexolaLink } from "./DexolaLink";
import s from "./Footer.module.scss";

export const WebFooter = () => {
  return (
    <>
      <DexolaLink />
      <div className={s.divider}>
        <SocialLinksList />
      </div>
      <p className={s.text}>© All rights reserved</p>
    </>
  );
};
