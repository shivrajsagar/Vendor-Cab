import React, { Component } from "react";
import { StyleSheet ,Dimensions} from "react-native";
import { theme, Button, Block, Icon,Text } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../constants/Theme";


const {width,height}=Dimensions.get("screen")


class DrawerItem extends Component {
  renderIcon = () => {
    const { title, focused } = this.props;
    switch (title) {
      case "Dashboard":
        return <Icon name="home" family="Entypo" size={20} color="white" />;
      case "Profile":
        return <Icon name="user" family="Entypo" size={20} color="white"/>;
      case "Transaction History":
        return <Icon name="select-arrows" family="Entypo" size={20} color="white" />;
      case "Pay Commision":
        return <Icon name="calculator" family="Entypo" size={20} color="white"/>;
      case "Documentation":
        return <Icon name="documents" family="Entypo" size={20} color="white"/>;
      case "Help":
        return <Icon name="help" family="Entypo" size={20} color="white"/>;
      case "Logout":
        return <Icon name="logout" family="AntDesign" size={20} color="white"/>;
    }
  };

  render() {
    const { title, focused, navigation } = this.props;
    return (
      <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => {
          navigation.navigate(title);
        }}
      >
        <Block flex row style={[styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null]}>
          <Block middle flex={0.2} style={{ marginRight: 20 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.8}>
            <Text size={18} color={focused?"white":"white"}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    color:"white"
  },
  activeStyle: {
    backgroundColor: "red",
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  
});

export default DrawerItem;
