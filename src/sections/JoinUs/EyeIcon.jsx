import PropTypes from "prop-types";

import eyeClosedSvg from "../../assets/images/icons/eye-closed.svg";
import eyeOpenSvg from "../../assets/images/icons/eye-open.svg";

export const EyeIcon = ({ isOpen }) => {
  return <img src={isOpen ? eyeOpenSvg : eyeClosedSvg} />;
};

EyeIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
