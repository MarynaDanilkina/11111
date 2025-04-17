"use client";

import { FC } from "react";

import styles from "./RegistrationCodeForm.module.scss";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";

export const RegistrationCodeForm: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <CustomTitle as="h4" className={styles.colorBtn}>
            Подтверждение почты
          </CustomTitle>
          <CustomParagraph as="b3">
            Мы отправили вам сообщение на почту для подтверждения аккаунта.
          </CustomParagraph>
        </div>
      </div>
    </div>
  );
};
