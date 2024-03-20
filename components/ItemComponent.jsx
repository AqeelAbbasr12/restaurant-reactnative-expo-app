import * as React from "react";
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const ItemComponent = ({ imageSource, name, price }) => {
  const { w, h, f } = useResponsiveScreen();
  console.log(imageSource);
  return (
    <View style={{justifyContent: 'center'}}>
      <Card style={{
        marginBottom: 20, 
        marginHorizontal: 25, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        display: 'flex', alignItems: 'center', elevation: 0}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
          </View>
          <Card.Content style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontWeight: 700, fontSize: f(1.5)}}>{name}</Text>
            <Text style={{color: customTheme.colors.primary, fontWeight: 700,  fontSize: f(1.2), marginTop: 10}}>PKR {price}</Text>
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
    marginBottom: 20,
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
