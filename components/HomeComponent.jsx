import { View } from "react-native";
import { Link } from "expo-router";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const HomeComponent = ({ mainLabel, subLabel }) => {
  const { w, f } = useResponsiveScreen();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'rgba(61, 61, 61) 0%, rgba(44, 44, 44, 1) 83%)',
        paddingVertical: w(5.3),
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        paddingHorizontal: w(5),
        marginVertical: w(3),
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 4, 
        elevation: 5,
        gradient: true
      }}
    >

      <View style={{display: 'block'}}>
        <Text style={{ 
          color: '#f29434', 
          textTransform: 'uppercase',
          fontSize: f(2.5), 
          fontWeight: 800}}>
            {mainLabel}<Text style={{
              color: customTheme.colors.textWhite, 
              textTransform: 'uppercase', 
              fontSize: f(2.5), 
              fontWeight: 800}}> {subLabel}</Text></Text>
        
      </View>
        <Icon name="chevron-right" size={f(3)} color={customTheme.colors.iconColorWhite}></Icon>
    </View>
  );
};
