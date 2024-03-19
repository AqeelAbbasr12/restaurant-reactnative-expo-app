import { View, Text } from "react-native";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export function Screen({ children, SideItems }) {
  const { w, h } = useResponsiveScreen();
  return (
    <View
      style={{
        backgroundColor: customTheme.colors.primary,
        flex: 1,
      }}
    >
      <View
        style={{
          width: w(17),
          flex: 1,
          alignItems: "center",
          paddingTop: h(6),
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
          height: "100%",
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          paddingTop: h(6),
          paddingLeft: w(7),
        }}
      >
        {children}
      </View>
    </View>
  );
}
