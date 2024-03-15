import { View } from "react-native";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const Header = ({ children }) => {
  const { w } = useResponsiveScreen();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: w(7),
      }}
    >
      {children}
    </View>
  );
};
