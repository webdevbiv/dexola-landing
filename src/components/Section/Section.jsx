import PropTypes from "prop-types";
import s from "./Section.module.scss";
export const Section = ({ id, children }) => {
  return (
    <>
      <section
        id={id}
        className={s.section}
      >
        {children}
      </section>
    </>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};
