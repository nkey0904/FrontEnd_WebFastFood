import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import productSlideReducer from './productSlide';
import updateInfoReducer from './updateInfoSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSlideReducer,
    updateif: updateInfoReducer,
  },
});
