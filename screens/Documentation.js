<<<<<<< HEAD
import React, { Component } from "react";
import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Block, Button, Text, Input, Icon } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";

import Theme from "../constants/Theme";

const { width,height } = Dimensions.get("screen");

export default class Documentation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInset={{ top: 0 }}
        endFillColor="black"
      >
        <Block flex safe style={styles.container} scrollbehaviour>
          <Block middle>
            <Image
              source={require("../assets/images/avatar.png")}
              style={styles.image}
            />
          </Block>
          <Block style={styles.cards}>
            <Block card shadow shadowColor="#233545">
              <Block middle row>
                <Icon name="man" family="Entypo" size={30} color="white" />
                <Text color="white" style={styles.text}>
                  Driver Details
                </Text>
              </Block>
              <TouchableOpacity onPress={() => navigation.navigate("Aadhar")}>
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Aadhar Card
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Licence")}>
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Driving Licence
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("DriverPhoto")}
              >
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Photo
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
            </Block>

            <Block card>
              <Block middle row>
                <Icon name="car" family="AntDesign" size={30} color="white" />
                <Text color="white" style={styles.text}>
                  Car Details
                </Text>
              </Block>
              <TouchableOpacity
                onPress={() => navigation.navigate("RcDocument")}
              >
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Rc Document
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("TaxiInsurance")}
              >
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Taxi Insurance
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("FitnessCertificate")}
              >
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Fitness Certificate
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("TaxiPhoto")}
              >
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Taxi Photos
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
            </Block>
            <Block card>
              <Block middle row>
                <Icon name="bank" family="AntDesign" size={30} color="white" />
                <Text color="white" style={styles.text}>
                  Bank Details
                </Text>
              </Block>
              <TouchableOpacity
                onPress={() => navigation.navigate("AccountDetail")}
              >
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Account Details
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("PanCard")}>
                <Block row space="between" style={styles.border}>
                  <Text color="white" size={20}>
                    Pan Card
                  </Text>
                  <Icon
                    name="right"
                    family="AntDesign"
                    size={20}
                    color="white"
                  />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  image: {
    alignItems: "center",
    height: 100,
    width: 100,
    margin: 40,
    borderRadius: 50,
  },
  cards: {
    margin: 20,
  },
  text: {
    textAlign: "center",
    margin: 10,
  },
  border: {
    margin: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
=======
import React, { Component } from "react";
import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Block, Button, Text, Input, Icon } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";

import Theme from "../constants/Theme";

const { width } = Dimensions.get("screen");

export default class Documentation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInset={{ top: 0 }}
        endFillColor="black"
      >
        <Block flex safe style={styles.container} scrollbehaviour>
          <Block middle>
            <Image
              source={require("../assets/images/avatar.png")}
              style={styles.image}
            />
          </Block>
          <Block style={styles.cards}>
            <Block card shadow shadowColor="#233545">
              <Text color="white" style={styles.text}>
                <Icon name="man" family="entypo" size={30} color="white" />
                Driver Details
              </Text>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity onPress={() => navigation.navigate("Aadhar")}>
                  <Text color="white" size={20}>
                    Aadhar Card
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Licence")}
                >
                  <Text color="white" size={20}>
                    Driving Licence
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("DriverPhoto")}
                >
                  <Text color="white" size={20}>
                    Photo
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
            </Block>

            <Block card>
              <Text color="white" style={styles.text}>
                <Icon name="car" family="AntDesign" size={30} color="white" />
                Cab Details
              </Text>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("RcDocument")}
                >
                  <Text color="white" size={20}>
                    Rc Document
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("TaxiInsurance")}
                >
                  <Text color="white" size={20}>
                    Taxi Insurance
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("FitnessCertificate")}
                >
                  <Text color="white" size={20}>
                    Fitness Certificate
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("TaxiPhoto")}
                >
                  <Text color="white" size={20}>
                    Taxi Photos
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
            </Block>
            <Block card>
              <Text h5 color="white" style={styles.text}>
                <Icon name="bank" family="AntDesign" size={30} color="white" />
                Bank Details
              </Text>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AccountDetail")}
                >
                  <Text color="white" size={20}>
                    Account Details
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
              <Block row space="between" style={styles.border}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PanCard")}
                >
                  <Text color="white" size={20}>
                    Pan Card
                  </Text>
                </TouchableOpacity>
                <Icon name="right" family="AntDesign" size={20} color="white" />
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  image: {
    alignItems: "center",
    height: 100,
    width: 100,
    margin: 40,
    borderRadius: 50,
  },
  cards: {
    margin: 20,
  },
  text: {
    textAlign: "center",
    margin: 10,
  },
  border: {
    margin: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
