export const API_PATHS = {
  categories: (searchString?: string) =>
    `v1/api/categories?isMain=true${
      searchString ? `&search=${searchString}` : ""
    }`,
  auth: {
    createUser: "v1/api/auth/sign-up",
    checkEmail: "/v1/api/auth/check-activation",
    logInUser: "v1/api/auth/login",
    checkLogin: "v1/api/user/my-profile",
    googleLogin: "v1/api/auth/google/login",
    googleCallback: "v1/api/auth/google/callback",
    VKLogin: "/v1/api/auth/vk/login",
    VKCallback: "v1/api/auth/vk/callback",
    telegramLogin: "/v1/api/auth/telegram/login",
    recoveryPasswordEmail: "/v1/api/auth/reset-password/initiate",
    recoveryPasswordCheckCode:'/v1/api/auth/reset-password/check-code',
    recoveryPassword: "/v1/api/auth/reset-password/change-password",
  },
  apiRouts: {
    setServerToken: "api/auth/set-token",
    getServerToken: "api/auth/get-token",
    deleteServerToken: "api/auth/delete-token",
    refreshAccessToken: "/v1/api/auth/refresh",
  },
};
