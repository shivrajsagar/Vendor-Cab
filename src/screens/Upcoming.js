import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Block, Icon, Button, Text, Input } from "galio-framework";
import Theme from "../constants/Theme";
import { connect } from "react-redux";
import { BidAmountData } from "../redux/actions/BidAmountAction";
import { fetchUpcomingData } from "../redux/actions/upcomingAction";
import { openModal, closeModal } from "../redux/actions/bidAction";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalComponent } from "../components";
import axios from "axios";
import BidAmountdataitem from "../components/BidAmountdataitem";

const { width } = Dimensions.get("window");

const Upcoming = ({
  item2,
  fetchUpcomingData,
  BidAmountData,

  showModal,
  openModal,
  closeModal,
  message,
  driver_id,
}) => {
  const [item, setItem] = useState([]);
  const [data, setData] = useState([]);

  const [visible, setVisible] = useState(false);
  const [reload, setReload] = useState(true);
  const [book_id, setBook_id] = useState("");
  const [booking_id, setBooking_id] = useState("");

  const reloadFunction = (childData) => {
    setVisible(childData);
    setVisible(false);
    setReload(!reload);
  };
  const callbackFunction = (childData, bookid, bookingid) => {
    console.log(bookid + " book id function");
    setVisible(childData);
    setBook_id(bookid);
    setBooking_id(bookingid);
  };

  const getbiddata = async () => {
    const driver_id = await AsyncStorage.getItem("driver_id");
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();

    var config = {
      method: "GET",
      url: `https://expresscab.in/CarDriving/api/booking/BidAmount.php?uid=${driver_id}`,

      data: data,
    };

    axios(config)
      .then(function (response) {
        setData(response.data.UPComing_Ride_list);
        console.log(JSON.stringify(response.data.UPComing_Ride_list));
        console.log(response.data.UPComing_Ride_list.length + "===");
      })
      .catch(function (error) {
        console.log(error);
      });
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   `https://expresscab.in/CarDriving/api/booking/BidAmount.php?uid=${driver_id}`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log("FATCH==" + JSON.stringify(response));

    //     //setData(response.UPComing_Ride_list);
    //     // if (result.message === "No found.") {
    //     //   console.log(result.message);
    //     // } else {
    //     //   setData(result.UPComing_Ride_list);
    //     // }
    //   })
    //   .catch((error) => console.log("error", error));

    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // const myHeaders = {
    //   "X-Server-Cache": "false",
    // };
    // console.log(driver_id + "driver_id");
    // fetch(
    //   `https://expresscab.in/CarDriving/api/booking/BidAmount.php?uid=` +
    //     driver_id,
    //   requestOptions,
    //   myHeaders
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setData(result.UPComing_Ride_list);
    //     console.log(result.UPComing_Ride_list);
    //     console.log(data.length);
    //   })
    //   .catch((error) => console.log("Error==" + error));
  };

  const Upcomingdata = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://expresscab.in/CarDriving/api/booking/upcomingread.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setItem(result.UPComing_Ride_list);
        console.log(item.length + "card");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    Upcomingdata();
    getbiddata();
  }, [reload]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block style={styles.container1}>
        <FlatList
          data={item}
          renderItem={({ item, index }) => (
            <Card
              item={item}
              showModal={showModal}
              openModal={openModal}
              closeModal={closeModal}
              parentcallback={callbackFunction}
              key={index}
              data={data}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        {/* <ModalComponent
          visible={showModal}
          onDecline={() => closeModal()}
          // onSubmit={this.onSubmit}
          item={item}
          message={message}
        /> */}
        <BidAmountSubmit
          visible={visible}
          parentcallback={reloadFunction}
          book_id={book_id}
          booking_id={booking_id}
        />
      </Block>
    </ScrollView>
  );
};

const Card = ({ parentcallback, item, openModal, data }) => {
  const GetAmount = (item) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].bookingID === item.booking_id) {
        return (item.amount = data[i].amount);
      }
    }
    return 0;
  };
  return (
    <Block
      flex
      card
      shadow
      shadowColor={Theme.COLORS.NAVBAR_TITLE}
      style={styles.container}
      key={(item, index) => "Key" + index}
    >
      <Block middle style={styles.heading}>
        <Text size={20} color="white">
          {item.pickup_location} To {item.drop_location}
        </Text>
      </Block>

      <Block row style={styles.text}>
        <Block row>
          <Icon name="document" family="Entypo" size={20} color="#007acc" />
          <Text color="blue">Booking Id</Text>
        </Block>
        <Block>
          <Text>{item.booking_id}</Text>
        </Block>
      </Block>

      <Block row space="around" style={styles.text}>
        <Block row>
          <Icon name="location-pin" family="Entypo" size={20} color="#007acc" />
          <Text color="blue">Pickup Location</Text>
        </Block>
        <Block>
          <Text>{item.pickup_location}</Text>
        </Block>
      </Block>

      <Block row space="around" style={styles.text}>
        <Block row>
          <Icon name="location-pin" family="Entypo" size={20} color="#007acc" />
          <Text color="blue">Drop Location</Text>
        </Block>
        <Block>
          <Text>{item.drop_location}</Text>
        </Block>
      </Block>
      <Block row space="around" style={styles.text}>
        <Block row>
          <Icon name="calendar" family="Entypo" size={20} color="#007acc" />
          <Text color="blue">Pickup Date & Time</Text>
        </Block>
        <Block>
          <Text>
            {item.pickup_date}::{item.pickup_time}
          </Text>
        </Block>
      </Block>
      <Block row space="around" style={styles.text}>
        <Block row>
          <Icon name="calendar" family="Entypo" size={20} color="#007acc" />
          <Text color="blue">Drop Date & Time</Text>
        </Block>
        <Block>
          <Text>
            {item.drop_date}::{item.drop_time}
          </Text>
        </Block>
      </Block>
      {GetAmount(item) == 0 ? (
        <Block>
          <Block row style={styles.text}>
            <Block flex middle>
              <Button
                middle
                round
                color="#009688"
                onPress={() => [
                  console.log(item.id + "card  s"),
                  parentcallback(true, item.id, item.booking_id),
                ]}
              >
                Bid To accept
              </Button>
            </Block>
          </Block>
        </Block>
      ) : (
        <>
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon
                name="wallet"
                family="antdesign"
                size={18}
                color="#007acc"
              />
              <Text color="blue" style={{ marginLeft: 3 }}>
                Amount
              </Text>
            </Block>
            <Block>
              <Text>{item.amount}</Text>
            </Block>
          </Block>

          <Block row style={styles.text}>
            <Block flex middle>
              <Button
                middle
                round
                color="#009688"
                onPress={() => [
                  console.log(item.id + "card  s"),
                  parentcallback(true, item.id, item.booking_id),
                ]}
              >
                Edit Bid Amount
              </Button>
            </Block>
          </Block>
        </>
      )}
    </Block>
  );
};

const BidAmountSubmit = ({
  visible,
  parentcallback,
  book_id,
  booking_id,
  reloadVal,
}) => {
  const [amount, setAmount] = useState("");
  const [errormessage, setMessage] = useState("");
  const [loading, setLoaging] = useState(false);
  const onSubmit = () => {
    setLoaging(true);
    console.log(amount + " Amount bid");
    saveBid(book_id, booking_id);
  };
  const onDecline = () => {
    console.log("Decline");
    parentcallback(!reloadVal);
  };

  const saveBid = async () => {
    try {
      const driver_id = await AsyncStorage.getItem("driver_id");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var formdata = new FormData();
      formdata.append("amount", amount);
      formdata.append("book_id", book_id);
      formdata.append("booking_id", booking_id);
      formdata.append("vendor_id", driver_id);

      axios
        .post(
          "https://expresscab.in/CarDriving/driver_Info.php?apicall=bidinsert",
          formdata,
          myHeaders
        )
        .then((res) => {
          if (res.data.error != true) {
            console.log(res.data.message + " success");
            setAmount("");
            parentcallback(false);
            setMessage(res.data.message);
            setLoaging(false);
            setInterval(() => {
              setMessage("");
            }, 3000);
          } else {
            setMessage(res.data.error);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Block>
      <Modal visible={visible} transparent>
        <Block flex middle style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
          <Block
            card
            shadow
            shadowColor="gray"
            style={{ backgroundColor: "white", width: width, padding: 10 }}
          >
            <Block style={styles.close}>
              <TouchableOpacity onPress={onDecline}>
                <Icon
                  name="cross"
                  family="Entypo"
                  size={40}
                  color="red"
                  right
                />
              </TouchableOpacity>
            </Block>
            <Block>
              <Text size={20} center bold color="green">
                {errormessage}
              </Text>
              <Text h5 left>
                Enter You best Price
              </Text>
            </Block>
            <Input
              type="number"
              placeholder="Amount"
              type="number-pad"
              style={{ borderBottomColor: "red" }}
              color="gray"
              help="Please Enter Amount"
              bottomHelp
              value={amount}
              onChangeText={(number) => setAmount(number)}
              maxLength={5}
            />
            <Button
              round
              color={Theme.COLORS.BUTTON2}
              loading={loading}
              onPress={onSubmit}
            >
              Save
            </Button>
          </Block>
        </Block>
      </Modal>
    </Block>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Theme.COLORS.PRIMARY,
    alignItems: "center",
  },
  container: {
    backgroundColor: Theme.COLORS.WHITE,
    marginTop: 6,
    marginBottom: Theme.SIZES.BASE - 6,
    borderRadius: Theme.SIZES.BASE,
    padding: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: width - Theme.SIZES.BASE * 2.5,
    borderTopColor: "#006699",
  },
  heading: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#006699",
    borderTopLeftRadius: Theme.SIZES.BASE,
  },
  text: {
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
    fontSize: 25,
  },
  close: {
    marginRight: 1,
    alignItems: "flex-end",
  },
});

const mapStateToProps = (state) => ({
  item: state.upcoming.upcomingitem,
  message: state.savebid.message,
  showModal: state.savebid.showModal,
  data: state.BIDAMOUNT.Bidamount,
});

export default connect(mapStateToProps, {
  fetchUpcomingData,
  BidAmountData,
  closeModal,
  openModal,
})(Upcoming);
