import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { router } from "expo-router";

export const AddToCartButton = ({buttonLabel, leftContentType, buttonStyle, labelStyle, buttonType, onButtonPress, decrementQuantity, incrementQuantity, quantity, totalPrice}) => {
  const { w,h,f } = useResponsiveScreen();
  

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      { leftContentType === 'price' ?
      <View style={{width: '25%', paddingLeft: h(2.4)}}>
        <Text style={{color: '#767676', fontSize: f(1.6), marginBottom: 6}}>Total</Text>
        <Text style={{color: customTheme.colors.primary, fontWeight: '700', fontSize: f(1.7)}}>PKR {totalPrice}</Text>
      </View>
      :   
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
      }
      <View style={{width: '65%'}}>
        { buttonType === 'link' ? 
          <Button mode="contained" style={[buttonStyle, {borderTopLeftRadius: 50, borderBottomLeftRadius: 50, width: '100%'}]} labelStyle={[labelStyle, {color: '#fff'}]} 
            onPress={() => router.navigate('/checkout')}
            >
              {buttonLabel}
          </Button>
        : 
        <Button mode="contained" 
          style={[buttonStyle, {borderTopLeftRadius: 50, borderBottomLeftRadius: 50, width: '100%'}]} 
          labelStyle={[labelStyle, {color: '#fff'}]}
          onPress={onButtonPress}>
          {buttonLabel}
        </Button>
        }
      </View>
    </View>
  );
};
