<<<<<<< HEAD
import React, { Component } from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Top = createMaterialTopTabNavigator();

import Theme from "../constants/Theme";

import Completed from "./Completed";
import Current from "./Current";
import Upcoming from "./Upcoming";

export default class Home extends Component {
  render() {
    return (
      <Top.Navigator
        tabBarOptions={{
          showIcon: true,
          indicatorStyle: { backgroundColor: Theme.COLORS.BUTTON },
          style: { backgroundColor: Theme.COLORS.COLOR1 },
          activeTintColor: "white",
        }}
      >
        <Top.Screen name="Current" component={Current} />
        <Top.Screen name="Upcoming" component={Upcoming} />
        <Top.Screen name="Completed" component={Completed} />
      </Top.Navigator>
    );
  }
}
=======
import React, { Component } from "react";
import { BackHandler, Alert } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Top = createMaterialTopTabNavigator();

import Theme from "../constants/Theme";

import Completed from "./Completed";
import Current from "./Current";
import Upcoming from "./Upcoming";

export default class Home extends Component {
  disableBackButton = () => {
    Alert.alert(
      "Exit App",
      "Are you sure want to exit App ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.disableBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.disableBackButton
    );
  }

  render() {
    return (
      <Top.Navigator
        tabBarOptions={{
          showIcon: true,
          indicatorStyle: { backgroundColor: Theme.COLORS.BUTTON },
          style: { backgroundColor: Theme.COLORS.COLOR1 },
          activeTintColor: "white",
        }}
      >
        <Top.Screen name="Current" component={Current} />
        <Top.Screen name="Upcoming" component={Upcoming} />
        <Top.Screen name="Completed" component={Completed} />
      </Top.Navigator>
    );
  }
}
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
