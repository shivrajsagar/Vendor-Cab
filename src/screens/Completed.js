import React, { Component } from "react";
import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { Block, Button, Text } from "galio-framework";
import Theme from "../constants/Theme";
import { connect } from "react-redux";
import { fetchCompleteData } from "../redux/actions/completedAction";
import { Card } from "../components";
const { width } = Dimensions.get("screen");

class Completed extends Component {
  componentDidMount() {
    this.props.fetchCompleteData();
  }
  render() {
    const { item } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex style={styles.container}>
          {item.map((item, index) => (
            <Card
              item={item}
              date
              bookingid
              amount
              payment
              status
              key={index}
            />
          ))}
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  item: state.completed.completeditem,
});

export default connect(mapStateToProps, { fetchCompleteData })(Completed);
