"use client";

import { FC } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { CreateNewPasswordForm } from "../CreateNewPasswordForm";
import { RecoveryPasswordCodeForm } from "../RecoveryPasswordCodeForm";
import { RecoveryPasswordForm } from "../RecoveryPasswordForm";

interface IProps {
  activeForm: string;
  setActiveFormHandler: (value: string) => void;
}

export const SwitchRecoveryPasswordActiveForm: FC<IProps> = ({
  activeForm,
  setActiveFormHandler,
}) => {
  switch (activeForm) {
    case AUTH_PATHS.recoveryPassSteps.recoveryPassCode:
      return (
        <RecoveryPasswordCodeForm setActiveFormHandler={setActiveFormHandler} />
      );
    case AUTH_PATHS.recoveryPassSteps.createNewPass:
      return <CreateNewPasswordForm />;
    default:
      return (
        <RecoveryPasswordForm setActiveFormHandler={setActiveFormHandler} />
      );
  }
};
