"use client";

import { FC, ReactNode } from "react";

import styles from "./FormWithContentWrapper.module.scss";
import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { Services } from "../Services";
import { CustomButton } from "@/components/CustomButton";
import { CustomCaption } from "@/components/CustomCaption";
import { CustomTabs } from "@/components/CustomTabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { selectAuthPath, setAuthPath } from "@/store/slices/auth/authSlice";

interface IProps {
  children: ReactNode;
}

export const FormWithContentWrapper: FC<IProps> = ({ children }) => {
  const authPath = useAppSelector(selectAuthPath);

  const dispath = useAppDispatch();

  const setActivePathHandler = (id: string) => {
    dispath(setAuthPath(id));
  };

  const forgotPasswordHandler = () => {
    dispath(setAuthPath(AUTH_PATHS.recoveryPass));
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapperCustomTabs}>
        <CustomTabs
          tabs={[
            {
              id: AUTH_PATHS.logIn,
              name: "Вход",
            },
            {
              id: AUTH_PATHS.registration,
              name: "Регистрация",
            },
          ]}
          activeTab={authPath}
          setActiveTabHandler={setActivePathHandler}
        />
        {children}
      </div>
      <div>
        <Services
          title={
            authPath === AUTH_PATHS.logIn
              ? "Вход через сервисы"
              : "Регистрация через сервисы"
          }
        />
      </div>
      {authPath === AUTH_PATHS.logIn && (
        <CustomButton
          theme="withoutStyles"
          className={styles.forgotPassword}
          onClick={forgotPasswordHandler}
        >
          <CustomCaption as="c3">Забыли пароль?</CustomCaption>
        </CustomButton>
      )}
    </div>
  );
};
