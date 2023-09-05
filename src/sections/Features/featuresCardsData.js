import {
  imgsMobile,
  imgsMobileX2,
  imgsMobileQuality,
  imgsMobileQualityX2,
  imgsTabletQuality,
  imgsTabletQualityX2,
  imgsWeb,
  imgsWebX2,
} from "../../assets/images/features";

import {
  LARGE_SCREEN_BREAKPOINT,
  SMALL_SCREEN_BREAKPOINT,
  MEDIUM_SCREEN_BREAKPOINT,
} from "../../styles/breakpoints";

const determineImageByWidth = (windowWidth, isRetina, index) => {
  if (windowWidth >= LARGE_SCREEN_BREAKPOINT)
    return isRetina ? imgsWebX2[index] : imgsWeb[index];
  if (windowWidth >= MEDIUM_SCREEN_BREAKPOINT)
    return isRetina ? imgsTabletQualityX2[index] : imgsTabletQuality[index];
  if (windowWidth >= SMALL_SCREEN_BREAKPOINT)
    return isRetina ? imgsMobileQualityX2[index] : imgsMobileQuality[index];
  return isRetina ? imgsMobileX2[index] : imgsMobile[index];
};

const createFeatureCardData = (index, title, text, windowWidth, isRetina) => {
  const imgSrc = determineImageByWidth(windowWidth, isRetina, index);
  return {
    imgSrc,
    alt: "star runner nft image",
    number: String(index + 1).padStart(2, "0"),
    title,
    text,
    link: "#join-us",
  };
};

export const featuresCardsData = (windowWidth, isRetina) => [
  createFeatureCardData(
    0,
    "STRU Token sale",
    "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    windowWidth,
    isRetina
  ),
  createFeatureCardData(
    1,
    "Staking",
    "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
    windowWidth,
    isRetina
  ),
  createFeatureCardData(
    2,
    "NFT minting",
    "Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey like never before.",
    windowWidth,
    isRetina
  ),
];
