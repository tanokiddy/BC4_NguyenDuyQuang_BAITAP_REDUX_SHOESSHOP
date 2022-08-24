import { combineReducers } from "redux";
import { shoesReducers } from "./shoesReducers";

export let rootReducer_ShoesShop = combineReducers({
  shoesReducers: shoesReducers,
});
