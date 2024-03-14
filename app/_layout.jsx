import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="users/index" />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
