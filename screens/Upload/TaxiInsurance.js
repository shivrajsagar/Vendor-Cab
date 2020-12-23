import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { Block, Button, Icon, Input, Text } from "galio-framework";
import * as ImagePicker from "expo-image-picker";

import Theme from "../../constants/Theme";
import { connect } from "react-redux";
import {
  uploadTaxiInsurance,
  uploadDocumentValue,
} from "../../redux/actions/documentAction";


class TaxiInsurance extends Component {
  state = {
    insurance_front: null,
    insurance_back: null,
    errorMessage: null,
  };

  onSubmit() {
    const { name, Issue_Date } = this.props;
    const { insurance_front, insurance_back } = this.state;
    if (!name || !Issue_Date || !insurance_back||!insurance_front) {
      this.setState({ errorMessage: "Please fill in all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      this.props.uploadAadhar({
        insurance_front,
        insurance_back,
        name,
        Issue_Date,
        insurance_no,
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
      this.setState({ insurance_front: result.uri });
    }
  };

  backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result2.cancelled) {
      this.setState({ insurance_back: result2.uri });
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
                {this.state.insurance_front && (
                  <Image
                    source={{ uri: this.state.insurance_front }}
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
                {this.state.insurance_back && (
                  <Image
                    source={{ uri: this.state.insurance_back }}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </Block>
            </Block>
            <Text size={20} color="#00ccff">
              Name on Card
            </Text>
            <Input
              placeholder="Name on Card"
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
              Card No
            </Text>
            <Input
              placeholder=" Card No"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="pencil"
              family="Entypo"
              iconColor="red"
              left
              value={this.props.insurance_no}
              onChangeText={(number) =>
                this.props.uploadDocumentValue({
                  prop: "insurance_no",
                  value: number,
                })
              }
              maxLength={12}
            />
            <Text size={18} color="#00ccff">
              Issue Date
            </Text>
            <Input
              type="calendar"
              placeholder="Issue Date"
              placeholderTextColor={Theme.COLORS.PRIMARY}
              icon="calendar"
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
              maxLength={8}
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
  mfd_date: state.document.mfd_date,
  insurance_no: state.document.insurance_no,
  loading: state.document.documentloading,
  message: state.document.message,
  error: state.document.error,
  isShow: state.document.isShow,
});

export default connect(mapStateToProps, {
  uploadDocumentValue,
  uploadTaxiInsurance,
})(TaxiInsurance);
