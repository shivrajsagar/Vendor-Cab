import { BID_AMOUNT, LOADING } from "./types";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BidAmountData = () => async (dispatch) => {
  const driver_id = await AsyncStorage.getItem("driver_id");

  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      `https://expresscab.in/CarDriving/api/booking/BidAmount.php?uid=${driver_id}`
    );

    dispatch({
      type: BID_AMOUNT,
      payload: response.data.UPComing_Ride_list,
      loading: false,
    });
  } catch (e) {
    throw e;
  }
};
