"use client";

import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { toast } from "react-toastify";

import styles from "./LoginForm.module.scss";
import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { ILogInForm } from "../../types/logInForm";
import { CaptchaForm } from "../CaptchaForm";
import { logInUser, setServerToken } from "@/api/inde";
import { LOGIN_FORM_SCHEMES } from "@/components/Auth/constants/FORM_SCHEMES";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";
import { setUser } from "@/store/slices/user/userSlice";
import { ErrorResponse } from "@/types/auth/auth";

interface IProps {
  setActiveFormHandler: (value: string) => void;
  onClose: () => void;
}

export const LoginForm: FC<IProps> = ({ onClose, setActiveFormHandler }) => {
  const twoFactorAuth = false;

  const dispatch = useAppDispatch();
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      captcha: false,
    },
    validationSchema: LOGIN_FORM_SCHEMES,
    onSubmit: async (data: ILogInForm) => {
      if (!twoFactorAuth) {
        try {
          const logInUserResp = await logInUser({
            login: data.email,
            password: data.password,
          });

          if (
            !logInUserResp.data.accessToken ||
            !logInUserResp.data.refreshToken
          ) {
            throw new Error(
              `Failed to log in user. Status: ${logInUserResp.status}. Access token or refresh token is missing`
            );
          }

          const setTokenResp = await setServerToken({
            accessToken: logInUserResp.data.accessToken,
            refreshToken: logInUserResp.data.refreshToken,
          });

          if (setTokenResp.status !== 200) {
            throw new Error(
              `Failed to set server tokens. Status: ${setTokenResp.status}`
            );
          }
          dispatch(setUser(logInUserResp.data.user))
          dispatch(setIsUserAuth(true));
          router.push("/");

          onClose();
        } catch (error: unknown) {
          const axiosError = error as AxiosError<ErrorResponse>;

          if (axiosError.response) {
            const status = axiosError.response.status;

            if (status === 401) {
              toast.error('Неверный логин или пароль');
            } else {
              toast.error(RESPONSE_MESSAGES.unknownError);
            }

          } else if (axiosError.request) {
            toast.error('Сервер не отвечает. Проверьте соединение.');
          } else {
            toast.error(axiosError.message || RESPONSE_MESSAGES.unknownError);
          }
        }
      } else {
        setActiveFormHandler(AUTH_PATHS.logInSteps.logInCode);
      }
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
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
      <CustomButton
        type="submit"
        theme="tertiary"
        isDisabled={!formik.isValid || !formik.dirty}
        className={styles.submitBtn}
      >
        Войти
      </CustomButton>
    </form>
  );
};
