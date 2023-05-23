import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
