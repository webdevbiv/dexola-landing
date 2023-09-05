import {
  web01,
  web02,
  web01x2,
  web02x2,
} from "../../assets/images/hero/web/index.js";

import {
  mobile01,
  mobile02,
  mobile01x2,
  mobile02x2,
} from "../../assets/images/hero/mobile/index.js";

import {
  tablet01,
  tablet02,
  tablet01x2,
  tablet02x2,
} from "../../assets/images/hero/tablet/index.js";

import {
  LARGE_SCREEN_BREAKPOINT,
  SMALL_SCREEN_BREAKPOINT,
} from "../../styles/breakpoints.js";

export const getImageSet = (windowWidth, isRetina) => {
  if (windowWidth >= LARGE_SCREEN_BREAKPOINT) {
    return [isRetina ? web01x2 : web01, isRetina ? web02x2 : web02];
  } else if (windowWidth < SMALL_SCREEN_BREAKPOINT) {
    return [isRetina ? mobile01x2 : mobile01, isRetina ? mobile02x2 : mobile02];
  } else {
    return [isRetina ? tablet01x2 : tablet01, isRetina ? tablet02x2 : tablet02];
  }
};
