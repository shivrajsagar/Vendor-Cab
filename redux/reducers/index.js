import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import upcomingReducer from "./upcomingReducer";
import completedReducer from "./completedReducer";
import bidReducer from "./bidReducer";
import authReducer from "./authReducer";
import documentReducer from './documentReducer';


export default combineReducers({
  current: currentReducer,
  upcoming: upcomingReducer,
  completed: completedReducer,
  savebid: bidReducer,
  auth: authReducer,
  document:documentReducer,
});
