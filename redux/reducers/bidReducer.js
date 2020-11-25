<<<<<<< HEAD
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
=======
import { LOADING, ERROR, SUCCESS, SAVE_BID } from "../actions/types";

const initialState = {
  loading: false,
  message: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SAVE_BID:
      return { ...state, message: action.payload, loading: false };
    case ERROR:
      return { ...state, loading: false, message: action.payload };
    default:
      return state;
  }
};
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
