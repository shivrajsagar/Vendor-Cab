import {
  MOBILE_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGOUT,
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  mobile: "",
  vehicle_name: "",
  vehicle_no: "",
  password: "",
  user: null,
  error: "",
  authloading: false,
  message: null,
  successMessage:"",
  diver_id:"",
};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case MOBILE_CHANGED:
      return { ...state, mobile: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, authloading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        authloading: false,
        mobile: "",
        password: "",
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: "Authentication failed",
        password: "",
        authloading: false,
      };
      case REGISTER_USER:
        return { ...state, loading: true, error: "" };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        authloading: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        [action.payload.prop]: action.payload.value,
        authloading:false,
        error:"",
        successMessage:"Congrats ! "
      };
      case LOGOUT:
      return { ...state, token: null, loginmessage: null, INITIAL_STATE };
    
    default:
      return state;
  }
};
