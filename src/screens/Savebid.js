import React, { Component } from "react";
import { Block, Button, Text } from "galio-framework";

//redux
import { connect } from "react-redux";
import { saveBidData } from "../redux/actions/bidAction";

class Savebid extends Component {
  state = {
    book_id: "211234",
    booking_id: "EXP4325",
    vendor_id: "E1245",
    amount: "2000",
  };

  componentDidMount() {
    const data = {
      amount: this.state.amount,
    };
    this.props.saveBidData(data);
  }

  render() {
    const { message } = this.props;
    return (
      <Block flex middle>
        <Text>{message}</Text>
        <Button>Save Bid</Button>
      </Block>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.savebid.message,
});

export default connect(mapStateToProps, { saveBidData })(Savebid);
