import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store";

export interface IInitialState {
  code: string | null;
  email: string | null;
}

const initialState: IInitialState = {
  code: null,
  email: null,
};

export const recoveryPasswordSlice = createSlice({
  name: "recoveryPassword",
  initialState,
  reducers: {
    setRecoveryPasswordEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setRecoveryPasswordCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    resetRecoveryPassword(state) {
      state.email = null;
      state.code = null;
    },
  },
});

export const selectRecoveryData = (state: RootState) => state.recoveryPassword;

export const {
  setRecoveryPasswordEmail,
  setRecoveryPasswordCode,
  resetRecoveryPassword,
} = recoveryPasswordSlice.actions;

export default recoveryPasswordSlice.reducer;
