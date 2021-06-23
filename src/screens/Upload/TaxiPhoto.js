import React, { Component } from "react";
import { StyleSheet, Alert, Image, Dimensions } from "react-native";
import { Block, Button, Text } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";

import defaultImage from "../../assets/images/avatar.png";

//redux
import { TaxiPhoto } from "../../redux/actions/documentAction";
import { connect } from "react-redux";

const ImageUri = Image.resolveAssetSource(defaultImage).uri;
const { height } = Dimensions.get("window");
class Taxiphoto extends Component {
  state = {
    TexiImage: null,
    Texiback: null,
    errorMessage: null,
  };

  onSubmit() {
    const { TexiImage, Texiback } = this.state;
    if (!TexiImage || !Texiback) {
      console.log("mesage");
      this.setState({ errorMessage: "Please insert in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 2000);
    } else {
      this.props.TaxiPhoto({
        TexiImage,
        Texiback,
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
      this.setState({ TexiImage: result.uri });
    }
  };
  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result2.cancelled) {
      this.setState({ Texiback: result2.uri });
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
    const { navigation, error, message, loading } = this.props;
    const { TexiImage, errorMessage, Texiback } = this.state;
    return (
      <Block style={styles.container}>
        <Block style={styles.card}>
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
          {message ? (
            <Text color="green" center>
              {message}
            </Text>
          ) : null}
          <Block row style={styles.image}>
            <Block middle>
              <Text size={20} style={{ marginBottom: 10 }}>
                Taxi Front Image
              </Text>
              <TouchableOpacity onPress={this.Texiphoto}>
                <Image
                  source={{
                    uri: TexiImage != null ? TexiImage : ImageUri,
                  }}
                  style={{ width: 200, height: 200, borderRadius: 200 }}
                />
              </TouchableOpacity>
            </Block>
          </Block>
          <Block row style={styles.image}>
            <Block middle>
              <Text size={20} style={{ marginBottom: 10, marginTop: 10 }}>
                Taxi Back Image
              </Text>
              <TouchableOpacity onPress={this.backImage}>
                <Image
                  source={{
                    uri: Texiback != null ? Texiback : ImageUri,
                  }}
                  style={{ width: 200, height: 200, borderRadius: 200 }}
                />
              </TouchableOpacity>
            </Block>
          </Block>
          <Block center>
            <Button
              center
              round
              loading={loading}
              color={Theme.COLORS.BUTTON2}
              onPress={this.onSubmit.bind(this)}
            >
              UpLoad Taxi Photo
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
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  card: {
    margin: 20,
    padding: 10,
    marginTop: 20,
    backgroundColor: Theme.COLORS.WHITE,
    borderRadius: 20,
    height: height * 0.8,
    justifyContent: "space-between",
  },
  image: {
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({
  loading: state.document.documentloading,
  error: state.document.error,
  message: state.document.message,
});

export default connect(mapStateToProps, { TaxiPhoto })(Taxiphoto);
