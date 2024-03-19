import { View, Text } from "react-native";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export function Screen({ children, SideItems, customStyle }) {
  const { w, h } = useResponsiveScreen();
  return (
    <View
      style={{
        backgroundColor: customTheme.colors.primary,
        flex: 1,
        paddingTop: h(6),
      }}
    >
      <View
        style={{
          width: w(17),
          flex: 1,
          alignItems: "center",
        }}
      >
        <SideItems />
      </View>
      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          right: w(0),
          width: w(83),
          height: h(100),
          borderTopLeftRadius: 50,
          paddingTop: h(6),
          paddingLeft: w(7),
          ...customStyle
        }}
      >
        {children}
      </View>
    </View>
  );
}
