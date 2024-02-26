import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      // console.log('logged out')
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice;