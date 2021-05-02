import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import { Block, Icon, Button, Text } from "galio-framework";
import Theme from "../constants/Theme";
import { connect } from "react-redux";
import { fetchUpcomingData } from "../redux/actions/upcomingAction";
import { openModal, closeModal } from "../redux/actions/bidAction";
import { ScrollView } from "react-native-gesture-handler";

import { ModalComponent } from "../components";

const { width } = Dimensions.get("window");

const Upcoming = ({
  item,
  fetchUpcomingData,
  showModal,
  openModal,
  closeModal,
  message,
}) => {
  useEffect(() => {
    fetchUpcomingData();
  }, []);

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
              key={index}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        <ModalComponent
          visible={showModal}
          onDecline={() => closeModal()}
          // onSubmit={this.onSubmit}
          item={item}
          message={message}
        />
      </Block>
    </ScrollView>
  );
};

const Card = ({ item, openModal }) => {
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
      <Block row style={styles.text}>
        <Block flex middle>
          <Button
            middle
            round
            color="#009688"
            onPress={() => openModal(item.id, item.booking_id)}
          >
            Bid To accept
          </Button>
        </Block>
      </Block>

      <Block row space="around" style={styles.text}>
        <Block row>
          <Icon name="calendar" family="Entypo" size={20} color="#007acc" />
          <Text color="blue">Amount</Text>
        </Block>
        <Block>
          <Text>{item.amount}</Text>
        </Block>
      </Block>

      <Block row style={styles.text}>
        {item.amount != 0 ? (
          <Block flex middle>
            <Button
              middle
              round
              color="#009688"
              onPress={() => openModal(item.id, item.booking_id)}
            >
              Edit Bid Amount
            </Button>
          </Block>
        ) : null}
      </Block>
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
});

const mapStateToProps = (state) => ({
  item: state.upcoming.upcomingitem,
  message: state.savebid.message,
  showModal: state.savebid.showModal,
});

export default connect(mapStateToProps, {
  fetchUpcomingData,
  closeModal,
  openModal,
})(Upcoming);
