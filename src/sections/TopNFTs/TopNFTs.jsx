import { useWindowWidth } from "../../hooks/useWindowWidth";

import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import { WebTable } from "./WebTable";
import { MobileTable } from "./MobileTable";

import { DataTopNfts as data } from "./data";
import { MEDIUM_SCREEN_BREAKPOINT } from "../../styles/breakpoints";

import s from "./TopNFTs.module.scss";

export const TopNFTs = () => {
  const windowWidth = useWindowWidth();

  return (
    <Section id={"top-nfts"}>
      <Title
        text={"Top NFTs"}
        number={"02"}
      />
      <div className={s.container}>
        {windowWidth < MEDIUM_SCREEN_BREAKPOINT ? (
          <MobileTable data={data} />
        ) : (
          <WebTable data={data} />
        )}
      </div>
    </Section>
  );
};
