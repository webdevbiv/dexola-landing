import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

import { TextInputField } from "./TextInputField";
import { EyeIcon } from "./EyeIcon";

import { SignupSchema } from "./schema";

import lineSvg from "../../assets/images/icons/button-line.svg";

import s from "./JoinUs.module.scss";
import "./JoinUS.scss";

export const SignUpForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);

  const toggleShowPassword = () => setIsShowPassword((prev) => !prev);
  const toggleShowPasswordConfirm = () =>
    setIsShowPasswordConfirm((prev) => !prev);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          toast.success(
            <>
              Registration success!
              <br />
              User with e-mail: {values.email} was registered!
            </>,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "dark",
            }
          );
        }}
      >
        {({ setFieldValue, setFieldTouched, touched, errors }) => (
          <Form className={s.form}>
            <TextInputField
              name='email'
              type='email'
              placeholder='Enter your email'
              touched={touched}
              errors={errors}
            />

            <div className={s.inputWrapper}>
              <PhoneInput
                defaultCountry='UA'
                international
                countries={["UA", "US", "GB", "CA", "DE"]}
                onChange={(value) => setFieldValue("phoneNumber", value)}
                onBlur={() => setFieldTouched("phoneNumber", true)}
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
                type={isShowPassword ? "text" : "password"}
                placeholder='Enter your password'
                className={`${s.input} ${
                  touched.password && errors.password ? s.errorBorder : ""
                }`}
              />
              <span
                className={s.showPasswordEye}
                onClick={toggleShowPassword}
              >
                <EyeIcon isOpen={isShowPassword} />
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
                type={isShowPasswordConfirm ? "text" : "password"}
                placeholder='Confirm your password'
                className={`${s.input} ${
                  touched.confirmPassword && errors.confirmPassword
                    ? s.errorBorder
                    : ""
                }`}
              />
              <span
                className={s.showPasswordEye}
                onClick={toggleShowPasswordConfirm}
              >
                <EyeIcon isOpen={isShowPasswordConfirm} />
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
    </>
  );
};
