import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';


const CardComponent = () => {
  const source = require('../assets/images/burger.png');
  const handlePress = () => {
    console.log('Button pressed');
    // Add your button press logic here
  };

  return (
    <Card style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')} textColor="#F29434" uppercase 
        labelStyle={styles.buttonLabel}
        >Top Seller</Button>
      </View>
      <Card.Content>
        <Text style={styles.title}>DD Smokey House</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F29434',
    width: 200,
    height: 250,
    borderRadius: 25,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    width: 80,
    height: 30,
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    colo: '#F29434',
    textTransform: 'uppercase',
    

  },
  imageContainer:{
    width: 200,
    height: 100,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    right: -40,
    top: -5,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    resizeMode: 'cover',
  },
  buttonLabel: {
    fontSize: 10,
    marginHorizontal: 0,
    marginVertical: 5,
    marginHorizontal: 5,
  }
});

export default CardComponent;
