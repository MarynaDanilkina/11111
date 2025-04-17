import { AxiosResponse } from "axios";

import { API_PATHS } from "../API_PATHS";
import { request } from "../utils";
import {
  ICheckActivationAccountReqData,
  ICreateUserReqData,
  ICreateUserResp,
  IGetRecoveryPasswordCode,
  IGetRecoveryPasswordData,
  ILogInUserReqData,
  ILogInUserResp,
  IRecoveryPasswordResp,
  ISetRecoveryPasswordData,
} from "@/types/auth/auth";

export const createUser = (
  data: ICreateUserReqData
): Promise<AxiosResponse<ICreateUserResp>> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.createUser,
    data,
  });
};

export const checkActivationAccount = (
  data: ICheckActivationAccountReqData) => {
  return request({
    method: "POST",
    url: API_PATHS.auth.checkEmail,
    data,
  })
}

export const logInUser = (
  data: ILogInUserReqData
): Promise<AxiosResponse<ILogInUserResp>> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.logInUser,
    data,
  });
};

export const checkLogin = (
  accessToken: string
) => {
  return request({
    method: "GET",
    url: API_PATHS.auth.checkLogin,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
}

export const getRecoveryPasswordCode = (
  data: IGetRecoveryPasswordCode
): Promise<AxiosResponse> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.recoveryPasswordEmail,
    data,
  });
};

export const getRecoveryPasswordCheckCode = (
  data: IGetRecoveryPasswordData
): Promise<AxiosResponse<IRecoveryPasswordResp>> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.recoveryPasswordCheckCode,
    data
  })
}

export const setRecoveryPassword = (
  data: ISetRecoveryPasswordData,
  accessToken: string
): Promise<AxiosResponse> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.recoveryPassword,
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
};

export const googleLogin = (): Promise<
  AxiosResponse<{ redirectUrl: string }>
> => {
  return request({
    method: "GET",
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
    url: "api/auth/google",

  });
};

export const vkLogin = () => {
  return request({
    method: "GET",
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
    url: "api/auth/vk",
  })
}