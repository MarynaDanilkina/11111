"use client";

import { useFormik } from "formik";

import styles from "./LogInCode.module.scss";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";

export const LogInCode = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: () => {},
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <CustomTitle as="h4" className={styles.colorBtn}>
            Двухфакторная аутентификация
          </CustomTitle>
          <CustomParagraph as="b3">
            Пожалуйста, введите код из приложения Google Authenticator,
            чтобы подтвердить, что вы — владелец аккаунта
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
