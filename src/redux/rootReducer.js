import { combineReducers } from "redux";
import userReducer from "./User/userReducer";

export const rootReducers = combineReducers({
  users: userReducer,
});
