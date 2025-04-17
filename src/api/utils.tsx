import axios, { AxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export const request = (params: AxiosRequestConfig) => {
  return axiosInstance({
    ...params,
  });
};
