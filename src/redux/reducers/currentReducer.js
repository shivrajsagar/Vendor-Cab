import { FETCH_CURRENT_DATA, LOADING } from "../actions/types";

const initialState = {
  currentitem: [],
  currentloading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, currentloading: false };
    case FETCH_CURRENT_DATA:
      return { ...state, currentitem: action.payload, currentloading: false };
    default:
      return state;
  }
}
