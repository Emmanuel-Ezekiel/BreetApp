import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import auth from '../features/authSlice/index';
import app from '../features/appSlice/index'
import {combineReducers} from 'redux';
import {persistStore, persistReducer,   Persistor,} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const combinedReducers = combineReducers({
  auth,
  app
});

const persistConfig = {
  key: '@breet:store',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  // you might not have to worry about middleware, thunk is already provided by default for redux toolkit configureStore
  // https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: false,
});
export const persistor: Persistor = persistStore(store);
// const persistedNotify = persistor.getState().notify;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
