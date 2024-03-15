import { View } from "react-native";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export function Screen({ children }) {
  const { w, h } = useResponsiveScreen();
  return (
    <View style={{ backgroundColor: customTheme.colors.primary, flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          right: w(0),
          width: w(83),
          height: h(100),
          borderTopLeftRadius: 50,
        }}
      >
        {children}
      </View>
    </View>
  );
}
