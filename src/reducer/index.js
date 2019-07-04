import { combineReducers } from "redux";
import counterReducer from "./counter";
import order from "./order";
import selectRating from "./select-rating";

export default combineReducers({
  count: counterReducer,
  order,
  minRating: selectRating
});
