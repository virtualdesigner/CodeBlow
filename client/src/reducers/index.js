import { combineReducers } from "redux";

import postReducer from "./postReducer";
import qaReducer from "./qaReducer";

export default combineReducers({
  posts: postReducer,
  qas: qaReducer
});
