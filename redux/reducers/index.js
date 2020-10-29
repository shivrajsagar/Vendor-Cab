import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import upcomingReducer from "./upcomingReducer";
import completedReducer from "./completedReducer";
import bidReducer from "./bidReducer";
import authReducer from "./authReducer";

export default combineReducers({
  current: currentReducer,
  upcoming: upcomingReducer,
  completed: completedReducer,
  savebid: bidReducer,
  auth: authReducer,
});
