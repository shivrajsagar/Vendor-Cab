import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Block, Button, Input, Icon } from "galio-framework";
import Theme from "../constants/Theme";

export default class Commision extends Component {
  render() {
    return (
      <Block flex safe style={styles.container}>
        <Block middle style={styles.input}>
          <Input
            placeholder="Search Commision"
            icon="magnifying-glass"
            family="Entypo"
            rounded
            right
            size={20}
            help="Search commision here"
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
