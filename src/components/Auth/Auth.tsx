"use client";

import { FC, useEffect } from "react";

import { CustomButton } from "../CustomButton";
import styles from "./Auth.module.scss";
import { SwitchAuthPath } from "./components/SwitchAuthPath";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useAppDispatch } from "@/store/hooks/hooks";
import { resetAuthPath } from "@/store/slices/auth/authSlice";
import { resetRecoveryPassword } from "@/store/slices/auth/recoveryPasswordSlice";

import CloseIcon from "@/assets/icons/CloseIcon.svg";

interface IProps {
  onClose: () => void;
}

export const Auth: FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    return () => {
      dispatch(resetAuthPath());
      dispatch(resetRecoveryPassword());
    };
  }, [dispatch]);

  return (
    <div className={styles.root}>
      {windowWidth && windowWidth > 768 - 0.2 && (
        <CustomButton
          theme="imageOutline"
          className={styles.closeBtn}
          onClick={onClose}
        >
          <CloseIcon className={styles.closeIcon} />
        </CustomButton>
      )}
      <SwitchAuthPath onClose={onClose} />
    </div>
  );
};
