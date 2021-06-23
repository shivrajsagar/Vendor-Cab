import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
} from "react-native";
import Theme from "../constants/Theme";
import { dashboard } from "../constants/data";
import CardComponent from "../components/DocumentCard";

const { width, height } = Dimensions.get("screen");

class DocumentView extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            //marginTop: 30,
            backgroundColor: Theme.COLORS.PRIMARY,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <FlatList
            contentContainerStyle={{
              justifyContent: "space-between",
              padding: 15,
            }}
            data={dashboard}
            renderItem={({ item, index }) => {
              return <CardComponent item={item} navigation={navigation} />;
            }}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default DocumentView;
