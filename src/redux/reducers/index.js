import photoReducer from "./photo";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  photo: photoReducer,
});

export default rootReducer;
