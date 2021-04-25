import {
  LOADING,
  BID_ERROR,
  SAVE_BID_SUCCESS,
  SAVE_BID,
  REFRESH_MESSAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions/types";

const initialState = {
  bidloading: false,
  message: [],
  isShow: false,
  showModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, bidloading: false, isShow: false };
    case SAVE_BID:
      return {
        ...state,
        message: action.payload,
        bidloading: false,
        isShow: false,
      };
    case SAVE_BID_SUCCESS:
      return {
        ...state,
        message: action.payload,
        bidloading: false,
        isShow: true,
      };
    case BID_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        isShow: true,
      };
    case REFRESH_MESSAGE:
      return { ...state, ...initialState };
    case OPEN_MODAL:
      return { ...state, showModal: true };
    case CLOSE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};
