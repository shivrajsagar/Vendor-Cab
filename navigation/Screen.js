import React from "react";
import { Dimensions } from "react-native";

import { Icon, theme } from "galio-framework";
import { Header } from "../components";
import CustomDrawerContent from "./Menu";
import { materialTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

//naviagtion libraries
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//screens
import HomeScreen from "../screens/Home";
import Transaction from "../screens/Transaction";
import Commision from "../screens/Commision";
import Documentation from "../screens/Documentation";
import Help from "../screens/Help";
import Current from "../screens/Current";
import Upcoming from "../screens/Upcoming";
import Completed from "../screens/Completed";
import Onboarding from "../screens/Onboarding";
import SplashScreen from "../screens/SplashScreen";
import Profile from "../screens/Profile";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Savebid from "../screens/Savebid";
import Theme from "../constants/Theme";

//naviagtor
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Top = createMaterialTopTabNavigator();

const profile = {
  avatar: "https://source.unsplash.com/840x840/?car",
  name: "Rachel Brown",
  type: "Seller",
};

function TopStack(props) {
  return (
    <Top.Navigator
      tabBarOptions={{
        showIcon: true,
        indicatorStyle: { backgroundColor: Theme.COLORS.BUTTON },
        style:{backgroundColor:Theme.COLORS.COLOR1},
        activeTintColor:"white"
      }}
    >
      <Top.Screen name="Current" component={Current} />
      <Top.Screen name="Upcoming" component={Upcoming} />
      <Top.Screen name="Completed" component={Completed} />
    </Top.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator headerMode="screen" mode="card">
      <Stack.Screen
        name="Dashboard"
        component={TopStack}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Dashboard"
              transparent
              white
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              title="Profile"
              transparent
              white
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function TransactionStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
              title="Transaction"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function CommisionStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Commision"
        component={Commision}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
              title="Commision"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function DocumentStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Documentation"
        component={Documentation}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
              title="Documentation"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HelpStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              title="Help"
              transparent
              white
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: theme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Dashboard"
        component={HomeStack}
        options={{
          drawerIcon: () => <Icon name="home" family="Entypo" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerIcon: () => <Icon name="user" family="Entypo" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Transaction History"
        component={TransactionStack}
        options={{
          drawerIcon: () => (
            <Icon name="arrowsalt" family="AntDesign" size={16} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pay Commision"
        component={CommisionStack}
        options={{
          drawerIcon: () => (
            <Icon name="rupee-sign" family="FontAwesome5" size={16} />
          ),
        }}
      />
      <Drawer.Screen
        name="Documentation"
        component={DocumentStack}
        options={{
          drawerIcon: () => <Icon name="documents" family="Entypo" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpStack}
        options={{
          drawerIcon: () => <Icon name="help" family="Entypo" size={16} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="SlashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
