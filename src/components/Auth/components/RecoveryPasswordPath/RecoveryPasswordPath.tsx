"use client";

import { useState } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { SwitchRecoveryPasswordActiveForm } from "../SwitchRecoveryPasswordActiveForm";

export const RecoveryPasswordPath = () => {
  const [activeForm, setActiveForm] = useState(
    AUTH_PATHS.recoveryPassSteps.recoveryPass
  );

  const setActiveFormHandler = (value: string) => {
    setActiveForm(value);
  };

  return (
    <SwitchRecoveryPasswordActiveForm
      activeForm={activeForm}
      setActiveFormHandler={setActiveFormHandler}
    />
  );
};
