import * as React from "react";
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Link } from "expo-router";

export const ItemComponent = ({ imageSource, name, price }) => {
  const { w, h, f } = useResponsiveScreen();

  return (
    <View style={{justifyContent: 'center', width: '50%', alignItems: 'center'}}>
      <Card style={{
        marginBottom: 20, 
        backgroundColor: 'white', 
        justifyContent: 'center',
        display: 'flex', alignItems: 'center', elevation: 0}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.imageContainer}>
            <Link href={"/chooseItem"}>
              <Image source={imageSource} style={styles.image} />
            </Link>
          </View>
          <Card.Content style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontWeight: 900, fontSize: f(1.9)}}>{name}</Text>
            <Text style={{color: customTheme.colors.primary, fontWeight: 900,  fontSize: f(1.9), marginTop: 5}}>PKR {price}</Text>
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
