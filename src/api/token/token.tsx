import { AxiosResponse } from "axios";

import { API_PATHS } from "../API_PATHS";
import { request } from "../utils";
import { ISetServerTokenData } from "@/types/token/token";

export const setServerToken = (data: ISetServerTokenData) => {
  return request({
    method: "POST",
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
    url: API_PATHS.apiRouts.setServerToken,
    data,
  });
};

export const getServerToken = (): Promise<
  AxiosResponse<ISetServerTokenData>
> => {
  return request({
    method: "GET",
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
    url: API_PATHS.apiRouts.getServerToken,
    withCredentials: true,
  });
};

export const refreshAccessToken = (refreshToken: string): Promise<
  AxiosResponse<{accessToken: string}>> => {
  return request({
    method: "POST",
    url: API_PATHS.apiRouts.refreshAccessToken,
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  })
}

export const deleteServerToken = () => {
  return request({
    method: "POST",
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
    url: API_PATHS.apiRouts.deleteServerToken,
  });
};
