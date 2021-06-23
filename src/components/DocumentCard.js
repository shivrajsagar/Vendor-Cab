import React from "react";

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  View,
} from "react-native";

const { width, height } = Dimensions.get("screen");
import Theme from "../constants/Theme";
import { Icon } from "galio-framework";
const CardComponent = ({ item, navigation }) => {
  const { title, icon, route } = item;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(route)}
    >
      <Icon
        route
        name={icon}
        family="MaterialCommunityIcons"
        color="red"
        size={30}
      />
      <Text
        style={{
          //color: Theme.COLORS.PRIMARY,
          fontSize: 17,
          textAlign: "left",
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: width * 0.35,
    width: width * 0.35,
    backgroundColor: "#fff",
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 8,
    justifyContent: "space-around",
  },
});

export default CardComponent;
