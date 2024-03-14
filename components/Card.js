import { StyleSheet, Image, View } from 'react-native';

import Button from './Button';
import ImageViewer from './ImageViewer';
import TextComponent from './Text';

const source = require('../assets/images/burger.png');

export default function Card({ placeholderImageSource }) {

  const handlePress = () => {
    console.log('Button pressed');
    // Add your button press logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={source} imageStyle={styles.image} />
      </View>
      <View style={styles.footerContainer}>
      
        <Button label="Top Seller" 
          onPress={handlePress}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'end', alignItems: 'center' }}>
        <TextComponent style={{ color: 'white', fontWeight: 'bold' }}>
          DD Smokey House
        </TextComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F29434',
    width: 130,
    height: 170,
    borderRadius: 25,
    marginTop: 50,
  },
  imageContainer: {
    position: 'relative',
    height: 80,
    width: 130,
  },
  image: {
    position: 'absolute',
    top: -3,
    right: -25,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    color: '#F29434',
    fontSize: 10,
    textTransform: 'uppercase',
  },
});
