import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from './operationsAuth';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;

      return state;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      return state;
    });
    builder.addCase(logOutUser.fulfilled, state => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      return state;
    });
    builder.addCase(getCurrentUser.pending, state => {
      state.isRefreshing = true;
      return state;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      return state;
    });
    builder.addCase(getCurrentUser.rejected, state => {
      state.isRefreshing = false;
      return state;
    });
  },
});

export const authReducer = authSlice.reducer;
