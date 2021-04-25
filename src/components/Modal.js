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
    const { item } = this.props;
    const { amount } = this.state;
    const data = {
      book_id: item.id,
      booking_id: item.booking_id,
      amount: amount,
    };
    this.props.saveBidData(data);
  };

  render() {
    const { visible, onDecline, onSubmit, item, message, isShow } = this.props;
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
                help="Please enter valid number"
                bottomHelp
                value={amount}
                onChangeText={(number) => this.setState({ amount: number })}
              />
              <Button
                round
                color={Theme.COLORS.BUTTON2}
                onPress={this.onSubmit}
              >
                Send
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
});

export default connect(mapStateToProps, { saveBidData })(ModalComponent);
