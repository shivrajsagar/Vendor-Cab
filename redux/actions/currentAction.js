<<<<<<< HEAD
import { FETCH_CURRENT_DATA, LOADING, ERROR } from "./types";

import axios from "axios";

export const fetchCurrentData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/currentread.php"
  );

  dispatch({ type: FETCH_CURRENT_DATA, payload: response.data.current_list });
};
=======
import { FETCH_CURRENT_DATA, LOADING, ERROR } from "./types";

import axios from "axios";

export const fetchCurrentData = () => async (dispatch) => {
  dispatch({ type: LOADING });

  const response = await axios.get(
    "http://demo.expresscab.in/expressc_api/expressc/api/booking/currentread.php"
  );

  dispatch({ type: FETCH_CURRENT_DATA, payload: response.data.current_list });
};
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
