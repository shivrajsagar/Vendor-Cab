import { FETCH_UPCOMING_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchUpcomingData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/upcomingread.php"
  );

  dispatch({ type: FETCH_UPCOMING_DATA, payload: response.data.UPComing_Ride_list });
};
