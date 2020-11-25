import { FETCH_COMPLETED_DATA, LOADING, ERROR } from "./types";

import axios from "axios";

export const fetchCompleteData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/completeread.php"
  );

  dispatch({ type: FETCH_COMPLETED_DATA, payload: response.data.complete_Rides_list, loading: false });
};
