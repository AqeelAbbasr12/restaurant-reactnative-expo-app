import { useState } from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { Badge, IconButton, Snackbar, Portal } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { router } from "expo-router";

export const MenuCartIcon = ({count, iconColor, badgeColor, badgeTextColor}) => {
  const { w } = useResponsiveScreen();
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => {
    setVisible(!visible)
    
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: w(3),
      }}
    >
      {count > 0 ? (
        <TouchableOpacity 
          onPress={() => router.navigate('/cart')}
        >
        <IconButton
            icon="cart-outline"
            size={30}
            iconColor={iconColor}
            style={{paddingLeft: 5, margin: 0}}
          />
          
            <Badge style={{ position: 'absolute', right: 0, top: 0, backgroundColor: badgeColor, color: badgeTextColor, fontSize: 12 }}>
              {count}
            </Badge>
        </TouchableOpacity>
      ) : (
        <>
          <IconButton
            icon="cart-outline"
            size={30}
            iconColor={iconColor}
            style={{paddingLeft: 5, margin: 0}}
            onPress={onToggleSnackBar}
          />
          
        </>
      )}
      <Portal>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          color="white"
          textAlign="center"
          wrapperStyle={{top: 0, left: 0, textAlign: 'center', color: "white", textAlign: 'center'}}
          style={{backgroundColor: "red"}}
          theme={{ colors: { onSurface: '#ffffff' } }}
          rippleColor="white"
          >
          Cart is empty.
        </Snackbar>
        </Portal>
    </View>
  );
};
