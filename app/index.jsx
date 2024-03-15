import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={"/users"}>Go to user</Link>
        <Link href={"/login"}>Go to login</Link>
        <Link href={"/register"}>Go to register</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  cardComponentContainer: {
    boxShadow: 'rgb(161, 161, 161) 1px 2px 7px 1px',
    borderRadius: 25,
    backgroundImage: require('../assets/images/fire.png'),
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
