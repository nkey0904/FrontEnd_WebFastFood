import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import productSlideReducer from './productSlide';

// export const store = configureStore({
//   reducer: {
//     user: userSliceReducer,
//     product: productSlideReducer,
//   },
// });
// 🚀 1. Load cart từ localStorage
const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cartItem');
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    return [];
  }
};

// 🚀 2. Tạo trạng thái khởi tạo từ localStorage
const preloadedState = {
  product: {
    productList: [],
    cartItem: loadCartFromLocalStorage(),
  },
};

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSlideReducer,
  },
  preloadedState, // ← Gán lại cart khi Redux khởi động
});

// 🚀 3. Lưu giỏ hàng mỗi khi Redux state thay đổi
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartItem', JSON.stringify(state.product.cartItem));
});
