import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { customTheme } from "@/utils/theme";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Route auth
const RouteAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth.value);
  useEffect(() => {
    if (!auth) {
      router.replace("/login");
    }
  }, [auth]);

  return children;
};

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Thin": require("@/assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={customTheme}>
        <RouteAuth>
          <StatusBar translucent hidden />
          <Stack screenOptions={{ headerShown: false }} />
        </RouteAuth>
      </PaperProvider>
    </Provider>
  );
};

export default RootLayout;
