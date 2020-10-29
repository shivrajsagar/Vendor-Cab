import { FETCH_CURRENT_DATA, LOADING } from "../actions/types";

const initialState = {
  currentitem: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_CURRENT_DATA:
      return { ...state, currentitem: action.payload, loading: false };
    default:
      return state;
  }
}
