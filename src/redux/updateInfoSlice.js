import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  dob: '',
};

const updateInfoSlice = createSlice({
  name: 'updateif',
  initialState,
  reducers: {
    setUpdateInfo: (state, action) => {
      state._id = action.payload._id;  // Lưu id_ của người dùng cập nhật
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.dob = action.payload.dob;
    },
    setUserInfo: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.dob = action.payload.dob;
    },
  },
});

export const { setUserInfo } = updateInfoSlice.actions;
export default updateInfoSlice.reducer;
