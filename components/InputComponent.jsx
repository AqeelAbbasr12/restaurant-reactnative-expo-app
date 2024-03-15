import  React, { useState} from 'react';
import { View, TouchableOpacity  } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputComponent = ({ mode, label, value, placeholder, onChangeText, error, helperText, secureTextEntry, style, iconStyle, placeholderTextColor }) => {
  const [secureText, setSecureText] = useState(secureTextEntry);
  
  const toggleSecureEntry = () => {
    setSecureText(!secureText);
  };
  console.log('secure', secureTextEntry);
  return (
    <View style={{ marginVertical: 8 }}>
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

export default InputComponent;
