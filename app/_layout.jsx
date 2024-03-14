import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { customTheme } from "@/constants/theme";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import { useEffect } from "react";

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
  return (
    <Provider store={store}>
      <PaperProvider theme={customTheme}>
        <RouteAuth>
          <Stack screenOptions={{ headerShown: false }} />
        </RouteAuth>
      </PaperProvider>
    </Provider>
  );
};

export default RootLayout;
