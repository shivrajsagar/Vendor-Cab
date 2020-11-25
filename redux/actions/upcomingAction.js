<<<<<<< HEAD
import { FETCH_UPCOMING_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchUpcomingData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/upcomingread.php"
  );

  dispatch({ type: FETCH_UPCOMING_DATA, payload: response.data.UPComing_Ride_list });
};
=======
import { FETCH_UPCOMING_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchUpcomingData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/upcomingread.php"
  );

  dispatch({ type: FETCH_UPCOMING_DATA, payload: response.data.UPComing_Ride_list });
};
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
