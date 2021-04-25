import React, { Component } from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Block, Button, Icon, Input, Text } from "galio-framework";
import * as ImagePicker from "expo-image-picker";
import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadAadhar,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

class Aadhar extends Component {
  state = {
    aadhar_front_image: null,
    aadhar_back_image: null,
    errorMessage: null,
  };
  onChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    this.setState({ show: Platform.OS === "ios" });
    this.setState({ date: currentDate });
  };

  onSubmit() {
    const { name, driver_id, aadhar_no } = this.props;
    const { aadhar_front_image, aadhar_back_image } = this.state;

    if (!name || !aadhar_no || !aadhar_back_image || !aadhar_front_image) {
      this.setState({ errorMessage: "Please insert in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 2000);
    } else {
      this.props.uploadAadhar({
        aadhar_front_image,
        aadhar_back_image,
        name,
        driver_id,
        aadhar_no,
      });
    }
  }

  frontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ aadhar_front_image: result.uri });
    }
  };

  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
            {this.state.errorMessage ? (
              <Text size={20} color="red" center>
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
              Enter Your Name
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
              maxLength={12}
            />
            {/* <Text size={18} color="#00ccff">
              Issue Date
            </Text> */}

            {/* <Block row style={styles.calendar}>
              <Icon name="calendar" family="Entypo" color="red" />
              <TextInputMask
                style={styles.calendarinput}
                type={"datetime"}
                options={{
                  format: "DD-MM-YYYY",
                }}
                value={this.props.Issue_Date}
                onChangeText={(number) =>
                  this.props.uploadDocumentValue({
                    prop: "Issue_Date",
                    value: number,
                  })
                }
              />
            </Block> */}
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
    justifyContent: "center",
  },
  image: {
    justifyContent: "space-around",
  },
  issuedatestyle: {
    marginTop: 8,
    borderColor: Theme.COLORS.PRIMARY,
  },
  text: {
    marginTop: 2,
    marginLeft: 3,
    width: 300,
    alignItems: "center",
    color: Theme.COLORS.PRIMARY,
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
  Issue_Date: state.document.Issue_Date,
  aadhar_no: state.document.aadhar_no,
  loading: state.document.documentloading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, { uploadDocumentValue, uploadAadhar })(
  Aadhar
);
