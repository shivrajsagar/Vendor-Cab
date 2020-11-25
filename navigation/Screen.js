import React from "react";
import { Dimensions } from "react-native";

import { Icon, theme } from "galio-framework";
import { Header } from "../components";
import CustomDrawerContent from "./Menu";

const { width } = Dimensions.get("screen");

//naviagtion libraries
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import HomeScreen from "../screens/Home";
import Transaction from "../screens/Transaction";
import Commision from "../screens/Commision";
import Documentation from "../screens/Documentation";
import Help from "../screens/Help";
import Onboarding from "../screens/Onboarding";
import SplashScreen from "../screens/SplashScreen";
import Profile from "../screens/Profile";

import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
<<<<<<< HEAD

import Logout from "../screens/Logout";
import ResolveAuthScreen from "../screens/ResolveAuthScreen";

=======
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
import Aadhar from "../screens/Upload/Aadhar";
import PanCard from "../screens/Upload/PanCard";
import DrivingLicense from "../screens/Upload/DrivingLicense";
import RcDocument from "../screens/Upload/RcDocument";
import TaxiInsurance from "../screens/Upload/TaxiInsurance";
<<<<<<< HEAD
import AccountDetail from "../screens/Upload/AccountDetail";
import FitnessCertificate from "../screens/Upload/FitnessCertificate";
=======
import AccountDetail from '../screens/Upload/AccountDetail';
import FitnessCertificate from '../screens/Upload/FitnessCertificate';

>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4

//naviagtor
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: "https://source.unsplash.com/840x840/?car",
  name: "Rachel Brown",
  type: "Seller",
};

<<<<<<< HEAD
function LoginFlow() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

=======
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
function HomeStack(props) {
  return (
    <Stack.Navigator headerMode="screen" mode="card">
      <Stack.Screen
        name="Dashboard"
        component={HomeScreen}
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
          gestureEnabled: false,
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
              back
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
              title="Transaction History"
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
              title="Pay Commision"
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
      <Stack.Screen
        name="Aadhar"
        component={Aadhar}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Aadhar Upload"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Licence"
        component={DrivingLicense}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Driving Licence Upload"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RcDocument"
        component={RcDocument}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Rc Document Upload"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PanCard"
        component={PanCard}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Pancard Document Upload"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
<<<<<<< HEAD
      <Stack.Screen
=======
       <Stack.Screen
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
        name="TaxiInsurance"
        component={TaxiInsurance}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Taxi Insurance Document Upload"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FitnessCertificate"
        component={FitnessCertificate}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Fitness Certificate Detail"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
<<<<<<< HEAD
      <Stack.Screen
=======
        <Stack.Screen
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
        name="AccountDetail"
        component={AccountDetail}
        options={{
          header: ({ scene, navigation }) => (
            <Header
              transparent
              white
<<<<<<< HEAD
              headerMode="Documentation"
=======
              back
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
              title="Account Detail"
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

function LogoutStack() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Logout" component={Logout} />
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
      <Drawer.Screen
        name="Logout"
        component={LogoutStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="ios-log-out"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
<<<<<<< HEAD
        name="ResolveAuth"
        component={ResolveAuthScreen}
=======
        name="SlashScreen"
        component={SplashScreen}
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          gestureEnabled: false,
        }}
      />
<<<<<<< HEAD
      <Stack.Screen name="LoginFlow" component={LoginFlow} />
      <Stack.Screen name="App" component={AppStack} />
=======
      <Stack.Screen
        name="App"
        component={AppStack}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          gestureEnabled: false,
        }}
      />
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
    </Stack.Navigator>
  );
}
