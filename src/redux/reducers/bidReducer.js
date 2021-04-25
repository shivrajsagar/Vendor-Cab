import {
  LOADING,
  BID_ERROR,
  SAVE_BID_SUCCESS,
  SAVE_BID,
  REFRESH_MESSAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
  BID_LOADING,
} from "../actions/types";

const initialState = {
  bidloading: false,
  message: [],
  isShow: false,
  showModal: false,
  book_id: "",
  booking_id: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BID_LOADING:
      return { ...state, bidloading: true };
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
      return {
        ...state,
        showModal: true,
        book_id: action.book_id,
        booking_id: action.booking_id,
        bidloading: false,
      };
    case CLOSE_MODAL:
      return { ...state, showModal: false, bidloading: false };
    default:
      return state;
  }
};
