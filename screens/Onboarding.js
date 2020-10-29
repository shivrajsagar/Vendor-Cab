import React, { useEffect, useState } from "react";
import { StyleSheet, Animated, Dimensions ,StatusBar,Image,TouchableOpacity} from "react-native";
import { Block,Text, Button ,theme} from "galio-framework";
import Theme from "../constants/Theme";


const { width, height } = Dimensions.get("screen");

const onBoardings = [
  {
    title: "Vendor",
    description: "vendor app appiliction",
    img: "https://source.unsplash.com/840x840/?car",
  },
  {
    title: "Vendor2",
    description: "vendor app appiliction",
    img:"https://source.unsplash.com/840x840/?bike",
  },
  {
    title: "Vendor3",
    description: "vendor app appiliction",
    img:"https://source.unsplash.com/840x840/?auto",
  },
];

const Onboarding = ({ navigation }) => {
  const [completed, setCompleted] = useState(false);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <Block flex key={`img-${index}`} style={styles.imageAndTextContainer}>
            <Block
              middle
              shadow
              shadowColor="green"
              style={styles.imageContainer}
            >
              <Image
                source={{ uri: item.img }}
                resizeMode="cover"
                style={styles.image}
              />
            </Block>
            <Block middle style={styles.textContainer}>
              <Text h2 color="white" >{item.title}</Text>
              <Text h6 color="white" >{item.description}</Text>
            </Block>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 30,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: "center",
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: Theme.COLORS.BUTTON2,
              }}
              onPress={() => {
                navigation.navigate("Signin");
              }}
            >
              <Text color="white">{completed ? "Let's Go" : "Skip"}</Text>
            </TouchableOpacity>
          </Block>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, theme.SIZES.BASE);
    return (
      <Block style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [theme.SIZES.BASE, 17, theme.SIZES.BASE],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </Block>
    );
  }

  return (
    <Block safe style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Block flex>{renderContent()}</Block>
      <Block style={styles.dotsRootContainer}>{renderDots()}</Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Theme.COLORS.DEFAULT,
  },
  imageAndTextContainer: {
    width: width,
    marginTop: 100,
  },
  image: {
    width: width/2,
    height: height / 4,
    borderRadius: width / 2,
  },
  imageContainer: {
    shadowColor: "white",
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 5,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: theme.SIZES.BASE > 700 ? "20%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE * 3,
    height: theme.SIZES.BASE,
  },
  dot: {
    borderRadius: 10,
    backgroundColor: Theme.COLORS.BUTTON2,
    marginHorizontal: 5,
  },
  textContainer: {
    marginTop: 100,
  },
});

export default Onboarding;
