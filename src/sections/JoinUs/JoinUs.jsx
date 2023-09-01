import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import arrowSvg from "../../assets/images/icons/arrow-right.svg";
import lineSvg from "../../assets/images/icons/button-line.svg";
import eyeClosedSvg from "../../assets/images/icons/eye-closed.svg";
import eyeOpenSvg from "../../assets/images/icons/eye-open.svg";

import "react-phone-number-input/style.css";
import s from "./JoinUs.module.scss";
import "./JoinUS.scss";

const SignupSchema = Yup.object().shape({
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

export const JoinUs = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Section id={"join-us"}>
      <Title
        text={"Join Us"}
        number={"03"}
      />
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <h3 className={s.title}>Experience the Power of StarRunner</h3>
            <p className={s.text}>
              Join Our Community and Embark on a Journey of Opportunities.
              Discover the full range of our services that cater to your needs.
              We&#39;ve got you covered with top-notch solutions.
            </p>
            <img
              src={arrowSvg}
              alt='arrow right'
              className={s.arrow}
            />
          </div>

          <Formik
            initialValues={{
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue, setFieldTouched, touched, errors }) => (
              <Form className={s.form}>
                <div className={`${s.inputWrapper} ${s.requiredField}`}>
                  <Field
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    className={`${s.input} ${
                      touched.email && errors.email ? s.errorBorder : ""
                    }`}
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div className={s.inputWrapper}>
                  <PhoneInput
                    defaultCountry='UA'
                    international
                    countries={["UA", "US", "GB", "CA", "DE"]}
                    onChange={(value) => {
                      setFieldValue("phoneNumber", value);
                    }}
                    onBlur={() => {
                      setFieldTouched("phoneNumber", true);
                    }}
                    placeholder='+38(0__) ___ __ __'
                    className={
                      touched.phoneNumber && errors.phoneNumber
                        ? "PhoneInputError"
                        : ""
                    }
                  />
                  <ErrorMessage
                    name='phoneNumber'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div className={`${s.inputWrapper} ${s.requiredField}`}>
                  <Field
                    name='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password'
                    className={`${s.input} ${
                      touched.password && errors.password ? s.errorBorder : ""
                    }`}
                  />
                  <span
                    className={s.showPasswordEye}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img src={eyeOpenSvg} />
                    ) : (
                      <img src={eyeClosedSvg} />
                    )}
                  </span>
                  <ErrorMessage
                    name='password'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div className={`${s.inputWrapper} ${s.requiredField}`}>
                  <Field
                    name='confirmPassword'
                    type={showPassword ? "text" : "password"}
                    placeholder='Confirm your password'
                    className={`${s.input} ${
                      touched.confirmPassword && errors.confirmPassword
                        ? s.errorBorder
                        : ""
                    }`}
                  />
                  <span
                    className={s.showPasswordEye}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img src={eyeOpenSvg} />
                    ) : (
                      <img src={eyeClosedSvg} />
                    )}
                  </span>
                  <ErrorMessage
                    name='confirmPassword'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div className={s.buttonWrapper}>
                  <button
                    type='submit'
                    className={s.button}
                  >
                    <img
                      src={lineSvg}
                      alt='line'
                    />
                    <span>Send it</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Section>
  );
};
