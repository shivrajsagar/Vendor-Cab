import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import upcomingReducer from "./upcomingReducer";
import completedReducer from "./completedReducer";
import bidReducer from "./bidReducer";
import authReducer from "./authReducer";
import documentReducer from "./documentReducer";
import BidAmountReducer from "./BidAmountReducer";
import ViewReducer from "./ViewReducer";

export default combineReducers({
  current: currentReducer,
  upcoming: upcomingReducer,
  completed: completedReducer,
  savebid: bidReducer,
  auth: authReducer,
  document: documentReducer,
  BIDAMOUNT: BidAmountReducer,
  Viewdocs: ViewReducer,
});
