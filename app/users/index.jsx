import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counter/counterSlice";
import { Button } from "react-native-paper";

export default function Page() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>User</Text>
        <Link href={"/"}>Go to home</Link>
      </View>

      <View>
        <Button mode="contained" onPress={() => dispatch(increment())}>
          +
        </Button>
        <Text>{count}</Text>
        <Button mode="contained" onPress={() => dispatch(decrement())}>
          -
        </Button>
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
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
