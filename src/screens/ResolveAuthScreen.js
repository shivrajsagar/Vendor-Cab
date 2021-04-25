import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import { Block } from "galio-framework";
import Theme from "../constants/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height } = Dimensions.get("screen");

class ResolveAuthScreen extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const driver_id = await AsyncStorage.getItem("driver_id");
    if (driver_id === null) {
      navigation.navigate("Onboarding");
    } else {
      navigation.navigate("App");
    }
  }

  render() {
    return (
      <Block flex middle style={styles.container}>
        <ActivityIndicator size="large" color={Theme.COLORS.WHITE} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
});

export default ResolveAuthScreen;
