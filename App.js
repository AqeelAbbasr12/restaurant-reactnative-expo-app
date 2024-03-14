import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';

import Card from './components/Card';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/nature-bg.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#25292e',

  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
