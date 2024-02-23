import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import cartSlice, { cartLocalStorageMiddleware } from './cart-slice';
import userSlice from './user-slice';

const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
      user: userSlice.reducer
    },
    middleware: [...getDefaultMiddleware(), cartLocalStorageMiddleware]
  });

export default store;