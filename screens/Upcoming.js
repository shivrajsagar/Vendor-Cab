import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Button } from "galio-framework";
import Theme from "../constants/Theme";
import { connect } from "react-redux";
import { fetchUpcomingData } from "../redux/actions/upcomingAction";
import { Card } from "../components";
import { ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

class Upcoming extends Component {
  componentDidMount() {
    this.props.fetchUpcomingData();
  }

  render() {
    const { item } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false} >
        <Block style={styles.container}>
          {item.map((item) => (
            <Card item={item} bookingid pickupaddress dropaddress  pickupdatetime dropdatetime bid />
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
  item: state.upcoming.upcomingitem,
});

export default connect(mapStateToProps, { fetchUpcomingData })(Upcoming);
