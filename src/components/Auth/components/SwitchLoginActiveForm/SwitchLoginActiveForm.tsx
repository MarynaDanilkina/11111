"use client";

import { FC } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { FormWithContentWrapper } from "../FormWithContentWrapper";
import { LogInCode } from "../LogInCode";
import { LoginForm } from "../LoginForm";

interface IProps {
  activeForm: string;
  setActiveFormHandler: (value: string) => void;
  onClose: () => void;
}

export const SwitchLoginActiveForm: FC<IProps> = ({
  activeForm,
  setActiveFormHandler,
  onClose,
}) => {
  switch (activeForm) {
    case AUTH_PATHS.logInSteps.logInCode:
      return <LogInCode />;
    default:
      return (
        <FormWithContentWrapper>
          <LoginForm
            setActiveFormHandler={setActiveFormHandler}
            onClose={onClose}
          />
        </FormWithContentWrapper>
      );
  }
};
