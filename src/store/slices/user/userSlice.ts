import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { IUserRespData } from "@/types/auth/auth";

interface IInitialState {
  user: IUserRespData | null;
}

const initialState: IInitialState = {
  user: {
    id: NaN,
    name: '',
    email: '',
    shortName: '',
    avatar: '',
    balance: 0,
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserRespData>) {
      state.user = action.payload;
    },
    resetUser(state) {
      state.user = null;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
