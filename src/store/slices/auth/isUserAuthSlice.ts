import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store";

interface IInitialState {
  isAuth: boolean;
}

const initialState: IInitialState = {
  isAuth: false,
};

export const isUserAuthSlice = createSlice({
  name: "isUserAuth",
  initialState,
  reducers: {
    setIsUserAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const selectIsUserAuth = (state: RootState) => state.isUserAuth.isAuth;

export const { setIsUserAuth } = isUserAuthSlice.actions;

export default isUserAuthSlice.reducer;
