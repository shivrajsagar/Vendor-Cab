import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Block, Button, Text, Input, theme, Icon } from "galio-framework";

import Theme from "../constants/Theme";
import {} from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  nameChanged,
  passwordChanged,
  vehiclenameChanged,
  vehiclenoChanged,
  mobileChanged,
} from "../redux/actions/authAction";
const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <Block middle style={styles.container}>
      <Text h5 color="white">
        New Around Here ?
      </Text>
      <Block card shadow shadowColor="gray" middle style={styles.card}>
        <Input
          placeholder="Name"
          left
          icon="man"
          family="Entypo"
          iconColor="#9900ff"
          placeholderTextColor={Theme.COLORS.BUTTON2}
        />
        <Input
          type="number-pad"
          placeholder="Mobile"
          left
          icon="mobile"
          family="Entypo"
          iconColor="#9900ff"
          placeholderTextColor={Theme.COLORS.BUTTON2}
        />
        <Input
          placeholder="Enter Vehicle Number"
          left
          icon="ios-car"
          family="ionicon"
          iconColor="#9900ff"
          placeholderTextColor={Theme.COLORS.BUTTON2}
        />
        <Input
          placeholder="Enter Vehicle Name"
          left
          icon="ios-car"
          family="ionicon"
          iconColor="#9900ff"
          placeholderTextColor={Theme.COLORS.BUTTON2}
        />
        <Input
          placeholder="Enter Password"
          left
          icon="key"
          family="Entypo"
          iconColor="#9900ff"
          placeholderTextColor={Theme.COLORS.BUTTON2}
          password
          viewPass
        />
        <Input
          placeholder="Confirm Password"
          left
          icon="key"
          family="Entypo"
          iconColor="#9900ff"
          placeholderTextColor={Theme.COLORS.BUTTON2}
          password
          viewPass
        />
        <Button round color={Theme.COLORS.BUTTON2}>
          Signup
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text size={16} color="red">
            Already registered Sign in here
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: Theme.COLORS.WHITE,
  },
});

const mapStateToProps = (state) => ({});

export default connect(null, {
  nameChanged,
  passwordChanged,
  vehiclenameChanged,
  vehiclenoChanged,
  mobileChanged,
})(Signup);
