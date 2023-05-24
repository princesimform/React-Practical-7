import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { userLoginSlice } from "./userSlice";
const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    userLoginSlice: userLoginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
