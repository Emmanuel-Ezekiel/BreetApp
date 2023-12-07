import {createSlice} from '@reduxjs/toolkit';
import {appStoreInitialState} from '@redux/initialSlices';

const authSlice = createSlice({
  name: 'app', // name of reducer
  initialState: appStoreInitialState,
  reducers: {
    initializingStart: (state) => {
      state.isInitializing = true;
    },
    initializingDone: (state) => {
      state.isInitializing = false;
    },
  },
});

const {reducer, actions} = authSlice;

export const {initializingStart, initializingDone} = actions;

export default reducer;
