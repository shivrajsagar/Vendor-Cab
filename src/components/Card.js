import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Button, Text, Icon } from "galio-framework";
import Theme from "../constants/Theme";

import { saveBidData, closeModal, openModal } from "../redux/actions/bidAction";
import ModalComponent from "./Modal";
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

class Card extends Component {
  state = {
    showModal: false,
  };

  onDecline = () => {
    this.props.closeModal();
  };

  render() {
    const {
      item,
      date,
      bookingid,
      name,
      mobile,
      pickupaddress,
      dropaddress,
      pickuplocation,
      droplocation,
      pickupdatetime,
      dropdatetime,
      amount,
      payment,
      status,
      bid,
      message,
      showModal,
    } = this.props;
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

        {date ? (
          <Block row style={styles.text}>
            <Block row>
              <Icon
                name="stopwatch"
                family="Entypo"
                size={20}
                color="#007acc"
              />
              <Text color="blue">Date</Text>
            </Block>
            <Block>
              <Text>
                {item.drop_date}/{item.drop_time}
              </Text>
            </Block>
          </Block>
        ) : null}

        {bookingid ? (
          <Block row style={styles.text}>
            <Block row>
              <Icon name="document" family="Entypo" size={20} color="#007acc" />
              <Text color="blue">Booking Id</Text>
            </Block>
            <Block>
              <Text>{item.booking_id}</Text>
            </Block>
          </Block>
        ) : null}

        {name ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon name="man" family="Entypo" size={20} color="#007acc" />
              <Text color="blue">Customer Name</Text>
            </Block>
            <Block>
              <Text>{item.customer_name}</Text>
            </Block>
          </Block>
        ) : null}

        {mobile ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon name="mobile" family="Entypo" size={20} color="#007acc" />
              <Text color="blue">Mobile</Text>
            </Block>
            <Block>
              <Text>{item.customer_mobile}</Text>
            </Block>
          </Block>
        ) : null}

        {pickuplocation ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon
                name="location-pin"
                family="Entypo"
                size={20}
                color="#007acc"
              />
              <Text color="blue">Pickup Location</Text>
            </Block>
            <Block>
              <Text>{item.pickup_location}</Text>
            </Block>
          </Block>
        ) : null}

        {droplocation ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon
                name="location-pin"
                family="Entypo"
                size={20}
                color="#007acc"
              />
              <Text color="blue">Drop Location</Text>
            </Block>
            <Block>
              <Text>{item.drop_location}</Text>
            </Block>
          </Block>
        ) : null}

        {pickupaddress ? (
          <Block style={styles.text}>
            <Block row>
              <Icon name="location" family="Entypo" size={20} color="#007acc" />
              <Text color="blue">Pickup Address</Text>
            </Block>
            <Block flex middle>
              <Text>{item.pickup_address}</Text>
            </Block>
          </Block>
        ) : null}
        {dropaddress ? (
          <Block style={styles.text}>
            <Block row>
              <Icon
                name="location-pin"
                family="Entypo"
                size={20}
                color="#007acc"
              />
              <Text color="blue">Drop Address</Text>
            </Block>
            <Block row middle space="between">
              <Text></Text>
              <Text>{item.drop_address}</Text>
            </Block>
          </Block>
        ) : null}

        {pickupdatetime ? (
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
        ) : null}

        {dropdatetime ? (
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
        ) : null}

        {amount ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon
                name="price-tag"
                family="Entypo"
                size={20}
                color="#007acc"
              />
              <Text color="blue">Amount</Text>
            </Block>
            <Block>
              <Text>{item.amount}</Text>
            </Block>
          </Block>
        ) : null}

        {payment ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon name="wallet" family="Entypo" size={20} color="#007acc" />
              <Text color="blue">Payment</Text>
            </Block>
            <Block>
              <Text>{item.amount}</Text>
            </Block>
          </Block>
        ) : null}

        {status ? (
          <Block row space="around" style={styles.text}>
            <Block row>
              <Icon name="cog" family="Entypo" size={20} color="#007acc" />
              <Text color="blue">Status</Text>
            </Block>
            <Block>
              {item.status == 1 ? (
                <Text color="green">Active</Text>
              ) : (
                <Text color="red">Inactive</Text>
              )}
            </Block>
          </Block>
        ) : null}

        {bid ? (
          <Block row style={styles.text}>
            <Block flex middle>
              <ModalComponent
                visible={showModal}
                onDecline={this.onDecline}
                onSubmit={this.onSubmit}
                item={item}
                message={message}
              />
              <Button
                middle
                round
                color="#009688"
                onPress={() => this.props.openModal()}
              >
                Bid To accept
              </Button>
            </Block>
          </Block>
        ) : null}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
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
});

const mapStateToProps = (state) => ({
  message: state.savebid.message,
  showModal: state.savebid.showModal,
});

export default connect(mapStateToProps, { saveBidData, openModal, closeModal })(
  Card
);
