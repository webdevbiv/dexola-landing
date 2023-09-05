import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import s from "./JoinUs.module.scss";
export const TextInputField = ({
  name,
  type,
  placeholder,
  touched,
  errors,
}) => (
  <div className={`${s.inputWrapper} ${s.requiredField}`}>
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className={`${s.input} ${
        touched[name] && errors[name] ? s.errorBorder : ""
      }`}
    />
    <ErrorMessage
      name={name}
      component='div'
      className={s.error}
    />
  </div>
);

TextInputField.propTypes = {
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  touched: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
