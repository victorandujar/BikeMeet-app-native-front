import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User, type UserState } from "./types/types";

const initialState: UserState = {
  email: "",
  id: "",
  token: "",
  isLogged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      email: action.payload.email,
      id: action.payload.id,
      token: action.payload.token,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
