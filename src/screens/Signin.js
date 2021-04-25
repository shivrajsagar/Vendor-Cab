import React, { Component } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Button, Input, theme, Text } from "galio-framework";

const { width, height } = Dimensions.get("screen");

import { mobileChanged, passwordChanged, loginUser } from "../redux/actions/authAction";

import Theme from "../constants/Theme";
import { connect } from "react-redux";

class Signin extends Component {
  state = {
    errorMessage: null,
  };
  onMobileChange = (text) => {
    this.props.mobileChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { mobile, password } = this.props;

    if (!mobile || !password) {
      console.log(!password);
      this.setState({ errorMessage: "Please insert all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      this.props.loginUser({ mobile, password });
    }
  };

  render() {
    const { navigation, password, mobile, user, error } = this.props;

    console.log(user);

    return (
      <Block middle style={styles.container}>
        <Text size={20} color="white">
          Sign In
        </Text>
        <Block card shadow shadowColor="gray" style={styles.card}>
          {error ? (
            <Text color="red" center>
              {error}
            </Text>
          ) : null}
          {this.state.errorMessage ? (
            <Text size={20} color="red" center>
              {this.state.errorMessage}
            </Text>
          ) : null}
          {user != null && (
            <Text size={20} color="green" center>
              {user.message}
            </Text>
          )}
          <Input
            type="number-pad"
            placeholder="Enter Mobile"
            left
            icon="mobile"
            family="Entypo"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={mobile}
            onChangeText={this.onMobileChange.bind(this)}
            maxLength={10}
          />
          <Input
            placeholder="Enter Password"
            password
            viewPass
            left
            icon="key"
            family="Entypo"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
          <Button round color={Theme.COLORS.BUTTON2} onPress={this.onButtonPress.bind(this)}>
            Signin
          </Button>
          <TouchableOpacity>
            <Text style={styles.text}>Forgot Password</Text>
          </TouchableOpacity>
        </Block>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text color="white" style={styles.text}>
            Not registered yet? SignUp
          </Text>
        </TouchableOpacity>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#233545",
    height: height,
  },
  card: {
    width: width - theme.SIZES.BASE,
    backgroundColor: "white",
    margin: 10,
    padding: 30,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  mobile: state.auth.mobile,
  password: state.auth.password,
  error: state.auth.loginError,
  user: state.auth.user,
  loading: state.auth.authloading,
});

export default connect(mapStateToProps, {
  mobileChanged,
  passwordChanged,
  loginUser,
})(Signin);
