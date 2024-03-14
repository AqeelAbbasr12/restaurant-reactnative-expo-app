import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import useScreenDimensions from "@/hooks/useScreenDimensions";
import { Provider as PaperProvider } from 'react-native-paper';
import CardComponent from '../components/CardComponent';

export default function Page() {
  const { screenWidth, screenHeight } = useScreenDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <PaperProvider>
          <View>
            <CardComponent ></CardComponent>
          </View>


        </PaperProvider>
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
});
