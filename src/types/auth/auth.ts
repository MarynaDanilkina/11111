import { IRespSkilet } from "../common";

export interface ICreateUserReqData {
  name: string;
  email: string;
  password: string;
}

export interface ICheckActivationAccountReqData {
  email: string;
  code: string;
}

export interface ILogInUserReqData {
  login: string;
  password: string;
  code?: string;
}

export interface IGetRecoveryPasswordCode {
  email: string;
}

export interface IGetRecoveryPasswordData {
  email: string;
  code: number;
}

export interface ISetRecoveryPasswordData {
  newPassword: string;
}

export interface ICreateUserResp extends IRespSkilet {
  data: IUserRespData;
}

export interface ILogInUserResp {
  refreshToken: string;
  accessToken: string;
  user: IUserRespData;
}

export interface IRecoveryPasswordTokens {
  refreshToken: string;
  accessToken: string;
}

export interface IRecoveryPasswordResp {
  data: IRecoveryPasswordTokens
  message: string;
  ok: boolean;
}

export interface IUserRespData {
  id: number;
  name: string;
  email: string;
  avatar: string;
  shortName: string;
  balance: number;
}

export interface ErrorResponse  {
  statusCode: number;
  error: string;
  message: string;
}