import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getEmployees from "./slices/getEmployee";

const store = configureStore({
  reducer: { employees: getEmployees },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
