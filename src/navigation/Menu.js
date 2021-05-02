import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Image, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Drawer as DrawerCustomItem } from "../components";
import Theme from "../constants/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("screen");

export default function CustomDrawerContent({
  drawerPosition,
  profile,
  navigation,
  state,
  focused,
  ...rest
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const insets = useSafeAreaInsets();
  const screens = [
    "Dashboard",
    "Profile",
    "Transaction History",
    "Pay Commision",
    "Documentation",
    "Help",
    "Change Password",
  ];

  useEffect(() => {
    retrieveData();
  }, [name, Image, retrieveData]);

  const retrieveData = async () => {
    try {
      const name = await AsyncStorage.getItem("Name");
      setName(name);
      const Image = await AsyncStorage.getItem("image");
      setImage(Image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.25} style={styles.header}>
        <Image
          source={{ uri: `https://expresscab.in/${image}` }}
          style={{ width: 100, height: 100, borderRadius: 10, marginBottom: 5 }}
        />

        <Text size={16} color="white">
          {name}
        </Text>
      </Block>
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
      <Block flex={0.2} style={{ paddingLeft: 8, paddingRight: 10 }}>
        <DrawerCustomItem
          title="Logout"
          navigation={navigation}
          focused={state.index === 8 ? true : false}
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  header: {
    backgroundColor: "#233545",
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: "center",
  },
});
