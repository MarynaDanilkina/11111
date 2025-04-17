"use client";

import { FC } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { LoginPath } from "../LoginPath";
import { RecoveryPasswordPath } from "../RecoveryPasswordPath";
import { RegistrationPath } from "../RegistrationPath";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectAuthPath } from "@/store/slices/auth/authSlice";

interface IProps {
  onClose: () => void;
}

export const SwitchAuthPath: FC<IProps> = ({ onClose }) => {
  const authPath = useAppSelector(selectAuthPath);

  switch (authPath) {
    case AUTH_PATHS.registration:
      return <RegistrationPath />;
    case AUTH_PATHS.recoveryPass:
      return <RecoveryPasswordPath />;
    default:
      return <LoginPath onClose={onClose} />;
  }
};
