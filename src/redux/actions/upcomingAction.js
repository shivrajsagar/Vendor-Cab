import { FETCH_UPCOMING_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchUpcomingData = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      "https://expresscab.in/CarDriving/api/booking/upcomingread.php"
    );
    dispatch({
      type: FETCH_UPCOMING_DATA,
      payload: response.data.UPComing_Ride_list,
      loading: false,
    });
  } catch (e) {
    throw e;
  }
};
