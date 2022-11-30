import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/user_reducer";

const store = configureStore({
  reducer: {
    loginReducer,
  },
});

export default store;
