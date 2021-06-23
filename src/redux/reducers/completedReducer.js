import { FETCH_COMPLETED_DATA, LOADING } from "../actions/types";

const initialState = {
  completeditem: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: false };
    case FETCH_COMPLETED_DATA:
      return { ...state, completeditem: action.payload, loading: false };
    default:
      return state;
  }
}
