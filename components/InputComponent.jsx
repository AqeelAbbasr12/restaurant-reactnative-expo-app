import  React, { useState} from 'react';
import { View  } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const InputComponent = ({ mode, label, value, placeholder, onChangeText, error, helperText, secureTextEntry, style, iconStyle, placeholderTextColor }) => {
  const { w, h } = useResponsiveScreen();
  const [secureText, setSecureText] = useState(secureTextEntry);
  
  const toggleSecureEntry = () => {
    setSecureText(!secureText);
  };
  console.log('secure', secureTextEntry);
  return (
    <View style={{ marginTop: h(2) }}>
      <TextInput
        mode={mode}
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        placeholderTextColor='black'
        textColor='black'
        style={style}
        outlineColor='lightgray'
        right={
          secureTextEntry ? 
          (<TextInput.Icon 
            icon={secureText ? "eye" : "eye-off"} 
            color="#db7a00"
            onPress={toggleSecureEntry} 
            style={iconStyle} 
          />) : null
        }
      />
      {error && <HelperText type="error">{helperText}</HelperText>}
    </View>
  );
};
