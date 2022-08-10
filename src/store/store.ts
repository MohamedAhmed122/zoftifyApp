import {persistStore} from 'reduxjs-toolkit-persist';

import {configureStore} from '@reduxjs/toolkit';
import {persistedReducer, serializableCheck} from './rootReducer';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware({
        serializableCheck,
      }).concat(createDebugger());
    }
    return getDefaultMiddleware({
      serializableCheck,
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
