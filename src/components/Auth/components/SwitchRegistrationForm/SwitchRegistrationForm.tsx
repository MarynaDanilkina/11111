"use client";

import { FC } from "react";

import { FormWithContentWrapper } from "../FormWithContentWrapper";
import { RegistrationForm } from "../RegistrationForm";
import { RegistrationCodeForm } from "@/components/Auth/components/RegistrationCodeForm";
import { AUTH_PATHS } from "@/components/Auth/constants/AUTH_PATHS";

interface IProps {
  activeForm: string;
  setActiveFormHandler: (value: string) => void;
}

export const SwitchRegistrationForm: FC<IProps> = ({ activeForm, setActiveFormHandler }) => {
  switch (activeForm) {
    case AUTH_PATHS.registrationSteps.registration:
      return (
        <FormWithContentWrapper key={activeForm}>
          <RegistrationForm setActiveFormHandler={setActiveFormHandler}/>
        </FormWithContentWrapper>
      )
    case AUTH_PATHS.registrationSteps.registrationCode:
      return (
        <RegistrationCodeForm />
      )
    default:
      return (
        <FormWithContentWrapper key={activeForm}>
          <RegistrationForm setActiveFormHandler={setActiveFormHandler}/>
        </FormWithContentWrapper>
      );
  }
};
