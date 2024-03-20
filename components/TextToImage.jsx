import React from "react";
import Svg, { Text } from "react-native-svg";

const TextToImage = ({ text }) => {
  return (
    <Svg width="100" height="100">
      <Text
        x="10"
        y="50"
        fill="black"
        fontSize="16"
        transform="rotate(-90, 0, 0)"
      >
        {text}
      </Text>
    </Svg>
  );
};

export default TextToImage;
