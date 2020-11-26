import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Block, Button, Input, theme, Text } from "galio-framework";

const { width, height } = Dimensions.get("screen");

import {
  mobileChanged,
  passwordChanged,
  loginUser,
} from "../redux/actions/authAction";

import Theme from "../constants/Theme";
import { connect } from "react-redux";

class Signin extends Component {
  onMobileChange = (text) => {
    this.props.mobileChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { mobile, password } = this.props;
    this.props.loginUser({ mobile, password });
  };

  renerError() {
    if (this.props.error) {
      return (
        <Block>
          <Text color="red">{this.props.error}</Text>
        </Block>
      );
    }
  }

  render() {
    const { navigation, user, error } = this.props;

    return (
      <Block middle style={styles.container}>
        <Text size={20} color="white">
          Sign In
        </Text>
        <Block card shadow shadowColor="gray" style={styles.card}>
          {this.renerError()}
          <Input
            type="number-pad"
            placeholder="Enter Mobile"
            left
            icon="mobile"
            family="Entypo"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={this.props.mobile}
            onChangeText={this.onMobileChange.bind(this)}
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
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
          <Button
            round
            color={Theme.COLORS.BUTTON2}
            onPress={this.onButtonPress.bind(this)}
          >
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
  error: state.auth.error,
  user: state.auth.user,
  loading: state.auth.authloading,
});

export default connect(mapStateToProps, {
  mobileChanged,
  passwordChanged,
  loginUser,
})(Signin);
