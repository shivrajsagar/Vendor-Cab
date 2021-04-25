import {
  DOCUMENT_LOADING,
  LOADING,
  UPLOAD_DOCUMENT,
  UPLOAD_DOCUMENT_FAIL,
  UPLOAD_DOCUMENT_SUCCESS,
} from "./types";
import { Platform } from "react-native";

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
}) => async (dispatch) => {
  // try {
  dispatch({ type: DOCUMENT_LOADING });

  const jsonValue = await AsyncStorage.getItem("book_id");
  const driverid = JSON.parse(jsonValue);

  var data = new FormData();
  data.append("name", name);
  data.append("aadhar_front_image", {
    name: aadhar_front_image,
    uri:
      Platform.OS === "android"
        ? aadhar_front_image
        : aadhar_front_image.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("aadhar_back_image", {
    name: aadhar_back_image,
    uri:
      Platform.OS === "android"
        ? aadhar_back_image
        : aadhar_back_image.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("driver_id", driverid);
  data.append("aadhar_no", aadhar_no);
  data.append("Issue_Date", "");
  data.append("status", "0");
  // Please change file upload URL
  let res = await fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=DriverAadharDetails",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data; ",
      },
    }
  );
  let responseJson = await res.json();
  console.log(JSON.stringify(responseJson));

  responseJson.error === true
    ? uploadFail(dispatch, responseJson.message)
    : [
        uploadSuccess(dispatch, responseJson.message),
        setTimeout(() => {
          uploadSuccess(dispatch, ""), RootNavigation.navigate("Documentation");
        }, 5000),
      ];
};

// pan card upload

export const uploadPan = ({ pan_front, pan_back, name, pan_no }) => async (
  dispatch
) => {
  // try {
  dispatch({ type: DOCUMENT_LOADING });

  const jsonValue = await AsyncStorage.getItem("book_id");
  const driverid = JSON.parse(jsonValue);

  var data = new FormData();

  data.append("pan_front", {
    name: pan_front,
    uri:
      Platform.OS === "android" ? pan_front : pan_front.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("pan_back", {
    name: pan_back,
    uri: Platform.OS === "android" ? pan_back : pan_back.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("name", name);
  data.append("mfd_date", "");
  data.append("exp_date", "");
  data.append("status", "0");
  data.append("driver_id", driverid);
  data.append("pan_no", pan_no);
  // Please change file upload URL
  let res = await fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=DriverPANDetails",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data; ",
      },
    }
  );
  let responseJson = await res.json();
  console.log(JSON.stringify(responseJson));

  responseJson.error === true
    ? uploadFail(dispatch, responseJson.message)
    : [
        uploadSuccess(dispatch, responseJson.message),
        setTimeout(() => {
          uploadSuccess(dispatch, ""), RootNavigation.navigate("Documentation");
        }, 5000),
      ];
};

// Licence Upload Document////

export const uploadLicence = ({
  driving_license_front,
  driving_license_back,
  name,
  mfd_date,
  license_no,
}) => async (dispatch) => {
  //try {
  dispatch({ type: DOCUMENT_LOADING });

  const jsonValue = await AsyncStorage.getItem("book_id");
  const driverid = JSON.parse(jsonValue);

  var data = new FormData();
  //data.append("name", name);
  data.append("driving_license_front", {
    name: driving_license_front,
    uri:
      Platform.OS === "android"
        ? driving_license_front
        : driving_license_front.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("driving_license_back", {
    name: driving_license_back,
    uri:
      Platform.OS === "android"
        ? driving_license_back
        : driving_license_back.replace("file://", ""),
    type: "image/jpeg",
  });

  data.append("license_no", license_no);
  data.append("name", name);
  data.append("mfd_date", mfd_date);
  data.append("status", "0");
  data.append("driver_id", driverid);
  // Please change file upload URL
  let res = await fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=DriverLicenseDetails",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data; ",
      },
    }
  );
  let responseJson = await res.json();
  console.log(JSON.stringify(responseJson));

  responseJson.error === true
    ? uploadFail(dispatch, responseJson.message)
    : [
        uploadSuccess(dispatch, responseJson.message),
        setTimeout(() => {
          uploadSuccess(dispatch, ""), RootNavigation.navigate("Documentation");
        }, 5000),
      ];
};

///Upload Rc document

export const uploadRc = ({
  rc_front,
  rc_back,
  name,
  mfd_date,
  rc_no,
}) => async (dispatch) => {
  // try {
  dispatch({ type: DOCUMENT_LOADING });

  const jsonValue = await AsyncStorage.getItem("book_id");
  const driverid = JSON.parse(jsonValue);

  var data = new FormData();

  data.append("rc_front", {
    name: rc_front,
    uri: Platform.OS === "android" ? rc_front : rc_front.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("rc_back", {
    name: rc_back,
    uri: Platform.OS === "android" ? rc_back : rc_back.replace("file://", ""),
    type: "image/jpeg",
  });

  data.append("rc_no", rc_no);
  data.append("name", name);
  data.append("mfd_date", mfd_date);
  data.append("status", "0");
  data.append("driver_id", driverid);
  // Please change file upload URL
  let res = await fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=DriverRcDetails",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data; ",
      },
    }
  );
  let responseJson = await res.json();
  console.log(JSON.stringify(responseJson));

  responseJson.error === true
    ? uploadFail(dispatch, responseJson.message)
    : [
        uploadSuccess(dispatch, responseJson.message),
        setTimeout(() => {
          uploadSuccess(dispatch, ""), RootNavigation.navigate("Documentation");
        }, 5000),
      ];
};

//upload Taxi Insurance

export const uploadTaxiInsurance = ({
  insurance_front,
  insurance_back,
  name,
  mfd_date,
  exp_date,
  insurance_no,
}) => async (dispatch) => {
  // try {
  dispatch({ type: DOCUMENT_LOADING });

  const jsonValue = await AsyncStorage.getItem("book_id");
  const driverid = JSON.parse(jsonValue);

  var data = new FormData();

  data.append("insurance_front", {
    name: insurance_front,
    uri:
      Platform.OS === "android"
        ? insurance_front
        : insurance_front.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("insurance_back", {
    name: insurance_back,
    uri:
      Platform.OS === "android"
        ? insurance_back
        : insurance_back.replace("file://", ""),
    type: "image/jpeg",
  });

  data.append("insurance_no", insurance_no);
  data.append("name", name);
  data.append("mfd_date", mfd_date);
  data.append("exp_date", exp_date);
  data.append("status", "0");
  data.append("driver_id", driverid);
  // Please change file upload URL
  let res = await fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=DriverTaxiInsuranceDetails",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data; ",
      },
    }
  );
  let responseJson = await res.json();
  console.log(JSON.stringify(responseJson));

  responseJson.error === true
    ? uploadFail(dispatch, responseJson.message)
    : [
        uploadSuccess(dispatch, responseJson.message),
        setTimeout(() => {
          uploadSuccess(dispatch, ""), RootNavigation.navigate("Documentation");
        }, 5000),
      ];
};

//upload Taxi Insurance

export const uploadAccountDetail = ({
  bank_name,
  account_type,
  bank_IFSC,
  account_no,
  mobile_no,
  name,
  id,
}) => async (dispatch) => {
  try {
    dispatch({ type: DOCUMENT_LOADING });

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      bank_name,
      account_type,
      bank_IFSC,
      account_no,
      mobile_no,
      name,
      driver_id: driverid,
      id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://expresscab.in/CarDriving/api/account_detail/create.php",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error == "false") {
          uploadSuccess(dispatch, data.message),
            setTimeout(() => {
              RootNavigation.navigate("Documentation");
            }, 5000);
        } else {
          uploadFail(dispatch, data.message);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

/// fitness detail ///

export const uploadFitnessCertificate = ({
  certificate_front,
  certificate_back,
  name,
  certificate_no,
  mfd_date,
  xpi_date,
}) => async (dispatch) => {
  dispatch({ type: DOCUMENT_LOADING });

  const jsonValue = await AsyncStorage.getItem("book_id");
  const driverid = JSON.parse(jsonValue);

  var data = new FormData();
  data.append("certificate_front", {
    name: certificate_front,
    uri:
      Platform.OS === "android"
        ? certificate_front
        : certificate_front.replace("file://", ""),
    type: "image/jpeg",
  });
  data.append("certificate_back", {
    name: certificate_back,
    uri:
      Platform.OS === "android"
        ? certificate_back
        : certificate_back.replace("file://", ""),
    type: "image/jpeg",
  });

  data.append("name", name);
  data.append("mfd_date", mfd_date);
  data.append("xpi_date", xpi_date);
  data.append("status", "0");
  data.append("driver_id", driverid);
  data.append("certificate_no", certificate_no);
  // Please change file upload URL
  let res = await fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=DriverFitnessDetails",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data; ",
      },
    }
  );
  let responseJson = await res.json();
  console.log(JSON.stringify(responseJson));

  responseJson.error === true
    ? uploadFail(dispatch, responseJson.message)
    : [
        uploadSuccess(dispatch, responseJson.message),
        setTimeout(() => {
          uploadSuccess(dispatch, ""), RootNavigation.navigate("Documentation");
        }, 5000),
      ];
};
// Taxi photo upload

export const TaxiPhoto = ({ TexiImage }) => async (dispatch) => {
  try {
    dispatch({ type: DOCUMENT_LOADING });

    const jsonValue = await AsyncStorage.getItem("book_id");
    const driverid = JSON.parse(jsonValue);

    var data = new FormData();
    data.append("image", {
      name: TexiImage,
      uri:
        Platform.OS === "android"
          ? TexiImage
          : TexiImage.replace("file://", ""),
      type: "image/jpeg",
    });
    data.append("driverID", driverid);

    var requestOptions = {
      method: "POST",
      body: data,
      redirect: "follow",
    };

    // Please change file upload URL
    fetch(
      "https://expresscab.in/CarDriving/driver_Info.php?apicall=TaxiImage",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message == true) {
          uploadFail(dispatch, result.message);
        } else {
          uploadSuccess(dispatch, result.message);
          setTimeout(() => {
            uploadSuccess(dispatch, ""),
              RootNavigation.navigate("Documentation");
            console.log(result.message);
          }, 2000);
        }
      })
      .catch((error) => console.log("error", error));
  } catch (e) {
    throw e;
  }
};
