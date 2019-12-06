import { combineReducers } from "redux";
import { comicReducer } from "./comicReducer";

export const rootReducer = combineReducers({
  comics: comicReducer
});
