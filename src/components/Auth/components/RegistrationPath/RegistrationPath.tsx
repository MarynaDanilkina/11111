"use client";

import { useState } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { SwitchRegistrationForm } from "../SwitchRegistrationForm";

export const RegistrationPath = () => {
  const [activeForm, setActiveForm] = useState(AUTH_PATHS.registrationSteps.registration);
  const setActiveFormHandler = (value: string) => {
    setActiveForm(value);
  };
  return <SwitchRegistrationForm activeForm={activeForm} setActiveFormHandler={setActiveFormHandler}/>;
};
