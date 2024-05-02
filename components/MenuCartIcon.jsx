import { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { Badge, IconButton, Snackbar, Portal } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { router } from "expo-router";
import SnackBar from 'react-native-snackbar-component';

export const MenuCartIcon = ({count, iconColor, badgeColor, badgeTextColor}) => {
  const { w } = useResponsiveScreen();
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => {
    setVisible(prevVisible => !prevVisible);
  };

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [visible]);

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
        <SnackBar 
          visible={visible} 
          textMessage="Cart is empty!" 
          autoHidingTime={3000}
          containerStyle={{position: 'absolute',top: '100px'}}
          messageStyle={{fontSize: 20}}
          backgroundColor="red"
          position="top"
        />
        </Portal>
    </View>
  );
};
