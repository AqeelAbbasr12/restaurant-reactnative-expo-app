import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { customTheme } from "@/utils/theme";

const SideItems = () => {
  return (
    <View>
      <Text>
        <Icon name="menu" size={30} color={customTheme.colors.iconColor} />
      </Text>
    </View>
  );
};

export default function Page() {
  return (
    <Screen SideItems={SideItems}>
      <Text>Login Page</Text>
      <Link href={"/users"}>Go to user</Link>
    </Screen>
  );
}
