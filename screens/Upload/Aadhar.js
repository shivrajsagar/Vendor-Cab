import React, { Component, useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, Dimensions, Alert } from "react-native";
import { Block, Button, Icon, Input, Text, Toast } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadAadhar,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

const { width, height } = Dimensions.get("screen");

class Aadhar extends Component {
  state = {
    aadhar_front_image: null,
    aadhar_back_image: null,
  };

  onSubmit() {
    const { name, Issue_Date, status, driver_id, aadhar_no } = this.props;
    const { aadhar_front_image, aadhar_back_image } = this.state;
    this.props.uploadAadhar({
      aadhar_front_image,
      aadhar_back_image,
      name,
      Issue_Date,
      status,
      driver_id,
      aadhar_no,
    });
  }

  frontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ aadhar_front_image: result.uri });
    }
  };

  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result2.cancelled) {
      this.setState({ aadhar_back_image: result2.uri });
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
          <Block middle>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.avatar}
            />
          </Block>
          <Block flex card shadow shadowColor="gray" style={styles.card}>
            {this.renderError()}
            {message ? (
              <Text size={20} color="green">
                {message}
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
                {this.state.aadhar_front_image && (
                  <Image
                    source={{ uri: this.state.aadhar_front_image }}
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
                {this.state.aadhar_back_image && (
                  <Image
                    source={{ uri: this.state.aadhar_back_image }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </Block>
            </Block>
            <Text size={20} color="#00ccff">
              Name on Aadhar
            </Text>
            <Input
              placeholder="Name on Aadhar"
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
              Aadhar Card No
            </Text>
            <Input
              placeholder="Aadhar Card No"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.aadhar_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "aadhar_no",
                  value: number,
                })
              }
            />
            <Text size={18} color="#00ccff">
              Issue Date
            </Text>
            <Input
              type="numeric"
              placeholder="Issue Date"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.Issue_Date}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "Issue_Date",
                  value: number,
                })
              }
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
  },
  image: {
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({
  name: state.document.name,
  Issue_Date: state.document.Issue_Date,
  aadhar_no: state.aadhar_no,
  status: state.document.status,
  driver_id: state.document.driver_id,
  loading: state.document.loading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, { uploadDocumentValue, uploadAadhar })(
  Aadhar
);
