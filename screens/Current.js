import React, { Component } from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import { Block, Button, Text } from "galio-framework";

import Theme from "../constants/Theme";
import { Card } from "../components";

import { connect } from "react-redux";
import { fetchCurrentData } from "../redux/actions/currentAction";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

class Current extends Component {
  componentDidMount() {
    this.props.fetchCurrentData();
  }

  render() {
    const { item } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block safe  style={styles.container}>
          {item.map((item) => (
            <Card item={item} bookingid name mobile pickupaddress dropaddress status />
          ))}
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    alignItems:"center"
  },
});

const mapStateToProps = (state) => ({
  item: state.current.currentitem,
});

export default connect(mapStateToProps, { fetchCurrentData })(Current);
