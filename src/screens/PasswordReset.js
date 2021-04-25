import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Block, Button, Input, Text } from "galio-framework";
import Theme from "../constants/Theme";

import { connect } from "react-redux";
import {
  resetPassword,
  resetPasswordChanged,
} from "../redux/actions/authAction";

class PasswordReset extends Component {
  state = {
    confirm_password: "",
    error: null,
    errorMessage: null,
  };
  onPasswordChange = (text) => {
    this.props.resetPasswordChanged(text);
    this.setState({ error: null });
  };

  onButtonPress = () => {
    if (!this.props.resetpassword || !this.state.confirm_password) {
      this.setState({ errorMessage: "Please fill password" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      if (this.props.resetpassword !== this.state.confirm_password) {
        this.setState({ error: "Password Not matched" });
      } else {
        const { resetpassword } = this.props;
        this.props.resetPassword({ resetpassword });
      }
    }
  };
  render() {
    const { resetpassword, loading, message } = this.props;
    const { error, errorMessage } = this.state;

    return (
      <Block style={styles.container}>
        <Text center h5 color={Theme.COLORS.WHITE}>
          Reset Password
        </Text>
        <Block card style={styles.card}>
          {message ? (
            <Text size={18} color="green" center>
              {message}
            </Text>
          ) : null}
          {error ? (
            <Text h5 center color="red">
              {error}
            </Text>
          ) : null}
          {errorMessage ? (
            <Text center size={20} color="red">
              {errorMessage}
            </Text>
          ) : null}
          <Input
            label="New Password"
            placeholder="Password"
            color="black"
            placeholderTextColor="gray"
            value={resetpassword}
            onChangeText={this.onPasswordChange.bind(this)}
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm Password"
            color="black"
            placeholderTextColor="gray"
            value={this.state.confirm_password}
            onChangeText={(text) => this.setState({ confirm_password: text })}
          />
          <Block middle>
            <Button onPress={this.onButtonPress.bind(this)} loading={loading}>
              Submit
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.BACKGROUND,
    justifyContent: "center",
  },
  card: {
    margin: Theme.SIZES.BASE,
    padding: Theme.SIZES.BASE,
    backgroundColor: Theme.COLORS.WHITE,
  },
});

const mapStateToProps = (state) => ({
  resetpassword: state.auth.resetpassword,
  loading: state.auth.authloading,
  message: state.auth.resetmessage,
  error: state.auth.reseterror,
});

export default connect(mapStateToProps, {
  resetPassword,
  resetPasswordChanged,
})(PasswordReset);
