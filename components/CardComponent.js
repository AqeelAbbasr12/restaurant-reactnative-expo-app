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
      <Image source={require('../assets/images/fire.png')} style={styles.backgroundImage} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F29434',
    width: 185,
    borderRadius: 25,
    // elevation: 5,
    shadowColor: 'black',
    boxShadow: 'rgb(161, 161, 161) 1px 2px 7px 1px',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 25,
  },
  content: {
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    // width: 80,
    // height: 30,
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
    right: -45,
    top: -5,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    resizeMode: 'contain',
  },
  buttonLabel: {
    fontSize: 10,
    marginVertical: 0,
    marginHorizontal: 7,
    fontWeight: 800,
    lineHeight: 23,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.4,
    bottom: 0,
    left: -5,
    width: '55%', // Adjust as needed
    height: '55%', // Adjust as needed
  },
});

export default CardComponent;
