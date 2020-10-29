import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Block, Button, Input, Icon } from "galio-framework";

import Theme from "../constants/Theme";
const { width } = Dimensions.get("screen");

export default class Transaction extends Component {
  render() {
    return (
      <Block flex safe style={styles.container}>
        <Block middle style={styles.input}>
          <Input
            placeholder="Search Transaction"
            icon="magnifying-glass"
            family="Entypo"
            rounded
            right
            size={20}
            help="Search transaction here"
            bottomHelp
            placeholderTextColor={Theme.COLORS.BUTTON}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  input: {
    margin: 10,
  },
});
