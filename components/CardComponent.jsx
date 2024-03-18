import * as React from "react";
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const CardComponent = ({
  imageSource,
  title,
  buttonText,
  buttonTextColor,
  onPress,
}) => {
  const { h, f } = useResponsiveScreen();

  return (
    <Card style={[styles.container, { backgroundColor: customTheme.colors.primary,shadowColor: '#171717',
    shadowOffset: {width: 3, height: 7},
    shadowOpacity: 0.4,
    shadowRadius: 7, elevation: 5}]}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={[styles.buttonContainer, {marginBottom: h(2)}]}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={onPress}
          textColor={buttonTextColor}
          uppercase
          labelStyle={styles.buttonLabel}
        >
          {buttonText}
        </Button>
      </View>
      <Card.Content>
        <Text style={[styles.title, { fontSize: f(1.9) }]}>{title}</Text>
      </Card.Content>
      <Image
        source={require("../assets/images/fire2.png")}
        style={styles.backgroundImage}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    elevation: 0,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingBottom: 30,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    colo: "#F29434",
    textTransform: "uppercase",
  },
  imageContainer: {
    width: 205,
    height: 135,
    position: "relative",
  },
  image: {
    position: "absolute",
    right: -45,
    top: -9,
    width: "100%",
    height: "100%",
    alignContent: "center",
    resizeMode: "contain",
  },
  buttonLabel: {
    fontSize: 10,
    marginVertical: 0,
    marginHorizontal: 7,
    fontWeight: 800,
    lineHeight: 23,
  },
  backgroundImage: {
    position: "absolute",
    zIndex: -1,
    opacity: 0.2,
    bottom: 0,
    left: -5,
    width: "55%",
    height: "55%",
  },
});
