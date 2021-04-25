import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import Screens from "./src/navigation/Screen";
import { materialTheme } from "./src/constants";
import { navigationRef } from "./src/navigation/RootNavigation";
import store from "./src/redux/store";

enableScreens();

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
