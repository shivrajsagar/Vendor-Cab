import React, { Component } from "react";

import { StyleSheet, BackHandler } from "react-native";

import { Block, Button, Text } from "galio-framework";
import { connect } from "react-redux";
import materialTheme from "../constants/Theme";
import { logout } from "../redux/actions/authAction";
import Theme from "../constants/Theme";

class Logout extends Component {
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      function () {
        BackHandler.exitApp();
        return true;
      }.bind(this)
    );
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle style={styles.container}>
        <Text size={20} color="white">
          Are you sure want to logout
        </Text>
        <Block row>
          <Button color={materialTheme.COLORS.SUCCESS} onPress={() => this.props.logout(navigation)}>
            Logout
          </Button>
          <Button color={materialTheme.COLORS.ERROR} onPress={() => navigation.goBack()}>
            Dismiss
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
});

export default connect(null, { logout })(Logout);
