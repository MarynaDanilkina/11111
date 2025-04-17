import * as Yup from "yup";

import { validationErrors } from "@/constants/validationErrors";

export const REGISTRATION_FORM_SCHEMES = Yup.object({
  userName: Yup.string().required(validationErrors.userNameError),
  email: Yup.string()
    .email(validationErrors.emailError.format)
    .required(validationErrors.emailError.required),
  password: Yup.string()
    .required(validationErrors.passwordError.required)
    .min(8, validationErrors.passwordError.min)
    .matches(/^\S*$/, validationErrors.passwordError.space)
    .matches(/[a-zA-Z]/, validationErrors.passwordError.matchesLetters)
    .matches(/[0-9]/, validationErrors.passwordError.matchesNumbers),
  captcha: Yup.boolean()
    .oneOf([true], validationErrors.captcha.required)
    .required(validationErrors.captcha.required),
});

export const LOGIN_FORM_SCHEMES = Yup.object({
  email: Yup.string()
    .email(validationErrors.emailError.format)
    .required(validationErrors.emailError.required),
  password: Yup.string()
    .required(validationErrors.passwordError.required)
    .min(8, validationErrors.passwordError.min)
    .matches(/^\S*$/, validationErrors.passwordError.space)
    .matches(/[a-zA-Z]/, validationErrors.passwordError.matchesLetters)
    .matches(/[0-9]/, validationErrors.passwordError.matchesNumbers),
  captcha: Yup.boolean()
    .oneOf([true], validationErrors.captcha.required)
    .required(validationErrors.captcha.required),
});

export const RECOVERY_PASSWORD_FORM_SCHEMES = Yup.object({
  email: Yup.string()
    .email(validationErrors.emailError.format)
    .required(validationErrors.emailError.required),
  captcha: Yup.boolean()
    .oneOf([true], validationErrors.captcha.required)
    .required(validationErrors.captcha.required),
});

export const TWO_FACTOR_AUTHENTICATION_FORM_SCHEMES = Yup.object({
  code: Yup.string().required(validationErrors.code.required),
});

export const CREATE_NEW_PASSWORD_FORM_SCHEMES = Yup.object({
  password: Yup.string()
    .required(validationErrors.passwordError.required)
    .min(8, validationErrors.passwordError.min)
    .matches(/^\S*$/, validationErrors.passwordError.space)
    .matches(/[a-zA-Z]/, validationErrors.passwordError.matchesLetters)
    .matches(/[0-9]/, validationErrors.passwordError.matchesNumbers),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], validationErrors.passwordError.match)
    .required(validationErrors.passwordError.required),
});
