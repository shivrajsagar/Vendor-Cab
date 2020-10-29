import { LOADING, ERROR, SUCCESS, SAVE_BID } from "../actions/types";

const initialState = {
  loading: false,
  message:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_BID:
      return { ...state, message: action.payload, loading: false };
    case ERROR:
      return { ...state, loading: false, message: action.payload };
    default:
      return state;
  }
}
