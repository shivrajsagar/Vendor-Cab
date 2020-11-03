import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Image, Platform } from "react-native";
import { Block, Text, Icon, Input, Button } from "galio-framework";
import { withNavigation } from "@react-navigation/compat";
import * as ImagePicker from "expo-image-picker";
import Theme from "../constants/Theme";

const { width, height } = Dimensions.get("screen");

const UploadData = ({ navigation, front, back, name, number, date ,onSubmit}) => {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const frontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const backImage = async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    console.log(result2);
    if (!result2.cancelled) {
      setImage2(result2.uri);
    }
  };
  return (
    <Block flex card shadow shadowColor="gray" style={styles.card}>
      <Text size={18} color="#00ccff">
        {front}
      </Text>
      <Block row style={styles.image}>
        <Block middle>
          <Icon
            name="image"
            family="Entypo"
            size={30}
            color="purple"
            onPress={frontImage}
          />
        </Block>
        <Block middle>
          {image && (
            <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
          )}
        </Block>
      </Block>
      <Text size={18} color="#00ccff">
        {back}
      </Text>
      <Block row style={styles.image}>
        <Block middle>
          <Icon
            name="image"
            family="Entypo"
            size={30}
            color="purple"
            onPress={backImage}
          />
        </Block>
        <Block middle>
          {image2 && (
            <Image source={{ uri: image2 }} style={{ width: 50, height: 50 }} />
          )}
        </Block>
      </Block>
      <Text size={20} color="#00ccff">
        {name}
      </Text>
      <Input
        placeholder="Name on Aadhar"
        placeholderTextColor={Theme.COLORS.PRIMARY}
        icon="pencil"
        family="Entypo"
        iconColor="red"
        left
      />
      <Text size={18} color="#00ccff">
        {number}
      </Text>
      <Input
        placeholder="Aadhar Card No"
        placeholderTextColor={Theme.COLORS.PRIMARY}
        icon="pencil"
        family="Entypo"
        iconColor="red"
        left
      />
      <Text size={18} color="#00ccff">
        {date}
      </Text>
      <Input
        type="numeric"
        placeholder="Issue Date"
        placeholderTextColor={Theme.COLORS.PRIMARY}
        icon="pencil"
        family="Entypo"
        iconColor="red"
        left
      />
      <Button round middle color="#009688" onPress={onSubmit} >
        Submit
      </Button>
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.COLORS.WHITE,
    padding: 10,
    margin: 20,
    justifyContent: "space-evenly",
  },
  image: {
    justifyContent: "space-around",
  },
});

export default withNavigation(UploadData);
