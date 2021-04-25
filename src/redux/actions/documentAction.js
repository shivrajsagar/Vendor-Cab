import {
  LOADING,
  UPLOAD_DOCUMENT,
  UPLOAD_DOCUMENT_FAIL,
  UPLOAD_DOCUMENT_SUCCESS,
} from "./types";
import { Platform } from "react-native";
import api from "../../api";

import axios from "axios";

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

//     var formdata = new FormData();
//     formdata.append("aadhar_front_image", {
//       uri:
// Platform.OS === "android"
//   ? aadhar_front_image.replace("file:/", "file://")
//   : aadhar_front_image.replace("file:///", "file://"),
//       name2,
//       type,
//     });
//     formdata.append("aadhar_back_image", {
//       uri:
//         Platform.OS === "android"
//           ? aadhar_back_image.replace("file:/", "file://")
//           : aadhar_back_image.replace("file:///", "file://"),
//       name2,
//       type,
//     });
//     console.log(formdata);
//     formdata.append("driver_id", driverid);
//     formdata.append("aadhar_no", aadhar_no);
//     formdata.append("name", name);
//     formdata.append("Issue_Date", Issue_Date);
//     formdata.append("status", "0");

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//       head
//     };

//     const response = await api.post("/driver_Info.php?apicall=DriverAadharDetails", formdata, {
//       requestOptions,
//     });

//     console.log(response);

//     response.data.error === true
//       ? uploadFail(dispatch, response.data.message)
//       : [
//           uploadSuccess(dispatch, response.data.message),
//           setTimeout(() => {
//             RootNavigation.navigate("Documentation");
//           }, 5000),
//         ];
//   } catch (err) {
//     console.log(err);
//   }
// };

/// pan card upload

export const uploadPan = ({ pan_front, pan_back, name, pan_no }) => async (
  dispatch
) => {
  // try {
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

//     formdata.append("pan_front", {
//       uri: pan_front,
//       name2,
//       type,
//     });
//     formdata.append("pan_back", {
//       uri: pan_back,
//       name2,
//       type,
//     });
//     formdata.append("name", name);
//     formdata.append("mfd_date", mfd_date);
//     formdata.append("exp_date", "");
//     formdata.append("status", "0");
//     formdata.append("driver_id", driverid);
//     formdata.append("pan_no", pan_no);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     const response = await api.post("/driver_Info.php?apicall=PANCardDetails", formdata, {
//       requestOptions,
//     });

//     response.data.error === true
//       ? uploadFail(dispatch, response.data.message)
//       : [
//           uploadSuccess(dispatch, response.data.message),
//           setTimeout(() => {
//             RootNavigation.navigate("Documentation");
//           }, 5000),
//         ];
//   } catch (err) {
//     console.log(err);
//   }
// };

// Licence Upload Document////

export const uploadLicence = ({
  driving_license_front,
  driving_license_back,
  name,
  mfd_date,
  license_no,
}) => async (dispatch) => {
  //try {
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

//     formdata.append("driving_license_front", {
//       uri: driving_license_front,
//       name2,
//       type,
//     });
//     formdata.append("driving_license_back", {
//       uri: driving_license_back,
//       name2,
//       type,
//     });
//     formdata.append("license_no", license_no);
//     formdata.append("name", name);
//     formdata.append("mfd_date", mfd_date);
//     formdata.append("status", "0");
//     formdata.append("driver_id", driverid);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     const response = await api.post("/driver_Info.php?apicall=DriverLicenseDetails", formdata, {
//       requestOptions,
//     });

//     response.data.error === false
//       ? uploadFail(dispatch, response.data.message)
//       : [
//           uploadSuccess(dispatch, response.data.message),
//           setTimeout(() => {
//             RootNavigation.navigate("Documentation");
//           }, 5000),
//         ];
//   } catch (err) {
//     console.log(err);
//   }
// };

///Upload Rc document

export const uploadRc = ({
  rc_front,
  rc_back,
  name,
  mfd_date,
  rc_no,
}) => async (dispatch) => {
  // try {
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

//     formdata.append("rc_front", {
//       uri: rc_front,
//       name2,
//       type,
//     });
//     formdata.append("rc_back", {
//       uri: rc_back,
//       name2,
//       type,
//     });
//     formdata.append("rc_no", rc_no);
//     formdata.append("name", name);
//     formdata.append("mfd_date", mfd_date);
//     formdata.append("status", "0");
//     formdata.append("driver_id", driverid);

//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     const response = await api.post("/driver_Info.php?apicall=DriverRcDetails", formdata, {
//       requestOptions,
//     });

//     console.log(response.data);
//     response.data.error === false
//       ? uploadFail(dispatch, response.data.message)
//       : [
//           uploadSuccess(dispatch, response.data.message),
//           setTimeout(() => {
//             RootNavigation.navigate("Documentation");
//           }, 5000),
//         ];
//   } catch (err) {
//     console.log(err);
//   }
// };

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
    dispatch({ type: LOADING });

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
  
  dispatch({ type: LOADING });
  const name2 = `picture.jpg`;
  let localUri1 = certificate_front;
  let filename1 = localUri1.split("/").pop();

  let localUri2 = certificate_back;
  let filename2 = localUri2.split("/").pop();

  let match = /\.(\w+)$/.exec(filename1, filename2);
  let type = match ? `image/${match[1]}` : `image`;

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

export const TaxiPhoto = ({
  certificate_front,
  certificate_back,
  name,
  certificate_no,
  mfd_date,
  xpi_date,
}) => async (dispatch) => {
  
  dispatch({ type: LOADING });
  const name2 = `picture.jpg`;
  let localUri1 = certificate_front;
  let filename1 = localUri1.split("/").pop();

  let localUri2 = certificate_back;
  let filename2 = localUri2.split("/").pop();

  let match = /\.(\w+)$/.exec(filename1, filename2);
  let type = match ? `image/${match[1]}` : `image`;

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

