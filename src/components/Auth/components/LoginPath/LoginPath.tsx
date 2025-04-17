"use client";

import { FC, useState } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { SwitchLoginActiveForm } from "../SwitchLoginActiveForm";

interface IProps {
  onClose: () => void;
}

export const LoginPath: FC<IProps> = ({ onClose }) => {
  const [activeForm, setActiveForm] = useState(AUTH_PATHS.logInSteps.logIn);

  const setActiveFormHandler = (value: string) => {
    setActiveForm(value);
  };

  return (
    <SwitchLoginActiveForm
      activeForm={activeForm}
      setActiveFormHandler={setActiveFormHandler}
      onClose={onClose}
    />
  );
};
