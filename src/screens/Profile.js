import React, { Component } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Block, Button, Text } from "galio-framework";

import Theme from "../constants/Theme";

import AsyncStorage from "@react-native-async-storage/async-storage";

class Profile extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const driver = await AsyncStorage.getItem("driver");
    const value = JSON.parse(driver);
    this.setState({ data: value });
  }

  render() {
    const { navigation } = this.props;
    const { data } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Block row>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.image}
          />
          <Block middle left>
            <Text h4 bold color="white">
              {data.name}
            </Text>
            <Text size={20} color="white">
              {data.mobile_no}
            </Text>
          </Block>
        </Block>
        <Block card style={styles.card}>
          <Block>
            <Text h6 style={styles.heading}>
              Vehicle Name
            </Text>
            <Text style={styles.text}>{data.vehicle_name}</Text>
          </Block>
          <Block>
            <Text h6 style={styles.heading}>
              Vehicle No
            </Text>
            <Text style={styles.text}>{data.vehicle_no}</Text>
          </Block>
        </Block>
        <Block middle>
          <Button
            color={Theme.COLORS.BUTTON}
            onPress={() => navigation.navigate("Password")}
            style={styles.button}
          >
            Reset Password
          </Button>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    margin: 15,
  },
  card: {
    backgroundColor: Theme.COLORS.PRIMARY,
    margin: 15,
    padding: 10,
    paddingBottom: 10,
  },
  heading: {
    color: "white",
    margin: 10,
    marginBottom: 5,
  },
  text: {
    textAlign: "left",
    marginLeft: 10,
    fontSize: 18,
    color: "white",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
});

export default Profile;
