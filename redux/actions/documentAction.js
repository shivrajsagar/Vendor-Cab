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




/// pan card upload



export const uploadPan = ({
  pan_front,
  pan_back,
  name,
  pan_no,
  mfd_date,
}) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const name2 = `picture.jpg`;
    let localUri1 = pan_front;
    let filename1 = localUri1.split("/").pop();

    let localUri2 = pan_back;
    let filename2 = localUri2.split("/").pop();

    let match = /\.(\w+)$/.exec(filename1, filename2);
    let type = match ? `image/${match[1]}` : `image`;

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);

    var formdata = new FormData();
    formdata.append("pan_front", {
      uri: pan_front,
      name2,
      type,
    });
    formdata.append("pan_back", {
      uri: pan_back,
      name2,
      type,
    });
    formdata.append("name", name);
    formdata.append("mfd_date", mfd_date);
    formdata.append("exp_date","");
    formdata.append("status", "0");
    formdata.append("driver_id", driverid);
    formdata.append("pan_no", pan_no);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "/driver_Info.php?apicall=PANCardDetails",
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
    formdata.append("license_no", license_no);
    formdata.append("name", name);
    formdata.append("mfd_date", mfd_date);
    formdata.append("status", "0");
    formdata.append("driver_id", driverid);

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

    response.data.error === false
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

///Upload Rc document

export const uploadRc = ({
  rc_front,
  rc_back,
  name,
  mfd_date,
  rc_no,
}) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const name2 = `picture.jpg`;
    let localUri1 = rc_front;
    let filename1 = localUri1.split("/").pop();

    let localUri2 = rc_back;
    let filename2 = localUri2.split("/").pop();

    let match = /\.(\w+)$/.exec(filename1, filename2);
    let type = match ? `image/${match[1]}` : `image`;

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);

    var formdata = new FormData();
    formdata.append("rc_front", {
      uri: rc_front,
      name2,
      type,
    });
    formdata.append("rc_back", {
      uri: rc_back,
      name2,
      type,
    });
    formdata.append("rc_no", rc_no);
    formdata.append("name", name);
    formdata.append("mfd_date", mfd_date);
    formdata.append("status", "0");
    formdata.append("driver_id", driverid);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "/driver_Info.php?apicall=DriverRcDetails",
      formdata,
      {
        requestOptions,
      }
    );

    console.log(response.data);
    response.data.error === false
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




//upload Taxi Insurance




export const uploadTaxiInsurance = ({
  insurance_front,
  insurance_back,
  name,
  mfd_date,
  insurance_no,
}) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const name2 = `picture.jpg`;
    let localUri1 = insurance_front;
    let filename1 = localUri1.split("/").pop();

    let localUri2 = insurance_back;
    let filename2 = localUri2.split("/").pop();

    let match = /\.(\w+)$/.exec(filename1, filename2);
    let type = match ? `image/${match[1]}` : `image`;

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);

    var formdata = new FormData();
    formdata.append("insurance_front", {
      uri: insurance_front,
      name2,
      type,
    });
    formdata.append("insurance_back", {
      uri: insurance_back,
      name2,
      type,
    });
    formdata.append("insurance_no", insurance_no);
    formdata.append("name", name);
    formdata.append("mfd_date", mfd_date);
    formdata.append("exp_date", "");
    formdata.append("status", "0");
    formdata.append("driver_id", driverid);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "/driver_Info.php?apicall=DriverTaxiInsuranceDetails",
      formdata,
      {
        requestOptions,
      }
    );

    console.log(response.data);
    response.data.error === false
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
