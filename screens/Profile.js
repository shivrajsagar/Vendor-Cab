import React, { Component } from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { Block, Button, theme, Icon, Text } from "galio-framework";

import Theme from "../constants/Theme";

const { width, height } = Dimensions.get("screen");
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Profile extends Component {
  state = {
    name: "",
  };

  async componentDidMount() {
    const name = await AsyncStorage.getItem("Name");
    this.setState({ name: name });
  }

  render() {
    return (
      <Block flex safe style={styles.container}>
        <Block row>
          <Block middle>
            <Image
              source={require("../assets/images/avatar.png")}
              style={styles.image}
            />
          </Block>
          <Block middle>
            <Text h4 color="white">
            {this.state.name}
            </Text>
            <Text h5 color="white">
              Status
            </Text>
            <Text h6 color="white">
              Active
            </Text>
          </Block>
        </Block>
        <Block card flex middle style={styles.card}>
          <Block>
            <Text h4 style={styles.heading}>
              Vehicle Number
            </Text>
            <Text style={styles.text}>UP 62 AQ 3018</Text>
          </Block>
          <Block>
            <Text h4 style={styles.heading}>
              Vehicle Model
            </Text>
            <Text style={styles.text}>Redon Safari</Text>
          </Block>
          <Block>
            <Text h4 style={styles.heading}>
              Aadhar NO.
            </Text>
            <Text style={styles.text}>567255862861</Text>
          </Block>
          <Block>
            <Text h4 style={styles.heading}>
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
    backgroundColor: "white",
    margin: 20,
    justifyContent: "flex-start",
  },
  heading: {
    color: Theme.COLORS.BUTTON,
    margin: 20,
  },
  text: {
    textAlign: "center",
    color: Theme.COLORS.DEFAULT,
  },
});
