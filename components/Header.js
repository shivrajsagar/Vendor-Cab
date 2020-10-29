import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { withNavigation } from "@react-navigation/compat";
import { Block, Button, Text, Icon, theme, NavBar } from "galio-framework";
import DrawerItem from "../components/Drawer";

import Theme from '../constants/Theme'

const { width, height } = Dimensions.get("screen");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

class Header extends Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  render() {
    const { back, title,white, transparent, navigation } = this.props;
    const noShadow = [
      "Search",
      "Categories",
      "Profile",
      "Signin",
      "Signup",
    ].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: Theme.COLORS.DEFAULT } : null,
    ];
    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={styles.navbar}
          transparent={transparent}
          leftStyle={{ flex: 0.3, paddingTop: 2 , }}
          leftIconName={(back ? 'chevron-left' : 'navicon')}
          leftIconColor={white ? theme.COLORS.WHITE : Theme.COLORS.NAVBAR_TITLE}
          titleStyle={[
            styles.title,
            {color: Theme.COLORS[white ? 'WHITE' : 'DEFAULT']},
          ]}
          onLeftPress={this.handleLeftPress}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
    
  },
});

export default withNavigation(Header);
