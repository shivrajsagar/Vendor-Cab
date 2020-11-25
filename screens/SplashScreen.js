import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Block, Text } from "galio-framework";

const { width, height } = Dimensions.get("screen");

import Theme from "../constants/Theme";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Onboarding");
    }, 3000);
  }

  render() {
    return (
      <Block flex middle style={styles.container}>
        <Image
          source={require("../assets/icon.png")}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text center h2 color="white">
          Express Cab
        </Text>
        <Text center h6 color="white">
          Just Ride with us
        </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  image: {
    alignItems: "center",
    width: 300,
    height: 300,
  },
});
