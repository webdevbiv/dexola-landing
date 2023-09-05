import { Section } from "../../components/Section/Section";
import { Title } from "../../components/Title/Title";

import arrowSvg from "../../assets/images/icons/arrow-right.svg";

import "react-phone-number-input/style.css";
import s from "./JoinUs.module.scss";
import { SignUpForm } from "./SignUpForm";

export const JoinUs = () => {
  return (
    <Section id='join-us'>
      <Title
        text='Join Us'
        number='03'
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
          <SignUpForm />
        </div>
      </div>
    </Section>
  );
};
