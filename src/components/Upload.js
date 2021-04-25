import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Image, Platform } from "react-native";
import { Block, Text, Icon, Input } from "galio-framework";
import { withNavigation } from "@react-navigation/compat";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import Theme from "../constants/Theme";

const { width, height } = Dimensions.get("screen");

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
      <Text size={20} color="#00ccff">
        {number}
      </Text>
      <Input
        placeholder="Aadhar card no"
        placeholderTextColor={Theme.COLORS.PRIMARY}
        icon="pencil"
        family="Entypo"
        iconColor="red"
        left
      />
      <Text size={20} color="#00ccff">
        {date}
      </Text>
      <Icon name="calendar" family="Entypo" size={25} color="purple" />
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.COLORS.WHITE,
    padding: 20,
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default withNavigation(UploadData);
