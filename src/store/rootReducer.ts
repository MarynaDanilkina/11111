import { authSlice } from "./slices/auth/authSlice";
import { isUserAuthSlice } from "./slices/auth/isUserAuthSlice";
import { recoveryPasswordSlice } from "./slices/auth/recoveryPasswordSlice";
import { userSlice } from "@/store/slices/user/userSlice";

export const rootReducer = {
  [authSlice.name]: authSlice.reducer,
  [isUserAuthSlice.name]: isUserAuthSlice.reducer,
  [recoveryPasswordSlice.name]: recoveryPasswordSlice.reducer,
  [userSlice.name]: userSlice.reducer,
};
