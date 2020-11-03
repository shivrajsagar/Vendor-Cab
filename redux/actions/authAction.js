import axios from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../navigation/RootNavigation";
import {
  MOBILE_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
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

export const registerUserValue = ({ prop, value }) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: { prop, value },
  };
};

export const loginUser = ({ mobile, password }) => async (dispatch) => {
  try {
    dispatch({type:LOGIN_USER})
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
    await AsyncStorage.setItem("Name", response.data.driver.name);
    const jsonValue = JSON.stringify(response.data.driver.id)
    await AsyncStorage.setItem("book_id",jsonValue);

  } catch (err) {
    loginUserFail(dispatch);
  }
};

export const registerUser = ({
  name,
  mobile,
  vehicle_no,
  vehicle_name,
  password,
}) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER });
    var formdata = new FormData();
    formdata.append("image", "");
    formdata.append("name", `${name}`);
    formdata.append("vehicle_name", `${vehicle_name}`);
    formdata.append("vehicle_no", `${vehicle_no}`);
    formdata.append("mobile_no", `${mobile}`);
    formdata.append("password", `${password}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "/driver_Info.php?apicall=driverprofile",
      formdata,
      { requestOptions }
    );

    console.log(response.data);
    response.data.error === true
      ? registerUserFail(dispatch, response.data.message)
      : [
          registerUserSuccess(dispatch, response.data.message),
          RootNavigation.navigate("Signin"),
        ];
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
const registerUserFail = (dispatch, error) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: error,
  });
};

const registerUserSuccess = (dispatch, message) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: message,
  });
};
