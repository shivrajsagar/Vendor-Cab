import { FETCH_CURRENT_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchCurrentData = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      "https://expresscab.in/CarDriving/api/booking/currentread.php"
    );

    dispatch({ type: FETCH_CURRENT_DATA, payload: response.data.current_list });
  } catch (e) {
    throw e;
  }
};
