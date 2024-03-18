import { View } from "react-native";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const HomeComponent = ({ children }) => {
  const { w } = useResponsiveScreen();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'linear-gradient(158deg, rgba(83, 83, 83, 1) 0%, rgba(44, 44, 44, 1) 83%)',
        paddingVertical: w(5),
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        paddingHorizontal: w(5),
        marginVertical: w(5),
      }}
    >
      {children}
    </View>
  );
};
