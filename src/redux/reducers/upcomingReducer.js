import { FETCH_UPCOMING_DATA, LOADING } from "../actions/types";

const initialState = {
  upcomingitem: [],
  upcomingloading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, upcomingloading: true };
    case FETCH_UPCOMING_DATA:
      return { ...state, upcomingitem: action.payload, upcomingloading: false };
    default:
      return state;
  }
}
