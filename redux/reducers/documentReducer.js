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
  driver_id: "",
  loading: false,
  message: "",
  error: "",
  isShow: true,
  //licence stuff
  license_no: "",
  mfd_date: "",

  //rc document stuff
  rc_no: "",

  //pan card stuff
  pan_no:"",
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case UPLOAD_DOCUMENT:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        loading: false,
      };
    case UPLOAD_DOCUMENT_FAIL:
      return { ...state, error: action.payload, loading: false };
    case UPLOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: "",
        isShow: true,
        name: "",
        aadhar_no: "",
        Issue_Date: "",
        license_no: "",
        mfd_date: "",
        rc_no: "",
      };
    default:
      return state;
  }
};
