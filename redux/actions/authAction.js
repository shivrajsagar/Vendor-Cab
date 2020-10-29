import axios from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from './path/to/RootNavigation.js';
import {
  MOBILE_CHANGED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from "../actions/types";

export const mobileChanged = (text) => {
  return {
    type: MOBILE_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ mobile, password }) => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("mobile_no", `${mobile}`);
    formdata.append("password", `${password}`);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await axios.post(
      "/driver_Info.php?apicall=driverinfo",
      formdata,
      { requestOptions }
    );
    response.data.error == true
      ? loginUserFail(dispatch)
      : loginUserSuccess(dispatch, response.data);
      RootNavigation.navigate("App");
  } catch (err) {
    loginUserFail(dispatch);
  }
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error,
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};
