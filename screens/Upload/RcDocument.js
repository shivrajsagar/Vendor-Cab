import React, { Component, useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, Dimensions, Alert } from "react-native";
import { Block, Button, Icon, Input, Text, Toast } from "galio-framework";
import * as ImagePicker from "expo-image-picker";
import { TextInputMask } from "react-native-masked-text";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadRc,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

const { width, height } = Dimensions.get("screen");

class RcDocument extends Component {
  state = {
    rc_front: null,
    rc_back: null,
  };

  onSubmit() {
    const { name, mfd_date, rc_no } = this.props;
    const { rc_front, rc_back } = this.state;
    this.props.uploadRc({
      rc_front,
      rc_back,
      name,
      mfd_date,
      rc_no,
    });
  }

  frontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ rc_front: result.uri });
    }
  };

  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result2.cancelled) {
      this.setState({ rc_back: result2.uri });
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
    const { message, loading } = this.props;

    return (
      <Block style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Block middle>
            <Image source={require("../../assets/images/avatar.png")} style={styles.avatar} />
          </Block> */}
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
                {this.state.rc_front && (
                  <Image
                    source={{ uri: this.state.rc_front }}
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
                {this.state.rc_back && (
                  <Image
                    source={{ uri: this.state.rc_back }}
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
              Enter RC No
            </Text>
            <Input
              placeholder="Enter RC No"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.rc_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "rc_no",
                  value: number,
                })
              }
              maxLength={12}
            />
            <Text size={18} color="#00ccff">
              Issue Date
            </Text>

            <Block row style={styles.calendar}>
              <Icon name="calendar" family="Entypo" color="red" />
              <TextInputMask
                placeholder="Enter Issue Date"
                style={styles.calendarinput}
                type={"datetime"}
                options={{
                  format: "DD-MM-YYYY",
                }}
                value={this.props.mfd_date}
                onChangeText={(number) =>
                  this.props.uploadDocumentValue({
                    prop: "mfd_date",
                    value: number,
                  })
                }
              />
            </Block>
            <Button
              round
              middle
              color="#009688"
              onPress={this.onSubmit.bind(this)}
              loading={loading}
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
    marginTop: 100,
    justifyContent: "space-evenly",
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
  rc_no: state.document.rc_no,
  loading: state.document.documentloading,
  message: state.document.message,
  error: state.document.error,
});

export default connect(mapStateToProps, { uploadDocumentValue, uploadRc })(
  RcDocument
);
