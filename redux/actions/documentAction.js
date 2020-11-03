import {
  LOADING,
  UPLOAD_DOCUMENT,
  UPLOAD_DOCUMENT_FAIL,
  UPLOAD_DOCUMENT_SUCCESS,
} from "./types";

import axios from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../navigation/RootNavigation";

export const uploadDocumentValue = ({ prop, value }) => {
  return {
    type: UPLOAD_DOCUMENT,
    payload: { prop, value },
  };
};

export const uploadFail = (dispatch, error) => {
  dispatch({
    type: UPLOAD_DOCUMENT_FAIL,
    payload: error,
  });
};

export const uploadSuccess = (dispatch, message) => {
  dispatch({
    type: UPLOAD_DOCUMENT_SUCCESS,
    payload: message,
  });
};

export const uploadAadhar = ({
  aadhar_front_image,
  aadhar_back_image,
  name,
  aadhar_no,
  Issue_Date,
}) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const name2 = `picture.jpg`;
    let localUri1 = aadhar_front_image;
    let filename1 = localUri1.split("/").pop();

    let localUri2 = aadhar_back_image;
    let filename2 = localUri2.split("/").pop();

    let match = /\.(\w+)$/.exec(filename1, filename2);
    let type = match ? `image/${match[1]}` : `image`;

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);

    var formdata = new FormData();
    formdata.append("aadhar_front_image", {
      uri: aadhar_back_image,
      name2,
      type,
    });
    formdata.append("aadhar_back_image", {
      uri: aadhar_back_image,
      name2,
      type,
    });
    formdata.append("name", name);
    formdata.append("Issue_Date", Issue_Date);
    formdata.append("status", "0");
    formdata.append("driver_id", driverid);
    formdata.append("aadhar_no", aadhar_no);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "/driver_Info.php?apicall=DriverAadharDetails",
      formdata,
      {
        requestOptions,
      }
    );
  
    response.data.error === true
      ? uploadFail(dispatch, response.data.message)
      : [
          uploadSuccess(dispatch, response.data.message),
          setTimeout(() => {
            RootNavigation.navigate("Documentation");
          }, 5000),
        ];
  } catch (err) {
    console.log(err);
  }
};

// Licence Upload Document////

export const uploadLicence = ({
  driving_license_front,
  driving_license_back,
  name,
  mfd_date,
  license_no,
}) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const name2 = `picture.jpg`;
    let localUri1 = driving_license_front;
    let filename1 = localUri1.split("/").pop();

    let localUri2 = driving_license_back;
    let filename2 = localUri2.split("/").pop();

    let match = /\.(\w+)$/.exec(filename1, filename2);
    let type = match ? `image/${match[1]}` : `image`;

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);

    var formdata = new FormData();
    formdata.append("driving_license_front", {
      uri: driving_license_front,
      name2,
      type,
    });
    formdata.append("driving_license_back", {
      uri: driving_license_back,
      name2,
      type,
    });
    formdata.append("name", name);
    formdata.append("mfd_date", mfd_date);
    formdata.append("status", "0");
    formdata.append("driver_id", driverid);
    formdata.append("license_no", license_no);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "/driver_Info.php?apicall=DriverLicenseDetails",
      formdata,
      {
        requestOptions,
      }
    );
    console.log(response.data);
    response.data.error === true
      ? uploadFail(dispatch, response.data.message)
      : [
          uploadSuccess(dispatch, response.data.message),
          setTimeout(() => {
            RootNavigation.navigate("Documentation");
          }, 5000),
        ];
  } catch (err) {
    console.log(err);
  }
};
