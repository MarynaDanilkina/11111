"use client";

import { useState } from "react";

import styles from "./AuthControl.module.scss";
import { UserMenu } from "../UserMenu";
import { Auth } from "@/components/Auth";
import { BackgroundSubstrate } from "@/components/BackgroundSubstrate";
import { CustomButton } from "@/components/CustomButton";
import { Portal } from "@/components/Portal";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";

import CloseIcon from "@/assets/icons/CloseIcon.svg";

export const AuthControl = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const isAuth = useAppSelector(selectIsUserAuth);

  const windowWidth = useWindowWidth();

  const onBtnClick = () => {
    setIsPortalOpen(!isPortalOpen);
  };

  const closePortalHandler = () => {
    setIsPortalOpen(false);
  };

  return (
    <div className={styles.root}>
      {isAuth ? (
        <UserMenu />
      ) : (
        <>
          {windowWidth && !isPortalOpen && (
            <CustomButton
              theme={windowWidth > 768 - 0.2 ? "secondary" : "outline"}
              className={styles.logInBtn}
              onClick={onBtnClick}
            >
              Войти
            </CustomButton>
          )}
          {windowWidth && isPortalOpen && (
            <CustomButton
              theme="imageOutline"
              className={styles.closeBtn}
              onClick={closePortalHandler}
            >
              <CloseIcon className={styles.closeIcon} />
            </CustomButton>
          )}
          {isPortalOpen && (
            <Portal>
              <BackgroundSubstrate>
                <Auth onClose={closePortalHandler} />
              </BackgroundSubstrate>
            </Portal>
          )}
        </>
      )}
    </div>
  );
};
