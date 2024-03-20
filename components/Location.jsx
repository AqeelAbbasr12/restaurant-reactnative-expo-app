import { View, Image } from "react-native";
import { useState } from "react";
import { customTheme } from "@/utils/theme";
import DaiyDeliLogo from "@/assets/images/daily-deli.png";
import { TextInput } from "react-native-paper";

export const Location = () => {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: customTheme.colors.primary,
      }}
    >
      <Image style={{ width: 200, height: 200 }} source={DaiyDeliLogo} />
      <TextInput
        label="select"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{ width: 200 }}
      />
    </View>
  );
};
