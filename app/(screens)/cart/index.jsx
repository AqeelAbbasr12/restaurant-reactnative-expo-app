import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { InputComponent } from "@/components/InputComponent";
import { ItemComponent } from "@/components/ItemComponent";
import { useState } from "react";
import { OptionComponent } from "@/components";
import { AddToCartButton } from "@/components";
import { Link } from "expo-router";

export default function MenuPage() {
  const { w,h,f } = useResponsiveScreen();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{position: 'relative'}}>
        <View 
          style={{ 
            backgroundColor: customTheme.colors.primary,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingVertical: h(2), 
            position: 'relative',
            zIndex: 1,
            paddingHorizontal: h(3),
          }}>
          <Header>
            <View 
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: w(3),
              }}>
              <Link href={"/menu"}>
                <Icon 
                  name="chevron-left"
                  size={f(3)}
                  color={customTheme.colors.iconColorWhite}
                ></Icon>
              </Link>
              <Heading text="Cart" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.5)}} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: w(3),
              }}
            >
              <Icon
                name="delete"
                size={30}
                color={customTheme.colors.iconColorWhite}
              />
            </View>
          </Header>
        </View>
        
        <View 
          style={{ 
            paddingHorizontal: w(5), 
            paddingVertical: h(3), 
            backgroundColor: 'white',
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            marginTop: -40,
            paddingTop: 100,
            paddingBottom: 50,
            marginBottom: h(10)
          }}>
            
            
        </View>
        {/* <View 
        style={{
          backgroundColor: customTheme.colors.primary, 
          paddingVertical: h(3), 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          width: '100%'
        }}>
        <Text>Cart is currently not available!</Text>
      </View> */}
      <View 
        style={{
          display: 'flex', 
          marginBottom: 10,
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          width: '100%'
        }}>
        <AddToCartButton></AddToCartButton>
      </View>
      
    </ScrollView>
  );
}

const style = StyleSheet.create({
  
});
