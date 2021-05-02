import React, { Component } from "react";
import { Dimensions, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Button, Text, Icon, Input } from "galio-framework";

import Theme from "../constants/Theme";

const { width } = Dimensions.get("screen");
import { connect } from "react-redux";
import { saveBidData } from "../redux/actions/bidAction";

class ModalComponent extends Component {
  state = {
    amount: "",
  };

  onSubmit = () => {
    const { book_id, booking_id } = this.props;

    const { amount } = this.state;
    const data = {
      book_id,
      booking_id,
      amount: amount,
    };
    this.props.saveBidData(data);
  };

  render() {
    const { visible, onDecline, message, loading } = this.props;
    const { amount } = this.state;

    return (
      <Block>
        <Modal visible={visible} transparent>
          <Block flex middle style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
            <Block
              card
              shadow
              shadowColor="gray"
              style={{ backgroundColor: "white", width: width, padding: 10 }}
            >
              <Block style={styles.close}>
                <TouchableOpacity onPress={onDecline}>
                  <Icon
                    name="cross"
                    family="Entypo"
                    size={40}
                    color="red"
                    right
                  />
                </TouchableOpacity>
              </Block>
              <Block>
                <Text size={20} center bold color="green">
                  {message}
                </Text>
                <Text h5 left>
                  Enter You best Price
                </Text>
              </Block>
              <Input
                type="number"
                placeholder="Amount"
                type="number-pad"
                style={{ borderBottomColor: "red" }}
                color="gray"
                help="Please Enter Amount"
                bottomHelp
                value={amount}
                onChangeText={(number) => this.setState({ amount: number })}
                maxLength={5}
              />
              <Button
                round
                loading={loading}
                color={Theme.COLORS.BUTTON2}
                onPress={this.onSubmit}
              >
                Save
              </Button>
            </Block>
          </Block>
        </Modal>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  close: {
    marginRight: 1,
    alignItems: "flex-end",
  },
});

const mapStateToProps = (state) => ({
  message: state.savebid.message,
  isShow: state.savebid.isShow,
  book_id: state.savebid.book_id,
  booking_id: state.savebid.booking_id,
  loading: state.savebid.bidloading,
});

export default connect(mapStateToProps, { saveBidData })(ModalComponent);
