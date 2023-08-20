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
import arrowImg from "../../images/icons/arrow-right.svg";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^(\+)?[0-9]{10,15}$/, "Phone number is not valid")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const JoinUs = () => {
  return (
    <Section id={"join-us"}>
      <Container>
        <Title
          text={"Join Us"}
          number={"03"}
        />
        <div className={s.wrapper}>
          <div className={s.content}>
            <h3 className={s.title}>Experience the Power of StarRunner</h3>
            <p className={s.text}>
              Join Our Community and Embark on a Journey of Opportunities.
              Discover the full range of our services that cater to your needs.
              We&#39;ve got you covered with top-notch solutions.
            </p>
            <img
              src={arrowImg}
              alt='arrow right'
              className={s.arrow}
            />
          </div>
          <div className={s.content}>
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
                  <Field
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                  />

                  <Field
                    name='phoneNumber'
                    type='text'
                    placeholder='Enter your phone number'
                  />
                  <ErrorMessage
                    name='phoneNumber'
                    component='div'
                  />

                  <Field
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                  />

                  <Field
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm your password'
                  />
                  <ErrorMessage
                    name='confirmPassword'
                    component='div'
                  />

                  <button type='submit'>
                    <img />
                    <span>Send it</span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </Section>
  );
};
