import PropTypes from "prop-types";
import React from "react";
import s from "./TopNFTs.module.scss";

export const MobileTable = ({ data }) => (
  <table
    className={s.mTable}
    cellSpacing='0'
    cellPadding='0'
  >
    <tbody>
      {data.map((nft, index) => (
        <React.Fragment key={`mobile${index}`}>
          <tr
            className={`${index % 2 !== 0 ? s.highlighted : ""}  ${
              s.firstRow
            } `}
          >
            <th
              colSpan='2'
              className={`${index !== 0 ? s.paddingRowElement : ""}`}
            >
              {nft.position}.&nbsp;
              {nft.nftName}
            </th>
            <td className={`${index !== 0 ? s.paddingRowElement : ""}`}>
              {nft.price} ETH
            </td>
          </tr>
          <tr className={` ${index % 2 !== 0 ? s.highlighted : ""}`}>
            <td
              rowSpan='3'
              className={s.avatar}
            >
              <img
                src={nft.avatar}
                alt={`Avatar for ${nft.nftName}`}
              />
            </td>
            <th className={`${s.mHeader} ${s.columnPadding}`}>Rarity:</th>
            <td className={`${s.mData} ${s.columnPadding}`}>
              {nft.rarityLevel}
            </td>
          </tr>
          <tr className={` ${index % 2 !== 0 ? s.highlighted : ""}`}>
            <th className={`${s.mHeader} ${s.columnPadding}`}>Total games:</th>
            <td className={`${s.mData} ${s.columnPadding}`}>
              {nft.totalGames}
            </td>
          </tr>
          <tr
            className={`${s.lastRow} ${index % 2 !== 0 ? s.highlighted : ""} `}
          >
            <th className={`${s.mHeader} ${s.lastRowPadding}`}>Games Won:</th>
            <td className={`${s.mData} ${s.lastRowPadding}`}>{nft.gamesWon}</td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

MobileTable.propTypes = {
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
