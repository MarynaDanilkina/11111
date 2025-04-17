"use client";

import { useFormik } from "formik";
import { FC } from "react";
import { toast } from "react-toastify";

import styles from "./RecoveryPasswordForm.module.scss";
import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { RECOVERY_PASSWORD_FORM_SCHEMES } from "../../constants/FORM_SCHEMES";
import { CaptchaForm } from "../CaptchaForm";
import { getRecoveryPasswordCode } from "@/api/inde";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setRecoveryPasswordEmail } from "@/store/slices/auth/recoveryPasswordSlice";

interface IProps {
  setActiveFormHandler: (value: string) => void;
}

export const RecoveryPasswordForm: FC<IProps> = ({ setActiveFormHandler }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      captcha: false,
    },
    validationSchema: RECOVERY_PASSWORD_FORM_SCHEMES,
    onSubmit: async (data) => {
      try {
        const RecoveryPasswordResp = await getRecoveryPasswordCode({
          email: data.email,
        });
        if (RecoveryPasswordResp.data.ok) {
          dispatch(setRecoveryPasswordEmail(data.email));
          setActiveFormHandler(AUTH_PATHS.recoveryPassSteps.recoveryPassCode);
        }
      } catch (error) {
        toast.error(RESPONSE_MESSAGES.unknownError);
        console.error(error);
      }
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <CustomTitle as="h4" className={styles.colorBtn}>
            Восстановление пароля
          </CustomTitle>
          <CustomParagraph as="b3">
            Введите e-mail от своего профиля на Nixbuy. Отправим на него ссылку
            для восстановления пароля
          </CustomParagraph>
        </div>
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
      <CustomButton
        type="submit"
        theme="tertiary"
        isDisabled={!formik.isValid || !formik.dirty}
        className={styles.submitBtn}
      >
        Получить ссылку
      </CustomButton>
    </form>
  );
};
