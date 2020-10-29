import React, { Component } from "react";
import { Dimensions, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Button, Text, Icon, Input } from "galio-framework";

import { withNavigation } from "@react-navigation/compat";
import Theme from "../constants/Theme";

const { width } = Dimensions.get("screen");

class ModalComponent extends Component {
  state = {
    amount: "200",
  };

  render() {
    const { visible, onDecline, onSubmit, item, message } = this.props;
    return (
      <Block>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {}}
          style={{ backgroundColor: "rgba(0,0,0,.8)" }}
        >
          <Block flex middle style={{ backgroundColor: "rgba(0,0,0,.3)" }}>
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
                <Text>{message}</Text>
                <Text h5 left>
                  Enter You best Price
                </Text>
                <Text>book id-{item.id}</Text>
                <Text>Booking id-{item.booking_id}</Text>
              </Block>
              <Input
                placeholder="Amount"
                type="number-pad"
                style={{ borderBottomColor: "red" }}
                color="gray"
                help="Please enter valid number"
                bottomHelp
                value={this.state.amount}
              />
              <Button round color={Theme.COLORS.BUTTON2} onPress={onSubmit}>
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

export default withNavigation(ModalComponent);
