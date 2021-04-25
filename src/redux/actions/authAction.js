import axios from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../navigation/RootNavigation";
import {
  MOBILE_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGOUT,
  AUTH_LOADING,
  USER_VALUE,
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

export const userValue = ({ prop, value }) => {
  return {
    type: USER_VALUE,
    payload: { prop, value },
  };
};

export const loginUser = ({ mobile, password }) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING });
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

    await AsyncStorage.setItem("Name", response.data.driver.name);
    const jsonValue = JSON.stringify(response.data.driver.id);
    await AsyncStorage.setItem("book_id", jsonValue);
    await AsyncStorage.setItem("driver_id", jsonValue);
    await AsyncStorage.setItem("driver", JSON.stringify(response.data.driver));
    await AsyncStorage.setItem("image", response.data.driver.profileImage);

    RootNavigation.navigate("App");
  } catch (err) {
    loginUserFail(dispatch);
  }
};

export const registerUser = ({
  profileimage,
  name,
  mobile,
  vehicle_no,
  vehicle_name,
  password,
}) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING });
    var formdata = new FormData();

    formdata.append("profileimage", {
      name: profileimage,
      uri:
        Platform.OS === "android"
          ? profileimage
          : profileimage.replace("file://", ""),
      type: "image/jpeg",
    });

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

export const logout = (navigation) => async (dispatch) => {
  await AsyncStorage.clear();
  dispatch({ type: LOGOUT });
  navigation.replace("LoginFlow");
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
