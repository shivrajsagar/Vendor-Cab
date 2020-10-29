import React, { Component } from "react";
import {StyleSheet,Dimensions} from "react-native";
import { Block, Text } from "galio-framework";

import { withNavigation } from "@react-navigation/compat";

const {width,height}=Dimensions.get("screen");

class Upload extends Component {
  render() {
    return (
      <Block>
        <Text>upload</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(Upload);
