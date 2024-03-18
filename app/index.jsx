import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";

const SideItems = () => {
  const { h, f } = useResponsiveScreen();

  const sideitems = [
    "Home",
    "Home",
    "Home",
    "Home",
    "Home",
    "Home",
    "Home",
    "Home",
  ];

  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text>
          <Icon
            name="menu"
            size={30}
            color={customTheme.colors.iconColorWhite}
          />
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate={"normal"}
        style={{
          ...style.SideBarTextContainer,
          marginTop: h(5),
          marginBottom: h(4),
        }}
      >
        {sideitems.map((sideitem, index) => (
          <Text
            key={index}
            style={{
              ...style.SideBarText,
              marginVertical: h(6),
              fontSize: f(2.8),
            }}
          >
            {sideitem.toLocaleUpperCase()}
          </Text>
        ))}
      </ScrollView>
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

const style = StyleSheet.create({
  SideBarText: {
    transform: [{ rotate: "270deg" }],
    fontWeight: "900",
    color: "white",
  },
  SideBarTextContainer: {
    display: "flex",
    flex: 1,
  },
});
