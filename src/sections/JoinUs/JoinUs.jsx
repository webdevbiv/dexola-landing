// import { Container } from "../../components/Container/Container";
// import { Section } from "../../components/Section/Section";
// import { Title } from "../../components/Title/Title";
// import s from "./JoinUs.module.scss";
// import arrowImg from "../../images/icons/arrow-right.svg";

// export const JoinUs = () => {
//   return (
//     <Section id={"join-us"}>
//       <Container>
//         <Title
//           text={"Join Us"}
//           number={"03"}
//         />
//         <div className={s.wrapper}>
//           <div className={s.content}>
//             <h3 className={s.title}>Experience the Power of StarRunner</h3>
//             <p className={s.text}>
//               Join Our Community and Embark on a Journey of Opportunities.
//               Discover the full range of our services that cater to your needs.
//               We&#39;ve got you covered with top-notch solutions.
//             </p>
//             <img
//               src={arrowImg}
//               alt='arrow right'
//               className={s.arrow}
//             />
//           </div>
//           <div className={s.content}>
//             <form className={s.form}>
//               <input
//                 type='email'
//                 placeholder='Enter your email'
//               />
//               <input
//                 type='phone'
//                 placeholder='Enter your phone number'
//               />
//               <input
//                 type='password'
//                 placeholder='Enter your password'
//               />
//               <input
//                 type='password'
//                 placeholder='Confirm your password'
//               />
//               <button type='submit'>
//                 <img />
//                 <span>Send it</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// };

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";
import s from "./JoinUs.module.scss";
import arrowSvg from "../../images/icons/arrow-right.svg";
import lineSvg from "../../images/icons/button-line.svg";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^(\+)?[0-9]{10,15}$/, "Phone number is not valid")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const JoinUs = () => {
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
            {({ errors, touched }) => (
              <Form className={s.form}>
                <div className={`${s.inputWrapper} ${s.requiredField}`}>
                  <Field
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    className={s.input}
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div className={s.inputWrapper}>
                  <Field
                    name='phoneNumber'
                    type='text'
                    placeholder='Enter your phone number'
                    className={s.input}
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
                    type='password'
                    placeholder='Enter your password'
                    className={s.input}
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div className={`${s.inputWrapper} ${s.requiredField}`}>
                  <Field
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm your password'
                    className={s.input}
                  />
                  <ErrorMessage
                    name='confirmPassword'
                    component='div'
                    className={s.error}
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className={s.button}
                  >
                    <img
                      src={lineSvg}
                      alt='line'
                      className={s.line}
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
