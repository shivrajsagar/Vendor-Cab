import AsyncStorage from "@react-native-async-storage/async-storage";
import { VIEW_LOADING } from "./types";

export const Aadharphoto = () => async (dispatch) => {
  dispatch({ type: BID_LOADING });
  const driver_id = await AsyncStorage.getItem("driver_id");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var formdata = new FormData();

  formdata.append("vendorID", driver_id);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://expresscab.in/CarDriving/driver_Info.php?apicall=GetAllDataOfDriverAadharDetails",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => [console.log(result.biddata.amount)])
    .catch((error) => bidError(dispatch, error));
};
