import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, BackHandler, Alert } from "react-native";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import Screens from "./src/navigation/Screen";
import { materialTheme } from "./src/constants";
import { navigationRef } from "./src/navigation/RootNavigation";
import store from "./src/redux/store";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

enableScreens();

const App = () => {
  // const openPlayStore = () => {
  //   return Alert.alert("Are you sure to send request ?", "", [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //       color: "#900",
  //     },
  //     {
  //       text: "Update",
  //       onPress: () =>
  //         "https://play.google.com/store/apps/details?id=vendor.expresscab",
  //       color: "#900",
  //     },
  //   ]);
  //   // return Alert.alert(
  //   //   "APP UPDATE",
  //   //   "Do you want to Update App to Continue?",
  //   //   [{ text: "OK", onPress: () => BackHandler.exitApp() }],
  //   //   { cancelable: false }
  //   // );
  // };

  // const updateversion = async () => {
  //   try {
  //     const update = await Updates.checkForUpdateAsync();
  //     if (update.isAvailable) {
  //       // dlUpdate = await Updates.fetchUpdateAsync();
  //       // if (dlUpdate.isNew) {
  //       //   Updates.reloadAsync();
  //       //   openPlayStore();
  //       // }
  //       await Updates.fetchUpdateAsync();
  //       // ... notify user of update ...

  //       Updates.reloadFromCache();
  //       openPlayStore();
  //     }
  //     props.onFinish();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const openPlayStore = () => {
    return Alert.alert(
      "APP UPDATE",
      "Do you want to Update App to Continue?",
      [{ text: "UPDATE", onPress: () => BackHandler.exitApp() }],
      { cancelable: false }
    );
  };

  const updateversion = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...
        Updates.reloadFromCache();
        await Updates.reloadAsync();
        openPlayStore();
      }
      props.onFinish();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    updateversion();
  });
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
