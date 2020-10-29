import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Button, Input, Icon, theme, Text } from "galio-framework";

const {width,height}=Dimensions.get("screen");

import {materialTheme} from '../constants'
const Signin = ({ navigation }) => {
  return (
    <Block safe flex middle style={styles.container}>
      <Block card shadow shadowColor="gray" style={styles.card} >
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button round>
          Signin
        </Button>
      <TouchableOpacity>
        <Text style={styles.text}  >Forgot Password</Text>
      </TouchableOpacity>
      </Block>
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.text} >Not registered yet?</Text>
      </TouchableOpacity>
      <Button round onPress={() => navigation.navigate("App")}>Skip</Button>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    backgroundColor:"#233545",
  },
  card: {
    width:width-theme.SIZES.BASE,
    backgroundColor: "white",
    margin: 10,
    padding:30,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    color:"red",
    margin:10,
    padding:10,
    fontSize:20,
  }
});

export default Signin;
