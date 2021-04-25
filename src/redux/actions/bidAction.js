import AsyncStorage from "@react-native-async-storage/async-storage";

import { SAVE_BID_SUCCESS, BID_ERROR, REFRESH_MESSAGE, OPEN_MODAL, CLOSE_MODAL } from "./types";

export const saveBidData = ({ book_id, booking_id, amount }) => async (dispatch) => {
  const driver_id = await AsyncStorage.getItem("driver_id");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    book_id: book_id,
    booking_id: booking_id,
    vendor_id: driver_id,
    amount: amount,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://expresscab.in/CarDriving/api/booking/savebid.php", requestOptions)
    .then((response) => response.json())
    .then((result) => [
      //dispatch({ type: SAVE_BID, payload: result.message }),
      bidSuccess(dispatch, result.message),
      console.log(result),
    ])
    .catch((error) => bidError(dispatch, error));
};

const bidError = (dispatch, error) => {
  dispatch({
    type: BID_ERROR,
    payload: error,
  });
};

const bidSuccess = (dispatch, message) => {
  dispatch({
    type: SAVE_BID_SUCCESS,
    payload: message,
  });
  setTimeout(() => {
    dispatch({ type: REFRESH_MESSAGE });
  }, 2000);
};

export const openModal = () => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};
