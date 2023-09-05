import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import { renderWebTable as WebTable } from "./renderWebTable";
import { renderMobileTable as MobileTable } from "./renderMobileTable";
import { DataTopNfts as data } from "./data";
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
        {windowWidth < 744 ? (
          <MobileTable data={data} />
        ) : (
          <WebTable data={data} />
        )}
      </div>
    </Section>
  );
};
