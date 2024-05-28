import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './auth/authSlice';
import drawerReducer from './drawer/drawerSlice';
import menuReducer from './menu/menuSlice';
import orderReducer from './order/orderSlice';
import profileReducer from './profile/profileSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,  
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedDrawerReducer = persistReducer(persistConfig, drawerReducer);
const persistedMenuReducer = persistReducer(persistConfig, menuReducer);
const persistedOrderReducer = persistReducer(persistConfig, orderReducer);
const persistedProfileReducer = persistReducer(persistConfig, profileReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        drawer: persistedDrawerReducer,
        menu: persistedMenuReducer,
        order: persistedOrderReducer,
        profile: persistedProfileReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
 