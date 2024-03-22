import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import { customTheme } from "@/utils/theme";
import DaiyDeliLogo from "../assets/images/daily-deli.png";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "@/store/drawer/drawerSlice";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";

export const Drawer = () => {
  const drawerPosition = useState(new Animated.Value(0))[0];
  const overlayOpacity = useState(new Animated.Value(0))[0];
  const { w, h } = useResponsiveScreen();
  const drawer = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    animateDrawer(drawer);
  }, [drawer]);

  const animateDrawer = (isOpen) => {
    Animated.parallel([
      Animated.timing(drawerPosition, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(overlayOpacity, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const drawerTranslateX = drawerPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [-w(85), 0],
  });

  return (
    <View style={{ flex: 1, zIndex: 999 }}>
      {drawer && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            dispatch(setDrawer(false));
          }}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            height: h(100),
            width: "100%",
            zIndex: -1,
          }}
        ></TouchableOpacity>
      )}
      <Animated.View
        style={{
          transform: [{ translateX: drawerTranslateX }],
          flexDirection: "row",
          backgroundColor: "red",
          width: w(85),
          position: "absolute",
          top: 0,
          bottom: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: w(85),
            height: h(100),
            shadowColor: "#171717",
          }}
        >
          <View
            style={{
              height: h(18),
              backgroundColor: customTheme.colors.primary,
              borderBottomRightRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image style={{ width: 150, height: 130 }} source={DaiyDeliLogo} />
          </View>

          <Link href="/login" onPress={() => dispatch(setDrawer(false))}>
            Go to Login
          </Link>
          <Link href="/register" onPress={() => dispatch(setDrawer(false))}>
            Go to Signup
          </Link>
          <Link href="/menu" onPress={() => dispatch(setDrawer(false))}>
            Go to Menu
          </Link>
          <Link href="/changePassword" onPress={() => dispatch(setDrawer(false))}>
            Change Password
          </Link>
        </View>
      </Animated.View>
    </View>
  );
};
