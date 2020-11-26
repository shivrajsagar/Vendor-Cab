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
