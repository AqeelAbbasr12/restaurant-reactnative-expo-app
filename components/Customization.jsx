import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { customTheme } from "@/utils/theme";
import { Heading } from "@/components/Heading";

export const Customization = ({ customization, selectedOption, onOptionSelect }) => {
  const { w, h, f } = useResponsiveScreen();

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Heading text={customization.name} alignStyle={{ fontSize: f(1.8) }}></Heading>
        {/* <Text style={{ fontSize: f(1.3), color: 'black'}}>Choose only 1 (Required)</Text> */}
      </View>
      {customization.options.map(option => (
        <View key={option.id} style={styles.optionContainer}>
          <RadioButton
            value={option.id}
            status={selectedOption?.id === option.id ? 'checked' : 'unchecked'}
            onPress={() => onOptionSelect(customization.id, option)} color={customTheme.colors.primary} uncheckedColor={customTheme.colors.primary}
          />
          <Text style={styles.optionName} onPress={() => onOptionSelect(customization.id, option)}>{option.name}</Text>
          <Text style={styles.optionPrice}>AED {option.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  optionName: {
    marginLeft: 8,
    flex: 1,
  },
  optionPrice: {
    marginLeft: 8,
  },
});

