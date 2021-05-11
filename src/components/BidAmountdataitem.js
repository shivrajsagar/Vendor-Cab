import React, { Component } from "react";
import { Block, Icon, Button, Text } from "galio-framework";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import Theme from "../constants/Theme";
import { connect } from "react-redux";
import { BidAmountData } from "../redux/actions/BidAmountAction";
const { width } = Dimensions.get("window");
class BidAmountDataitem extends Component {
  componentDidMount() {
    this.props.BidAmountData();
  }
  render() {
    const { amountdata } = this.props;

    return (
      <Block>
        <Block row space="around" style={styles.text}>
          <Block row>
            <Icon name="calendar" family="Entypo" size={20} color="#007acc" />
            <Text color="blue">Amount</Text>
          </Block>
          <Block>
            {amountdata.map((item) => (
              <Text>{item.amount}</Text>
            ))}
          </Block>
        </Block>

        <Block row style={styles.text}>
          <Block flex middle>
            <Button
              middle
              round
              color="#009688"
              // onPress={() => openModal(item.id, item.booking_id)}
            >
              Edit Bid Amount
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    backgroundColor: Theme.COLORS.PRIMARY,
    alignItems: "center",
  },
  container: {
    backgroundColor: Theme.COLORS.WHITE,
    marginTop: 6,
    marginBottom: Theme.SIZES.BASE - 6,
    borderRadius: Theme.SIZES.BASE,
    padding: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: width - Theme.SIZES.BASE * 2.5,
    borderTopColor: "#006699",
  },
  heading: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#006699",
    borderTopLeftRadius: Theme.SIZES.BASE,
  },
  text: {
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
    fontSize: 25,
  },
});

const mapStateToProps = (state) => ({
  amountdata: state.BIDAMOUNT.Bidamount,
});

export default connect(mapStateToProps, {
  BidAmountData,
})(BidAmountDataitem);
