import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';


import {combineReducers} from '@reduxjs/toolkit';

import postSlice from './services/posts/reducer';

export const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};

export const rootReducer = combineReducers({
  post: postSlice,
});
const persistConfig = {
  key: 'RootApp',
  version: 1,
  storage: AsyncStorage,

};

export const persistedReducer = persistReducer(persistConfig, rootReducer);