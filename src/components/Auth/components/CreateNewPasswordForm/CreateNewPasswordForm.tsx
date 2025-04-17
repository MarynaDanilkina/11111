"use client";

import { useFormik } from "formik";
import { toast } from "react-toastify";

import styles from "./CreateNewPasswordForm.module.scss";
import { CREATE_NEW_PASSWORD_FORM_SCHEMES } from "../../constants/FORM_SCHEMES";
import { getServerToken, setRecoveryPassword } from "@/api/inde";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";
import { resetRecoveryPassword, selectRecoveryData, } from "@/store/slices/auth/recoveryPasswordSlice";

export const CreateNewPasswordForm = () => {
  const recoveryPassData = useAppSelector(selectRecoveryData);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: CREATE_NEW_PASSWORD_FORM_SCHEMES,
    onSubmit: async (data) => {
      const respTokens = await getServerToken();

      if (recoveryPassData.email && respTokens.data.accessToken) {
        try {
          await setRecoveryPassword( {
            newPassword: data.password,
          }, respTokens.data.accessToken
        );

          dispatch(resetRecoveryPassword());
          dispatch(setIsUserAuth(true));
          toast.success(RESPONSE_MESSAGES.changePasswordSuccess);

        } catch (error) {
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
            Придумайте новый пароль
          </CustomTitle>
          <CustomParagraph as="b3">
            Пароль должен содержать не менее 8 символов
          </CustomParagraph>
        </div>
        <CustomInput
          id="new_password"
          name="password"
          placeholder="Новый пароль"
          value={formik.values.password}
          errorText={formik.errors.password}
          isError={!!formik.errors.password}
          onChange={formik.handleChange}
          className={styles.input}
        />
        <CustomInput
          id="repeat_new_password"
          name="repeatPassword"
          placeholder="Повторите пароль"
          value={formik.values.repeatPassword}
          errorText={formik.errors.repeatPassword}
          isError={!!formik.errors.repeatPassword}
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
        Изменить пароль
      </CustomButton>
    </form>
  );
};
