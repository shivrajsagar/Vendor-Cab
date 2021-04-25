import React, { Component } from "react";
import { StyleSheet, Alert, Image } from "react-native";
import { Block, Button, Text, Input } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../constants/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { userValue, registerUser } from "../redux/actions/authAction";

import defaultImage from "../assets/images/avatar.png";

const ImageUri = Image.resolveAssetSource(defaultImage).uri;

class Signup extends Component {
  state = {
    profileimage: null,
    errorMessage: null,
  };

  onSubmit() {
    const { name, mobile, vehicle_no, vehicle_name, password } = this.props;
    const { profileimage } = this.state;
    if (
      !profileimage ||
      !name ||
      !mobile ||
      !vehicle_name ||
      !vehicle_no ||
      !password
    ) {
      console.log("mesage");
      this.setState({ errorMessage: "Please insert in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      this.props.registerUser({
        profileimage,
        name,
        mobile,
        vehicle_no,
        vehicle_name,
        password,
      });
    }
  }

  profileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ profileimage: result.uri });
    }
  };
  async componentDidMount() {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
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
    }
  }

  render() {
    const { navigation, error, loading } = this.props;
    const { profileimage, errorMessage } = this.state;
    return (
      <Block middle style={styles.container}>
        <Text h5 color="white">
          New Around Here ?
        </Text>
        <Block card shadow shadowColor="gray" middle style={styles.card}>
          {errorMessage && (
            <Text size={20} center color="red">
              {errorMessage}
            </Text>
          )}
          {error ? (
            <Text color="red" center>
              {error}
            </Text>
          ) : null}

          <Block row style={styles.image}>
            <Block middle>
              <TouchableOpacity onPress={this.profileImage}>
                <Image
                  source={{
                    uri: profileimage != null ? profileimage : ImageUri,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 100 }}
                />
              </TouchableOpacity>
            </Block>
          </Block>
          <Input
            placeholder="Enter Name"
            left
            icon="man"
            family="Entypo"
            iconColor="#9900ff"
            placeholderTextColor={Theme.COLORS.BUTTON2}
            value={this.props.name}
            onChangeText={(text) =>
              this.props.userValue({ prop: "name", value: text })
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
              this.props.userValue({ prop: "mobile", value: text })
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
              this.props.userValue({ prop: "vehicle_no", value: text })
            }
            maxLength={10}
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
              this.props.userValue({
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
              this.props.userValue({ prop: "password", value: text })
            }
          />

          <Button
            round
            loading={loading}
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
  image: {
    justifyContent: "space-around",
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
  loading: state.auth.authloading,
  success: state.auth.successMessage,
});

export default connect(mapStateToProps, {
  userValue,
  registerUser,
})(Signup);
