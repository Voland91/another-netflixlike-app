import { combineReducers } from "redux";
import movies from "./moviesReducer";
// import cart from "./cartReducer";

const rootReducer = combineReducers({
  movies,
//   cart,
});

export default rootReducer;