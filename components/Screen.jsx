import { View } from "react-native";
import { customTheme } from "@/utils/theme";

export function Screen({ children }) {
  return (
    <View style={{ backgroundColor: customTheme.colors.primary, flex: 1 }}>
      {children}
    </View>
  );
}
