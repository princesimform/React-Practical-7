import { createSlice } from "@reduxjs/toolkit";
import { signUpInitialValuesTypes } from "../components/interface/interfaceList";

const userData = JSON.parse(localStorage.getItem("userData")!);
const userInitialState = userData == null ? [] : userData;

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    signUpUser(state, action) {
      // console.log(action.payload);
      console.log("userInitialState");
      console.log(userInitialState);
      
      const userList: any = [userInitialState, action.payload];
      // console.log(userList);
      
      localStorage.setItem("userData", userList);
    },
  },
});

export const userActions = userSlice.actions;
