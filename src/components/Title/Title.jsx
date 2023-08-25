import PropTypes from "prop-types";
import s from "./Title.module.scss";
export const Title = ({ text, number }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>
        <span>{text}</span>
        <span>{number}</span>
      </h2>
    </div>
  );
};

Title.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
