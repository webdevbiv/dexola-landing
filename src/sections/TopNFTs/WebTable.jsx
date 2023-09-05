import PropTypes from "prop-types";

import s from "./TopNFTs.module.scss";

export const WebTable = ({ data }) => (
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
      {data.map((nft, index) => (
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

WebTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      nftName: PropTypes.string.isRequired,
      rarityLevel: PropTypes.string.isRequired,
      totalGames: PropTypes.number.isRequired,
      gamesWon: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
