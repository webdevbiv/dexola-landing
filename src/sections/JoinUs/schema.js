import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Is not valid email")
    .required("Please complete this field"),
  phoneNumber: Yup.string()
    .matches(/^(\+)?[0-9]{10,15}$/, "Phone number is not valid")
    .required("Please complete this field"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Please complete this field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please complete this field"),
});
