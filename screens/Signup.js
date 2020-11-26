import React, { Component } from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import { Block, Button, Text, Input, theme, Icon } from "galio-framework";

import Theme from "../constants/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { registerUserValue, registerUser } from "../redux/actions/authAction";
const { width, height } = Dimensions.get("screen");

class Signup extends Component {
  onSubmit() {
    const { name, mobile, vehicle_no, vehicle_name, password } = this.props;
    this.props.registerUser({
      name,
      mobile,
      vehicle_no,
      vehicle_name,
      password,
    });
  }

  renderError() {
    if (this.props.error) {
      return (
        <Block>
          <Text size={18} color="red">
            {this.props.error}
          </Text>
        </Block>
      );
    }
    if (this.props.success) {
      Alert.alert(`${this.props.success}`);
      console.log(this.props.success);
    }
  }

  renderSuccess() {}
  render() {
    const { navigation } = this.props;
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
            value={this.props.name}
            onChangeText={(text) =>
              this.props.registerUserValue({ prop: "name", value: text })
            }
          />
          <Input
            type="number-pad"
            placeholder="Mobile"
            left
            icon="mobile"
            family="Entypo"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={this.props.mobile}
            onChangeText={(text) =>
              this.props.registerUserValue({ prop: "mobile", value: text })
            }
          />
          <Input
            placeholder="Enter Vehicle Number"
            left
            icon="ios-car"
            family="ionicon"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={this.props.vehicle_no}
            onChangeText={(text) =>
              this.props.registerUserValue({ prop: "vehicle_no", value: text })
            }
          />
          <Input
            placeholder="Enter Vehicle Name"
            left
            icon="ios-car"
            family="ionicon"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={this.props.vehicle_name}
            onChangeText={(text) =>
              this.props.registerUserValue({
                prop: "vehicle_name",
                value: text,
              })
            }
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
            value={this.props.password}
            onChangeText={(text) =>
              this.props.registerUserValue({ prop: "password", value: text })
            }
          />

          <Button
            round
            color={Theme.COLORS.BUTTON2}
            onPress={this.onSubmit.bind(this)}
          >
            Signup
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text size={15}>Already Registered ? Sigin</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    );
  }
}

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

const mapStateToProps = (state) => ({
  name: state.auth.name,
  mobile: state.auth.mobile,
  vehicle_name: state.auth.vehicle_name,
  vehicle_no: state.auth.vehicle_no,
  password: state.auth.password,
  message: state.auth.message,
  error: state.auth.error,
  loading: state.auth.loading,
  success: state.auth.successMessage,
});

export default connect(mapStateToProps, {
  registerUserValue,
  registerUser,
})(Signup);
