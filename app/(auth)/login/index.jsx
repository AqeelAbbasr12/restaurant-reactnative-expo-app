import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";

export default function Page() {
  return (
    <Screen>
      <Text>Login Page</Text>
      <Link href={"/users"}>Go to user</Link>
    </Screen>
  );
}
