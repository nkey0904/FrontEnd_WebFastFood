import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserRedux } from '../redux/userSlice';
import { toast } from 'react-hot-toast'; // Đảm bảo toast đã được import

const UpdateIF = () => {
  const user = useSelector((state) => state.user); // Lấy thông tin từ Redux
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateUserRedux(formData)); // Gửi dữ liệu mới lên Redux
    toast.success('Thông tin người dùng đã được cập nhật!'); // Hiển thị thông báo thành công
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Cập nhật thông tin người dùng</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">Tên</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Họ</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Số điện thoại</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={formData.phone || ''}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">Địa chỉ</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address || ''}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={handleUpdate}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateIF;