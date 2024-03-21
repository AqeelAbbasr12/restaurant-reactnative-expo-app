import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';

export const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(1); 

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '25%'}}>
        <IconButton
          icon="minus"
          onPress={decrementQuantity}
          disabled={quantity === 0} 
          containerColor="white"
          iconColor="black"
          size={20}
        />
        <Text style={{color: 'black',fontSize: 15}}>{quantity}</Text>
        <IconButton 
          icon="plus"
          containerColor="white"
          iconColor="black"
          size={20}
          onPress={incrementQuantity} />
      </View>
      <View style={{width: '65%'}}>
        <Button mode="contained" style={{borderTopLeftRadius: 50, borderBottomLeftRadius: 50, width: '100%'}} labelStyle={{color: '#fff', textTransform: 'none'}} onPress={() => {alert('added to cart successfully')}}>
          Add to Cart
        </Button>
      </View>
    </View>
  );
};
