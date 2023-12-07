import {createSlice} from '@reduxjs/toolkit';
import {authStoreInitialState} from '@redux/initialSlices';

type State = {
  isAuthenticated: boolean;
};

const initialState: State = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authStoreInitialState,
  reducers: {
    setAuthenticated: state => {
      state.isAuthenticated = true;
    },
  },
});

const {reducer, actions} = authSlice;

export const {setAuthenticated} = actions;

export default reducer;