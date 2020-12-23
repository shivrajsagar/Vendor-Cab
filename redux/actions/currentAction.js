import { FETCH_CURRENT_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchCurrentData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/currentread.php"
  );

  dispatch({ type: FETCH_CURRENT_DATA, payload: response.data.current_list });
};
