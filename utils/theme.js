import { MD3LightTheme as DefaultTheme, MD2DarkTheme } from 'react-native-paper';

export const customTheme = {
    ...DefaultTheme,
    ...MD2DarkTheme,
    colors: {
        ...DefaultTheme.colors,
        ...MD2DarkTheme.colors,
        primary: '#281612',
        secondary: 'yellow',
        textWhite: 'white',
        textDark: '#333232',
        iconColorWhite: 'white',
        iconColorDark: '#333232',
    },
};
