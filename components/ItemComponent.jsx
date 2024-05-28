import * as React from "react";
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Link } from "expo-router";

export const ItemComponent = ({ id, imageSource, name, price }) => {
  const { f } = useResponsiveScreen();


  return (
    <View
      style={{ justifyContent: "center", width: "50%", alignItems: "center", height: 190, marginBottom: 10 }}
    >
      <Card
        style={{
          marginBottom: 20,
          backgroundColor: "white",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          elevation: 0,
        }}
        key={id}
      >
        <View style={{ alignItems: "center" }}>
            <Link href={`/chooseItem/${id}`}>
              <View style={styles.imageContainer}>
                  <Image source={imageSource ? {uri: imageSource} : require("../assets/images/menu/chicken_fry.png")} style={styles.image} />
              </View>
            </Link>
          <Card.Content style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#000",
                fontWeight: 700,
                fontSize: 17,
                textAlign: "center",
                marginTop: 10,
              }}
              numberOfLines={2}
            >
              {name}
            </Text>
            <Text
              style={{
                color: customTheme.colors.primary,
                fontWeight: 700,
                fontSize: 18,
                marginTop: 5,
              }}
            >
              AED {price}
            </Text>
          </Card.Content>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    marginBottom: 10,
    overflow: 'hidden',
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    alignContent: "center",
    resizeMode: "contain",
    marginHorizontal: "auto",
  },
});
