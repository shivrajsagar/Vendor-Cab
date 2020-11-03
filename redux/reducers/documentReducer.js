import {
  LOADING,
  UPLOAD_DOCUMENT,
  UPLOAD_DOCUMENT_FAIL,
  UPLOAD_DOCUMENT_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  aadhar_no: "",
  Issue_Date: "",
  status: "0",
  driver_id: "",
  loading: false,
  message: [],
  error: "",
  isShow: true,
  //licence stuff
  license_no:"",
  mfd_date:"",
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: "" };
    case UPLOAD_DOCUMENT:
      return {
        ...state,
        loading: false,
        [action.payload.prop]: action.payload.value,
      };
    case UPLOAD_DOCUMENT_FAIL:
      return { ...state, error: action.payload, loading: false, error: "" };
    case UPLOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        message: action.payload,
        loading: false,
        error: "",
        isShow: true,
        name: "",
        aadhar_no: "",
        Issue_Date: "",
        license_no:"",
        mfd_date:"",
      };
    default:
      return state;
  }
};
