import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";

const SideItems = () => {
  return (
    <View>
      <Text>
        <Icon name="menu" size={30} color={customTheme.colors.iconColorWhite} />
      </Text>
    </View>
  );
};

export default function HomePage() {
  const { w } = useResponsiveScreen();

  return (
    <Screen SideItems={SideItems}>
      <Header>
        <Heading text="Welcome Back!" />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: w(3),
          }}
        >
          <Icon
            name="cart-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
          />
          <Icon
            name="bell-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
          />
        </View>
      </Header>
      <Link href={"/users"}>Go to user</Link>
    </Screen>
  );
}
