import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SplashScreen as CustomSplashScreen } from "@/components/SplashScreen";
import { Stack } from "expo-router";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { customTheme } from "@/utils/theme";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ToastProvider } from 'react-native-toast-notifications'

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Thin": require("@/assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const delay = 3000;
    const hideSplashScreen = async () => {
      setTimeout(async () => {
        if (loaded) {
          await SplashScreen.hideAsync();
          setShowSplash(false);
        }
      }, delay);
    };
    hideSplashScreen();
  }, [loaded]);

  if (!loaded || showSplash) {
    return <CustomSplashScreen />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <ToastProvider>
          <PaperProvider theme={customTheme}>
            <StatusBar translucent hidden />
            <Stack screenOptions={{ headerShown: false }} />
          </PaperProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
