import React, { Component } from "react";
import { StyleSheet,Dimensions } from "react-native";
import { Block, Button, Text } from "galio-framework";


import Theme from '../constants/Theme';
const {width}=Dimensions.get("screen");


export default class Help extends Component {
  render() {
    return (
      <Block flex card  style={styles.container}>
      <Block safe  middle >
         <Text h5  color="red">
          Help and Support
        </Text>
        </Block> 
        <Text h6 p style={styles.textStyle}>
          Get help 24 hours a day. 7 days a week right in the app. To speak with
          an agent , go to Help in your Driver app, then call tap Call Support.
          Drivers everywhere wanted the option contcting us by phone whenever
          they needed help or had a question about driving. Thanks to their
          feedback, offers phone support for drivers on the road or off. Whether
          you have a question about your account or want to report an incident,
          we'll be ready to help 24x7. To speak directly with a trained agent on
          the phone, go to Help in your Driver app and tap Call Support.
        </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Theme.COLORS.PRIMARY,
  },
  textStyle: {
    backgroundColor: "#233545",
    color: "white",
    padding:10,
    margin:10,
  },
});
