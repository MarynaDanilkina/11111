"use client";

import { useFormik } from "formik";
import { FC } from "react";
import { toast } from "react-toastify";

import styles from "./RegistrationForm.module.scss";
import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { REGISTRATION_FORM_SCHEMES } from "../../constants/FORM_SCHEMES";
import { IRegistrationForm } from "../../types/registrationForm";
import { CaptchaForm } from "../CaptchaForm";
import { createUser } from "@/api/inde";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { CustomLink } from "@/components/CustomLink";
import { CustomParagraph } from "@/components/CustomParagraph";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import useWindowWidth from "@/hooks/useWindowWidth";

interface IProps {
  setActiveFormHandler: (value: string) => void;
}

export const RegistrationForm: FC<IProps> = ({setActiveFormHandler}) => {
  const windowWidth = useWindowWidth();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      captcha: false,
    },
    validationSchema: REGISTRATION_FORM_SCHEMES,
    onSubmit: async (data: IRegistrationForm) => {
      try {
        const  resp = await createUser({
          name: data.userName,
          email: data.email,
          password: data.password,
        });
        if (resp.data.ok) {
          setActiveFormHandler(AUTH_PATHS.registrationSteps.registrationCode);
        } else {
          toast.error(RESPONSE_MESSAGES.occupiedEmail)
        }

      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <CustomInput
          id="user_name"
          name="userName"
          placeholder="Имя"
          value={formik.values.userName}
          errorText={formik.errors.userName}
          isError={!!formik.errors.userName}
          onChange={formik.handleChange}
          className={styles.input}
        />
        <CustomInput
          id="login_email"
          name="email"
          placeholder="E-mail"
          value={formik.values.email}
          errorText={formik.errors.email}
          isError={!!formik.errors.email}
          onChange={formik.handleChange}
          className={styles.input}
        />
        <CustomInput
          id="login_password"
          name="password"
          placeholder="Пароль"
          value={formik.values.password}
          errorText={formik.errors.password}
          isError={!!formik.errors.password}
          onChange={formik.handleChange}
          className={styles.input}
        />
        <CaptchaForm
          id="login_captcha"
          name="captcha"
          value={formik.values.captcha}
          onChange={formik.handleChange}
          isError={!!formik.errors.captcha}
          errorText={formik.errors.captcha}
          className={styles.captcha}
        />
      </div>
      <div className={styles.wrapperRegistrationButton}>
        <CustomButton
          type="submit"
          theme="tertiary"
          className={styles.submitBtn}
          isDisabled={!formik.isValid || !formik.dirty}
        >
          Зарегистрироваться
        </CustomButton>
        {windowWidth && windowWidth > 768 - 0.2 ? (
          <div className={styles.wrapperButtonsBlock}>
            <CustomParagraph as="b6">
              Нажимая на кнопку “Зарегистрироваться”, вы соглашаетесь с
            </CustomParagraph>
            <div className={styles.wrapperButtons}>
              <CustomLink href="/privacy-policy">
                <CustomParagraph as="b6" className={styles.colorBtn}>
                  Политикой конфиденциальности
                </CustomParagraph>
              </CustomLink>
              <CustomLink href="/user-agreement">
                <CustomParagraph as="b6" className={styles.colorBtn}>
                  Пользовательским соглашением
                </CustomParagraph>
              </CustomLink>
            </div>
          </div>
        ) : (
          <div className={styles.wrapperButtonsBlock}>
               <CustomParagraph as="b6">
              Нажимая на кнопку “Зарегистрироваться”, вы соглашаетесь с
               </CustomParagraph>
                <CustomLink href="/privacy-policy">
                  <CustomParagraph as="b6" className={styles.colorBtn}>
                    Политикой конфиденциальности
                  </CustomParagraph>
                </CustomLink>
                <CustomLink href="/user-agreement">
                  <CustomParagraph as="b6" className={styles.colorBtn}>
                    Пользовательским соглашением
                  </CustomParagraph>
                </CustomLink>
          </div>
        )}
      </div>
    </form>
  );
};
