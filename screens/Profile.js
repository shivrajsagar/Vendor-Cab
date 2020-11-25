import React, { Component } from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { Block, Button, Icon, Text } from "galio-framework";

import Theme from "../constants/Theme";

const { width, height } = Dimensions.get("screen");
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
    const { data } = this.state;
    return (
      <Block flex safe style={styles.container}>
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
        <Block card flex left style={styles.card}>
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
          <Block>
            <Text h6 style={styles.heading}>
              Aadhar NO.
            </Text>
            <Text style={styles.text}>567255862861</Text>
          </Block>
          <Block>
            <Text h6 style={styles.heading}>
              Pan No.
            </Text>
            <Text style={styles.text}>Driving Licence No</Text>
          </Block>
        </Block>
      </Block>
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
    margin: 20,
  },
  card: {
    backgroundColor: Theme.COLORS.PRIMARY,
    margin: 20,
    justifyContent: "flex-start",
  },
  heading: {
    color: "white",
    margin: 20,
    marginBottom: 10,
  },
  text: {
    textAlign: "left",
    marginLeft: 20,
    fontSize: 18,
    color: "white",
  },
});

export default Profile;
