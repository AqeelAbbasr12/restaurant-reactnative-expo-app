import { MD3LightTheme as DefaultTheme, MD2DarkTheme } from 'react-native-paper';

export const customTheme = {
    ...DefaultTheme,
    ...MD2DarkTheme,
    colors: {
        ...DefaultTheme.colors,
        ...MD2DarkTheme.colors,
        primary: '#db7a00',
        secondary: 'yellow',
    },
};