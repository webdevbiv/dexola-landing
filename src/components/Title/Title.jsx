import PropTypes from "prop-types";
import s from "./Title.module.scss";
export const Title = ({ text, number }) => {
  return (
    <h2 className={s.title}>
      <span>{text}</span>
      <span>{number}</span>
    </h2>
  );
};

Title.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
