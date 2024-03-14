import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Login Page</Text>
      <Link href={"/users"}>Go to user</Link>
    </View>
  );
}
