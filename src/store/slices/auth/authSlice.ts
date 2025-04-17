import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AUTH_PATHS } from "@/components/Auth/constants/AUTH_PATHS";
import { RootState } from "@/store";

interface IInitialState {
  authPath: string;
}

const initialState: IInitialState = {
  authPath: AUTH_PATHS.logIn,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthPath(state, action: PayloadAction<string>) {
      state.authPath = action.payload;
    },
    resetAuthPath(state) {
      state.authPath = AUTH_PATHS.logIn;
    },
  },
});

export const selectAuthPath = (state: RootState) => state.auth.authPath;

export const { setAuthPath, resetAuthPath } = authSlice.actions;

export default authSlice.reducer;
