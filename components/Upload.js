import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Image, Platform } from "react-native";
<<<<<<< HEAD
import { Block, Text, Icon, Input } from "galio-framework";
import { withNavigation } from "@react-navigation/compat";
import * as DocumentPicker from "expo-document-picker";
=======
import { Block, Text, Icon, Input, Button } from "galio-framework";
import { withNavigation } from "@react-navigation/compat";
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
import * as ImagePicker from "expo-image-picker";
import Theme from "../constants/Theme";

const { width, height } = Dimensions.get("screen");

<<<<<<< HEAD
const UploadData = ({ navigation, front, back, name, number, date }) => {
  const [image, setImage] = useState(null);

  const frontImage = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry , we need camera roll permission to make this work");
      }
    }

    let result1 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    console.log(result1);

    if (!result1.cancelled) {
      setImage(result1.uri);
    }
  };

  return (
    <Block flex card shadow shadowColor="gray" style={styles.card}>
      <Text size={20} color="#00ccff">
        {front}
      </Text>
      {image ? (
        <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
      ) : (
        <Icon
          name="image"
          family="Entypo"
          size={25}
          color="purple"
          onPress={frontImage}
        />
      )}
      <Text size={20} color="#00ccff">
        {back}
      </Text>
      {image ? (
        <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
      ) : (
        <Icon name="image" family="Entypo" size={25} color="purple" />
      )}
=======
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
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
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
<<<<<<< HEAD
      <Text size={20} color="#00ccff">
        {number}
      </Text>
      <Input
        placeholder="Aadhar card no"
=======
      <Text size={18} color="#00ccff">
        {number}
      </Text>
      <Input
        placeholder="Aadhar Card No"
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
        placeholderTextColor={Theme.COLORS.PRIMARY}
        icon="pencil"
        family="Entypo"
        iconColor="red"
        left
      />
<<<<<<< HEAD
      <Text size={20} color="#00ccff">
        {date}
      </Text>
      <Icon name="calendar" family="Entypo" size={25} color="purple" />
=======
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
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.COLORS.WHITE,
<<<<<<< HEAD
    padding: 20,
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
=======
    padding: 10,
    margin: 20,
    justifyContent: "space-evenly",
  },
  image: {
    justifyContent: "space-around",
>>>>>>> b995370880bdb2fecff832c4b575131de126e5e4
  },
});

export default withNavigation(UploadData);
