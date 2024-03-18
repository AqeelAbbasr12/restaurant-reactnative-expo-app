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
  const { f } = useResponsiveScreen();

  return (
    <Card style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
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
        <Text style={[styles.title, { fontSize: f(2) }]}>{title}</Text>
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
    backgroundColor: "#F29434",
    borderRadius: 25,
    elevation: 0,
    shadowColor: "black",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingBottom: 30,
  },
  content: {
    fontSize: 16,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    colo: "#F29434",
    textTransform: "uppercase",
  },
  imageContainer: {
    width: 200,
    height: 115,
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
