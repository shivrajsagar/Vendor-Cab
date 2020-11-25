<<<<<<< HEAD
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
      return { ...state, error: action.payload, documentloading: false };
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
        rc_no: "",
      };
    default:
      return state;
  }
};
=======
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
  pan_no: "",

  //bank account detail stuff
  bank_name: "",
  account_type: "",
  bank_IFSC: "",
  account_no: "",
  mobile_no: "",

  //driver fitness certificate
  certificate_no: "",
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
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
