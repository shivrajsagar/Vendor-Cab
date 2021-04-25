import React, { Component } from "react";
import { StyleSheet, Alert, Image } from "react-native";
import { Block, Button, Text, Input, Icon } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  registerUserValue,
  registerUser,
} from "../../redux/actions/documentAction";

import defaultImage from "../../assets/images/avatar.png";
const ImageUri = Image.resolveAssetSource(defaultImage).uri;

class Taxiphoto extends Component {
  state = {
    TexiImage: null,
    errorMessage: null,
  };
  onSubmit() {
    const { TexiImage } = this.state;
    if (!TexiImage) {
      console.log("mesage");
      this.setState({ errorMessage: "Please insert in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 2000);
    } else {
      this.props.registerUser({
        profileimage,
      });
    }
  }

  Texiphoto = async () => {
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
    const { navigation, error } = this.props;
    const { TexiImage, errorMessage } = this.state;
    return (
      <Block style={styles.container}>
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
            <TouchableOpacity onPress={this.Texiphoto}>
              <Image
                source={{
                  uri: TexiImage != null ? TexiImage : ImageUri,
                }}
                style={{ width: 300, height: 300, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </Block>
        </Block>
        <Button
          round
          color={Theme.COLORS.BUTTON2}
          onPress={this.onSubmit.bind(this)}
        >
          Signup
        </Button>
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

export default Taxiphoto;
