import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Dimensions, Alert } from "react-native";
import { Block, Button, Icon, Input, Text, Toast } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadPan,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

const { width, height } = Dimensions.get("screen");

class PanCard extends Component {
  state = {
    pan_front: null,
    pan_back: null,
    errorMessage: null,
  };

  onSubmit() {
    const { name, pan_no } = this.props;
    const { pan_front, pan_back } = this.state;
    if (!name || !pan_no || !pan_front || !pan_back) {
      this.setState({ errorMessage: "Please fill in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      this.props.uploadPan({
        pan_front,
        pan_back,
        name,
        pan_no,
      });
    }
  }

  frontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ pan_front: result.uri });
    }
  };

  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result2.cancelled) {
      this.setState({ pan_back: result2.uri });
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
  }

  render() {
    const { message } = this.props;
    return (
      <Block style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex card shadow shadowColor="gray" style={styles.card}>
            {this.renderError()}
            {message ? (
              <Text size={20} color="green">
                {message}
              </Text>
            ) : null}
            {this.state.errorMessage ? (
              <Text size={20} center color="red">
                {this.state.errorMessage}
              </Text>
            ) : null}
            <Text size={18} color="#00ccff">
              Front Image
            </Text>
            <Block row style={styles.image}>
              <Block middle>
                <Icon
                  name="image"
                  family="Entypo"
                  size={30}
                  color="purple"
                  onPress={this.frontImage}
                />
              </Block>
              <Block middle>
                {this.state.pan_front && (
                  <Image
                    source={{ uri: this.state.pan_front }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </Block>
            </Block>
            <Text size={18} color="#00ccff">
              Back Image
            </Text>
            <Block row style={styles.image}>
              <Block middle>
                <Icon
                  name="image"
                  family="Entypo"
                  size={30}
                  color="purple"
                  onPress={this.backImage}
                />
              </Block>
              <Block middle>
                {this.state.pan_back && (
                  <Image
                    source={{ uri: this.state.pan_back }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </Block>
            </Block>
            <Text size={20} color="#00ccff">
              Enter Name
            </Text>
            <Input
              placeholder="Enter Your Name"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.name}
              onChangeText={(text) =>
                this.props.uploadDocumentValue({ prop: "name", value: text })
              }
            />
            <Text size={18} color="#00ccff">
              Pan Card No
            </Text>
            <Input
              placeholder="Enter Pan Card No"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.pan_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "pan_no",
                  value: number,
                })
              }
              maxLength={10}
            />

            <Button
              round
              middle
              color="#009688"
              onPress={this.onSubmit.bind(this)}
              loading={this.props.loading}
            >
              Submit
            </Button>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1,
    flexGrow: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 20,
  },
  card: {
    backgroundColor: Theme.COLORS.WHITE,
    padding: 10,
    margin: 20,
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  image: {
    justifyContent: "space-around",
  },
  calendar: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    height: Theme.SIZES.BASE * 2.5,
    alignItems: "center",
    paddingLeft: Theme.SIZES.BASE,
  },
  calendarinput: {
    justifyContent: "center",
    borderColor: "grey",
    width: "100%",
    paddingLeft: Theme.SIZES.BASE,
  },
});

const mapStateToProps = (state) => ({
  name: state.document.name,
  mfd_date: state.document.mfd_date,
  pan_no: state.document.pan_no,
  loading: state.document.documentloading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, { uploadDocumentValue, uploadPan })(
  PanCard
);
