import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Button, Text, Input, theme, Icon } from "galio-framework";

import Theme from "../constants/Theme";

const { width } = Dimensions.get("screen");

const Signup = () => {
  return (
    <Block flex middle style={styles.container}>
      <Block card shadow shadowColor="gray" middle >
        <Input placeholder="Name" />
        <Input placeholder="Mobile" />
        <Input placeholder="Enter Vehicle Number" />
        <Input placeholder="Enter Vehicle Name" />
        <Input placeholder="Enter Password" />
        <Input placeholder="Confirm Password" />
        <Button>Signup</Button>
        <TouchableOpacity>
          <Text>Already registered Sign in here</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
});

export default Signup;
