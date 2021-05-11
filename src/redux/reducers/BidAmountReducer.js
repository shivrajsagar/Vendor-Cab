import { BID_AMOUNT, LOADING } from "../actions/types";

const initialState = {
  Bidamount: [],
  upcomingBidloading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, upcomingBidloading: true };
    case BID_AMOUNT:
      return { ...state, Bidamount: action.payload, upcomingBidloading: false };
    default:
      return state;
  }
}
