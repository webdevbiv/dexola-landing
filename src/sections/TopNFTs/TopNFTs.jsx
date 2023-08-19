import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import img01 from "../../images/nfts/top/01.png";
import img02 from "../../images/nfts/top/02.png";
import img03 from "../../images/nfts/top/03.png";
import img04 from "../../images/nfts/top/04.png";
import img05 from "../../images/nfts/top/05.png";
import s from "./TopNFTs.module.scss";

const topNfts = [
  {
    avatar: img01,
    nftName: "Legendary Artifact",
    rarityLevel: "Legendary",
    totalGames: 189,
    gamesWon: 125,
    price: 2.5,
  },
  {
    avatar: img02,
    nftName: "Epic Warrior",
    rarityLevel: "Rare",
    totalGames: 134,
    gamesWon: 100,
    price: 1.5,
  },
  {
    avatar: img03,
    nftName: "Mystic Spellbook",
    rarityLevel: "Common",
    totalGames: 133,
    gamesWon: 43,
    price: 1.2,
  },
  {
    avatar: img04,
    nftName: "Common Potion",
    rarityLevel: "Heroic",
    totalGames: 87,
    gamesWon: 23,
    price: 2.8,
  },
  {
    avatar: img05,
    nftName: "Heroic Blade",
    rarityLevel: "Epic",
    totalGames: 56,
    gamesWon: 15,
    price: 0.5,
  },
];

export const TopNFTs = () => {
  return (
    <Section id={"top-nfts"}>
      <Container>
        <Title
          text={"Top NFTs"}
          number={"02"}
        />
        <table
          className={s.table}
          cellSpacing='0'
          cellPadding='0'
        >
          <thead>
            <tr>
              <th></th>
              <th>NFT Name</th>
              <th>Rarity Level</th>
              <th>Total Games</th>
              <th>Games Won</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {topNfts.map((nft, index) => (
              <tr
                key={index}
                className={`${s.row} ${index % 2 === 0 ? s.highlighted : ""}`}
              >
                <td>
                  <img
                    src={nft.avatar}
                    alt={`Avatar for ${nft.nftName}`}
                  />
                </td>
                <td>{nft.nftName}</td>
                <td>{nft.rarityLevel}</td>
                <td>{nft.totalGames}</td>
                <td>{nft.gamesWon}</td>
                <td>{nft.price.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Section>
  );
};
