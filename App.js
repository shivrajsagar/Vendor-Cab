import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Platform } from "react-native";
import { Block, GalioProvider } from "galio-framework";

import Screens from "./navigation/Screen";
import { NavigationContainer } from "@react-navigation/native";

import { materialTheme } from "./constants/";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import { navigationRef } from "./navigation/RootNavigation";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <GalioProvider theme={materialTheme}>
          <Block flex>
            {Platform.OS === "ios" && <StatusBar style="auto" />}
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
