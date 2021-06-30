import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Block } from "galio-framework";
import Theme from "../../constants/Theme";
import defaultImage from "../../assets/images/avatar.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ImageUri = Image.resolveAssetSource(defaultImage).uri;
const { height, width } = Dimensions.get("window");
class ViewTaxiphoto extends Component {
  state = {
    data: [],
    errors: "",
  };

  async componentDidMount() {
    const driver_id = await AsyncStorage.getItem("driver_id");
    console.log(driver_id);
    var formdata = new FormData();
    formdata.append("vendorID", driver_id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://expresscab.in/CarDriving/driver_Info.php?apicall=GetAllTaxiImage",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.error != true
          ? this.setState({ data: result.driver, errors: result.error })
          : this.setState({ errors: result.error })
      )
      .catch((error) => console.log("error", error));
  }
  render() {
    const { data, errors } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: Theme.COLORS.PRIMARY }}>
        <Block style={styles.container}>
          {errors != true ? (
            <>
              {data.map((item) => {
                return (
                  <>
                    <Block style={styles.container1}>
                      <Text style={styles.text}>FRONT IMAGE</Text>
                      <Image
                        style={styles.image}
                        source={{
                          uri:
                            item.image != null
                              ? `http://expresscab.in/${item.image}`
                              : ImageUri,
                        }}
                      />
                    </Block>
                    <Block style={styles.container1}>
                      <Text style={styles.text}>BACK IMAGE</Text>
                      <Image
                        style={styles.image}
                        source={{
                          uri:
                            item.back_image != null
                              ? `http://expresscab.in/${item.back_image}`
                              : ImageUri,
                        }}
                      />
                    </Block>
                  </>
                );
              })}
            </>
          ) : (
            <Block style={styles.container1}>
              <Text style={styles.text}>Fitness Certificate Images</Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "red",
                }}
              >
                No Fitness Certificate Images Found{"\n"}
                Please Upload
              </Text>
            </Block>
          )}
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  image: {
    height: height / 2,
    backgroundColor: "gray",
    borderRadius: 10,
    width: width * 0.88,
    padding: 10,
  },
  container1: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
export default ViewTaxiphoto;
