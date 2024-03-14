import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { customTheme } from "@/constants/theme";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={customTheme}>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="users/index" />
        </Stack>
      </PaperProvider>
    </Provider>
  );
};

export default RootLayout;
