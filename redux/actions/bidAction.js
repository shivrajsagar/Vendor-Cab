import axios from "axios";

import { SAVE_BID, LOADING, ERROR } from "./types";

export const saveBidData = ({book_id,booking_id, amount}) => async (dispatch) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    book_id:book_id,
    booking_id: booking_id,
    vendor_id: "E1245",
    amount: "2000",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/savebid.php",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => dispatch({ type: SAVE_BID, payload: result.message }))
    .catch((error) => console.log("error", error));

  /**  const response = await axios.post(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/savebid.php"
  );
  dispatch({ type: SAVE_BID, payload:response });
 */
};
