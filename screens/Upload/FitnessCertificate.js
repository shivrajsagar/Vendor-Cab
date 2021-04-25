import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { Block, Button, Icon, Input, Text } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import { TextInputMask } from "react-native-masked-text";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadFitnessCertificate,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

const { width, height } = Dimensions.get("screen");

class FitnessCertificate extends Component {
  state = {
    certificate_front: null,
    certificate_back: null,
    errorMessage: null,
  };

  onSubmit() {
    const { name, mfd_date, xpi_date, certificate_no } = this.props;
    const { certificate_front, certificate_back } = this.state;
    // this.props.uploadFitnessCertificate({
    //   certificate_front,
    //   certificate_back,
    //   name,
    //   mfd_date,
    //   xpi_date,
    //   certificate_no,
    // });

    if (
      !name ||
      !mfd_date ||
      !certificate_no ||
      !certificate_back ||
      !certificate_front
    ) {
      this.setState({ errorMessage: "Please fill in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 2000);
    } else {
      this.props.uploadFitnessCertificate({
        certificate_front,
        certificate_back,
        name,
        mfd_date,
        xpi_date,
        certificate_no,
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
      this.setState({ certificate_front: result.uri });
    }
  };

  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result2.cancelled) {
      this.setState({ certificate_back: result2.uri });
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
    const {
      message,
      loading,
      name,
      certificate_no,
      uploadDocumentValue,
      mfd_date,
      xpi_date,
    } = this.props;
    return (
      <Block style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Block middle>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.avatar}
            />
          </Block> */}
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
                {this.state.certificate_front && (
                  <Image
                    source={{ uri: this.state.certificate_front }}
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
                {this.state.certificate_back && (
                  <Image
                    source={{ uri: this.state.certificate_back }}
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
              value={name}
              onChangeText={(text) =>
                uploadDocumentValue({ prop: "name", value: text })
              }
            />
            <Text size={18} color="#00ccff">
              Certificate No
            </Text>
            <Input
              placeholder="Enter Certificate No"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={certificate_no}
              onChangeText={(text) =>
                this.props.uploadDocumentValue({
                  prop: "certificate_no",
                  value: text,
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
                value={mfd_date}
                onChangeText={(number) =>
                  this.props.uploadDocumentValue({
                    prop: "mfd_date",
                    value: number,
                  })
                }
              />
            </Block>
            <Text size={18} color="#00ccff" style={{ marginTop: 5 }}>
              Expiry Date
            </Text>
            <Block row style={styles.calendar}>
              <Icon name="calendar" family="Entypo" color="red" />
              <TextInputMask
                placeholder="Enter Expiry Date"
                style={styles.calendarinput}
                type={"datetime"}
                options={{
                  format: "DD-MM-YYYY",
                }}
                value={xpi_date}
                onChangeText={(number) =>
                  this.props.uploadDocumentValue({
                    prop: "xpi_date",
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
    marginTop: 100,
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
  xpi_date: state.document.xpi_date,
  certificate_no: state.document.certificate_no,
  loading: state.document.documentloading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, {
  uploadDocumentValue,
  uploadFitnessCertificate,
})(FitnessCertificate);
