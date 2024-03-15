import * as React from "react";
import { Button } from "react-native-paper";

const ButtonComponent = ({mode, label, backgroundColor, textColor, labelStyle,  style, onPress, disabled}) => (
  <Button mode={mode} onPress={onPress} buttonColor={backgroundColor} style={style} textColor={textColor} labelStyle={labelStyle}  disabled={disabled}>
    {label}
  </Button>
);

export default ButtonComponent;
