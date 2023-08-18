import PropTypes from "prop-types";
import { Container } from "../../components/Container/Container";
export const Main = ({ children }) => {
  return <main>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
