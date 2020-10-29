import axios from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../navigation/RootNavigation";
import {
  MOBILE_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  VEHICLE_NAME_CHANGED,
  VEHICLE_NO_CHANGED,
  IMAGED_CHANGED,
  LOGIN_USER_SUCCESS,
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

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};

export const vehiclenameChanged = (text) => {
  return {
    type: VEHICLE_NAME_CHANGED,
    payload: text,
  };
};

export const vehiclenoChanged = (text) => {
  return {
    type: VEHICLE_NO_CHANGED,
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
    await AsyncStorage.setItem("Name", response.data.driver.name);
  } catch (err) {
    loginUserFail(dispatch);
  }
};

export const registerUser = () => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("image", "suraj");
    formdata.append("name", "suraj");
    formdata.append("vehicle_name", "23423456");
    formdata.append("vehicle_no", "23423");
    formdata.append("mobile_no", "7355219891");
    formdata.append("password", "123");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://expresscab.in/CarDriving/driver_Info.php?apicall=driverprofile",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } catch (err) {
    console.log(err);
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
