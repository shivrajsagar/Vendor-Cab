import {
  LOADING,
  UPLOAD_DOCUMENT,
  UPLOAD_DOCUMENT_FAIL,
  UPLOAD_DOCUMENT_SUCCESS,
  REFRESH_MESSAGE,
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  aadhar_no: "",
  Issue_Date: "",
  driver_id: "",
  documentloading: false,
  message: "",
  error: "",
  isShow: true,
  //licence stuff
  license_no: "",
  mfd_date: "",

  //rc document stuff
  rc_no: "",

  //pan card stuff
  pan_no: "",

  //bank account detail stuff
  bank_name: "",
  account_type: "",
  bank_IFSC: "",
  account_no: "",
  mobile_no: "",

  //driver fitness certificate
  certificate_no: "",
  xpi_date: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, documentloading: true };
    case UPLOAD_DOCUMENT:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        documentloading: false,
      };
    case UPLOAD_DOCUMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        documentloading: false,
        message: "",
      };
    case UPLOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        documentloading: false,
        error: "",
        isShow: true,
        name: "",
        aadhar_no: "",
        Issue_Date: "",
        license_no: "",
        mfd_date: "",
        xpi_date: "",
        exp_date: "",
        rc_no: "",
        bank_name: "",
        account_type: "",
        bank_IFSC: "",
        account_no: "",
        mobile_no: "",
      };
    case REFRESH_MESSAGE:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
