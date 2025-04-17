"use client";

import { useFormik } from "formik";
import { FC } from "react";
import { toast } from "react-toastify";

import styles from "./RecoveryPasswordCodeForm.module.scss";
import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { getRecoveryPasswordCheckCode } from "@/api/auth/auth";
import { setServerToken } from "@/api/token/token";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";
import { selectRecoveryData } from "@/store/slices/auth/recoveryPasswordSlice";
import { setUser } from "@/store/slices/user/userSlice";

interface IProps {
  setActiveFormHandler: (value: string) => void;
}

export const RecoveryPasswordCodeForm: FC<IProps> = ({
  setActiveFormHandler,
}) => {
  const recoveryPassData = useAppSelector(selectRecoveryData);
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (data) => {
      if (recoveryPassData.email) {
        try {
          const RecoveryPasswordResp = await getRecoveryPasswordCheckCode({
            email: recoveryPassData.email,
            code: +data.code
          })
          if (RecoveryPasswordResp.data.ok) {
            const setTokenResp = await setServerToken({
              accessToken: RecoveryPasswordResp.data.data.accessToken,
              refreshToken: RecoveryPasswordResp.data.data.refreshToken,
            });

            if (setTokenResp.status !== 200) {
              throw new Error(
                `Failed to set server tokens. Status: ${setTokenResp.status}`
              );
            }
            try {
              const res = await fetch("/api/auth/me");
              const data = await res.json();
              if (data.isAuth) {
                dispatch(setUser(data.user.data));
              }
            } catch (error) {
              toast.error(RESPONSE_MESSAGES.failedAuth);
              console.error("Ошибка проверки авторизации", error);
              dispatch(setIsUserAuth(false));
            }
            setActiveFormHandler(AUTH_PATHS.recoveryPassSteps.createNewPass);
          }
        }
        catch (error) {
          toast.error(RESPONSE_MESSAGES.unknownError);
          console.error(error);
        }
      } else {
        toast.error(RESPONSE_MESSAGES.unknownError);
      }
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <CustomTitle as="h4" className={styles.colorBtn}>
            Восстановить пароль
          </CustomTitle>
          <CustomParagraph as="b3">
            Мы отправили вам сообщение с кодом. Пожалуйста, введите ниже код с
            почты
          </CustomParagraph>
        </div>
        <CustomInput
          id="code"
          name="code"
          placeholder="Код подтверждения"
          value={formik.values.code}
          errorText={formik.errors.code}
          isError={!!formik.errors.code}
          onChange={formik.handleChange}
          className={styles.input}
        />
      </div>
      <CustomButton
        type="submit"
        theme="tertiary"
        isDisabled={!formik.isValid || !formik.dirty}
        className={styles.submitBtn}
      >
        Подтвердить
      </CustomButton>
    </form>
  );
};
