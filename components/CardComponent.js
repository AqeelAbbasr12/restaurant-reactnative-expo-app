import * as React from 'react';
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';


const CardComponent = ({imageSource, title, buttonText, buttonTextColor, onPress}) => {

  return (
    <View style={styles.cardComponentContainer}>
      <Card style={styles.container}>
        
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="contained" onPress={onPress} textColor={buttonTextColor} uppercase 
          labelStyle={styles.buttonLabel}
          >{buttonText}</Button>
        </View>
        <Card.Content>
          <Text style={styles.title}>{title}</Text>
        </Card.Content>
        <Image source={require('../assets/images/fire.png')} style={styles.backgroundImage} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardComponentContainer: {
    boxShadow: 'rgb(161, 161, 161) 1px 2px 7px 1px',
    borderRadius: 25,
    width: 185,
  },
  container: {
    backgroundColor: '#F29434',
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
    paddingBottom: 30,
  },
  content: {
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    colo: '#F29434',
    textTransform: 'uppercase',
    

  },
  imageContainer:{
    width: 200,
    height: 115,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    right: -45,
    top: -9,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    resizeMode: 'contain',
    filter: 'brightness(0.85)',  
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
    opacity: 0.2,
    bottom: 0,
    left: -5,
    width: '55%', 
    height: '55%', 
    filter: 'contrast(0.6)',
  },
});

export default CardComponent;