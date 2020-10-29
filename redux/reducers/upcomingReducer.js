import { FETCH_UPCOMING_DATA, LOADING } from "../actions/types";

const initialState = {
  upcomingitem: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_UPCOMING_DATA:
      return { ...state, upcomingitem: action.payload, loading: false };
    default:
      return state;
  }
}
