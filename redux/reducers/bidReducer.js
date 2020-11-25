import { LOADING, ERROR, SUCCESS, SAVE_BID } from "../actions/types";

const initialState = {
  bidloading: false,
  message: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, bidloading: false };
    case SAVE_BID:
      return { ...state, message: action.payload, bidloading: false };
    case ERROR:
      return { ...state, loading: false, message: action.payload };
    default:
      return state;
  }
};
