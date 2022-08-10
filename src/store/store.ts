import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { combineReducers, configureStore} from '@reduxjs/toolkit';

import postSlice from './services/posts/reducer';

const serializableCheck= {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
}

export const rootReducer = combineReducers({
  post: postSlice
});


export const store = configureStore({
  reducer:rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware({
        serializableCheck
      }).concat(createDebugger());
    }
    return getDefaultMiddleware({
      serializableCheck
    });
  },

});

const persistConfig = {
  key: 'RootApp',
  version: 1,
  storage: AsyncStorage,
  whiteList: ['post'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

