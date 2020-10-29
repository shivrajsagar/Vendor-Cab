import React, { Component } from "react";
import { StyleSheet,ImageBackground, Dimensions } from "react-native";
import { Block, Button, theme } from "galio-framework";


const {width,height}=Dimensions.get("screen");

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Onboarding");
    }, 5000);
  }

  render() {
    return (
      <Block  flex middle >
        <ImageBackground source={require('../assets/splash.png')} style={styles.image} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    alignItems:"center",
    width:width,
    height:height,
  }
});
