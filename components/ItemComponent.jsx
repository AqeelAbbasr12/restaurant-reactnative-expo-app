import * as React from "react";
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const ItemComponent = ({ imageSource, name, price }) => {
  const { w, h, f } = useResponsiveScreen();
  console.log(imageSource);
  return (
    <Card style={{marginBottom: 20, marginRight: 20, backgroundColor: 'white', justifyContent: 'center', display: 'flex', width: '42%', alignItems: 'center', elevation: 0}}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Card.Content>
        <Text style={{color: '#000', fontWeight: 700, fontSize: f(1.5)}}>{name}</Text>
        <Text style={{color: customTheme.colors.primary, fontWeight: 700,  fontSize: f(1.3)}}>Price: {price}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: 'white',
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
    textTransform: "uppercase",
  },
  imageContainer: {
    width: 100,
    height: 100,
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    alignContent: "center",
    resizeMode: "contain",
    marginHorizontal: "auto",
  },
  buttonLabel: {
    fontSize: 12,
    fontFamily: "Montserrat-Bold",
  },
});
