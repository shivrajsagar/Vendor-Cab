import React, { Component } from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Block, Text, Icon } from "galio-framework";
import Theme from "../constants/Theme";

import DateTimePicker from "@react-native-community/datetimepicker";
const { width } = Dimensions.get("screen");

export default class Commision extends Component {
  state = {
    date: new Date(),
    show: false,
  };
  onChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    this.setState({ show: Platform.OS === "ios" });
    this.setState({ date: currentDate });
  };

  render() {
    return (
      <Block flex safe style={styles.container}>
        <Block card row middle space="between" height={35}>
          <TouchableOpacity onPress={() => this.setState({ show: true })}>
            <Block row marginLeft={2}>
              <Icon name="calendar" family="Entypo" size={20} color="red" />
              <Text center style={styles.text} muted size={15}>
                {this.state.date.toLocaleDateString()}
              </Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity>
            <Block marginRight={5}>
              <Icon left name="search" family="Feather" size={18} color="red" />
            </Block>
          </TouchableOpacity>
        </Block>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          />
        )}
        <Text style={styles.text}>Search Pay Commision Here</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 3,
  },
  text: {
    marginTop: 2,
    marginLeft: 3,
    width: 300,
    alignItems: "center",
    color: Theme.COLORS.BUTTON,
  },
  block: {},
  calendersty: { marginTop: 10 },
});
