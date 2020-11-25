<<<<<<< HEAD
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, Dimensions, Alert } from "react-native";
import { Block, Button, Icon, Input, Text, Toast } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadAccountDetail,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

const { width, height } = Dimensions.get("screen");

class AccountDetail extends Component {
  onSubmit() {
    const { name, bank_name, account_no,bank_IFSC,account_type, mobile_no,} = this.props;

    this.props.uploadAccountDetail({
      name,
      bank_name,
      account_type,
      bank_IFSC,
      account_no,
      mobile_no,
      id,
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
            <Text size={20} color="#00ccff">
              Name
            </Text>
            <Input
              placeholder="Account Name"
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
            <Text size={20} color="#00ccff">
              Bank Name
            </Text>
            <Input
              placeholder="Bank Name"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.bank_name}
              onChangeText={(text) =>
                this.props.uploadDocumentValue({
                  prop: "bank_name",
                  value: text,
                })
              }
            />
            <Text size={18} color="#00ccff">
              Account Type
            </Text>
            <Input
              placeholder="Account Type"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.account_type}
              onChangeText={(text) =>
                this.props.uploadDocumentValue({
                  prop: "account_type",
                  value: text,
                })
              }
            />
            <Text size={18} color="#00ccff">
              Bank IFSC
            </Text>
            <Input
              type="numeric"
              placeholder="Bank IFSC"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.bank_IFSC}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "bank_IFSC",
                  value: number,
                })
              }
            />
            <Text size={20} color="#00ccff">
              Account Number
            </Text>
            <Input
              placeholder="Account Number"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.account_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "account_no",
                  value: number,
                })
              }
            />
            <Text size={20} color="#00ccff">
              Mobile Number
            </Text>
            <Input
              placeholder="Mobile Number"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.mobile_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "mobile_no",
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
  bank_IFSC: state.document.bank_IFSC,
  account_type: state.document.account_type,
  account_no: state.document.account_no,
  mobile_no: state.document.mobile_no,
  loading: state.document.loading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, {
  uploadDocumentValue,
  uploadAccountDetail,
})(AccountDetail);
=======
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, Dimensions, Alert } from "react-native";
import { Block, Button, Icon, Input, Text, Toast } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadAccountDetail,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";

const { width, height } = Dimensions.get("screen");

class AccountDetail extends Component {
  onSubmit() {
    const { name, bank_name, account_no, aadhar_no } = this.props;

    this.props.uploadAccountDetail({
      bank_name,
      account_type,
      bank_IFSC,
      account_no,
      mobile_no,
      name,
      id,
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
            <Text size={20} color="#00ccff">
              Name
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
            <Text size={20} color="#00ccff">
              Bank Name
            </Text>
            <Input
              placeholder="Name on Aadhar"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.bank_name}
              onChangeText={(text) =>
                this.props.uploadDocumentValue({
                  prop: "bank_name",
                  value: text,
                })
              }
            />
            <Text size={18} color="#00ccff">
              Account Type
            </Text>
            <Input
              placeholder="Aadhar Card No"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.account_type}
              onChangeText={(text) =>
                this.props.uploadDocumentValue({
                  prop: "account_type",
                  value: text,
                })
              }
            />
            <Text size={18} color="#00ccff">
              Bank IFSC
            </Text>
            <Input
              type="numeric"
              placeholder="Issue Date"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.bank_IFSC}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "bank_IFSC",
                  value: number,
                })
              }
            />
            <Text size={20} color="#00ccff">
              Account Number
            </Text>
            <Input
              placeholder="Name on Aadhar"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.account_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "account_no",
                  value: number,
                })
              }
            />
            <Text size={20} color="#00ccff">
              Mobile Number
            </Text>
            <Input
              placeholder="Name on Aadhar"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.mobile_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "mobile_no",
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
  bank_IFSC: state.document.bank_IFSC,
  account_type: state.document.account_type,
  account_no: state.document.account_no,
  mobile_no: state.document.mobile_no,
  loading: state.document.loading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, {
  uploadDocumentValue,
  uploadAccountDetail,
})(AccountDetail);
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
