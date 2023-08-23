import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import img01 from "../../images/nfts/avatars/01.png";
import img02 from "../../images/nfts/avatars/02.png";
import img03 from "../../images/nfts/avatars/03.png";
import img04 from "../../images/nfts/avatars/04.png";
import img05 from "../../images/nfts/avatars/05.png";
import s from "./TopNFTs.module.scss";

const topNfts = [
  {
    position: 1,
    avatar: img01,
    nftName: "Legendary Artifact",
    rarityLevel: "Legendary",
    totalGames: 189,
    gamesWon: 125,
    price: 2.5,
  },
  {
    position: 2,
    avatar: img02,
    nftName: "Epic Warrior",
    rarityLevel: "Rare",
    totalGames: 134,
    gamesWon: 100,
    price: 1.5,
  },
  {
    position: 3,
    avatar: img03,
    nftName: "Mystic Spellbook",
    rarityLevel: "Common",
    totalGames: 133,
    gamesWon: 43,
    price: 1.2,
  },
  {
    position: 4,
    avatar: img04,
    nftName: "Common Potion",
    rarityLevel: "Heroic",
    totalGames: 87,
    gamesWon: 23,
    price: 2.8,
  },
  {
    position: 5,
    avatar: img05,
    nftName: "Heroic Blade",
    rarityLevel: "Epic",
    totalGames: 56,
    gamesWon: 15,
    price: 0.5,
  },
];

// export const TopNFTs = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   });
//   if (windowWidth < 744) {
//     <Section id={"top-nfts"}>
//       <Container>
//         <Title
//           text={"Top NFTs"}
//           number={"02"}
//         />
//         <table
//           className={s.table}
//           cellSpacing='0'
//           cellPadding='0'
//         >
//           <thead>
//             <tr>
//               <th></th>
//               <th>NFT Name</th>
//               <th>Rarity Level</th>
//               <th>Total Games</th>
//               <th>Games Won</th>
//               <th>Price (ETH)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topNfts.map((nft, index) => (
//               <tr
//                 key={index}
//                 className={`${s.row} ${index % 2 === 0 ? s.highlighted : ""}`}
//               >
//                 <td>
//                   <img
//                     src={nft.avatar}
//                     alt={`Avatar for ${nft.nftName}`}
//                   />
//                 </td>
//                 <td>{nft.nftName}</td>
//                 <td>{nft.rarityLevel}</td>
//                 <td>{nft.totalGames}</td>
//                 <td>{nft.gamesWon}</td>
//                 <td>{nft.price.toFixed(1)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Container>
//     </Section>;
//   }

//   return (
//     <Section id={"top-nfts"}>
//       <Container>
//         <Title
//           text={"Top NFTs"}
//           number={"02"}
//         />
//         <table
//           className={s.table}
//           cellSpacing='0'
//           cellPadding='0'
//         >
//           <thead>
//             <tr>
//               <th></th>
//               <th>NFT Name</th>
//               <th>Rarity Level</th>
//               <th>Total Games</th>
//               <th>Games Won</th>
//               <th>Price (ETH)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topNfts.map((nft, index) => (
//               <tr
//                 key={index}
//                 className={`${s.row} ${index % 2 === 0 ? s.highlighted : ""}`}
//               >
//                 <td>
//                   <img
//                     src={nft.avatar}
//                     alt={`Avatar for ${nft.nftName}`}
//                   />
//                 </td>
//                 <td>{nft.nftName}</td>
//                 <td>{nft.rarityLevel}</td>
//                 <td>{nft.totalGames}</td>
//                 <td>{nft.gamesWon}</td>
//                 <td>{nft.price.toFixed(1)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Container>
//     </Section>
//   );
// };

export const TopNFTs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const renderDesktopTable = () => (
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
          <th>Price (ETH)</th>
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
  );

  const renderMobileTable = () => (
    <table
      className={s.mTable}
      cellSpacing='0'
      cellPadding='0'
    >
      <tbody>
        {topNfts.map((nft, index) => (
          <React.Fragment key={`mobile${index}`}>
            <tr
              className={`${index % 2 !== 0 ? s.highlighted : ""} ${
                index % 2 !== 0 ? s.mTopBorder : ""
              } ${s.firstRow}`}
            >
              <th colSpan='2'>
                {nft.position}.&nbsp;
                {nft.nftName}
              </th>
              <td>{nft.price} ETH</td>
            </tr>
            <tr className={` ${index % 2 !== 0 ? s.highlighted : ""}`}>
              <td rowSpan='3'>
                <img
                  src={nft.avatar}
                  alt={`Avatar for ${nft.nftName}`}
                />
              </td>
              <th className={s.mHeader}>Rarity:</th>
              <td className={s.mData}>{nft.rarityLevel}</td>
            </tr>
            <tr className={` ${index % 2 !== 0 ? s.highlighted : ""}`}>
              <th className={s.mHeader}>Total games:</th>
              <td className={s.mData}>{nft.totalGames}</td>
            </tr>
            <tr
              className={`${index % 2 !== 0 ? s.highlighted : ""} ${
                index % 2 !== 0 ? s.mBottomBorder : ""
              }`}
            >
              <th className={s.mHeader}>Games Won:</th>
              <td className={s.mData}>{nft.gamesWon}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );

  return (
    <Section id={"top-nfts"}>
      <Container>
        <Title
          text={"Top NFTs"}
          number={"02"}
        />
        {windowWidth < 744 ? renderMobileTable() : renderDesktopTable()}
      </Container>
    </Section>
  );
};
