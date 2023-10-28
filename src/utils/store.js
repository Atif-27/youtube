import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import userActionSlice from "./userActionSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    userAction: userActionSlice,
  },
});

export default store;
