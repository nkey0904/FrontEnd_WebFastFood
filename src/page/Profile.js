import React from 'react';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Profile = () => {
  const userData = useSelector((state) => state.user);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 pb-20"> {/* Thêm khoảng cách bên dưới */}
      {/* Nội dung Profile */}
      <div className="flex-grow w-full max-w-3xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header ảnh */}
        <div className="relative">
          <div className="h-44 bg-gradient-to-r from-orange-200 via-rose-300 to-orange-200"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            <img
              src={userData.image || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Thông tin cá nhân */}
        <div className="text-center mt-20 px-6 pt-0 pb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-lg text-gray-600 italic">{userData.email}</p>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-2xl font-bold text-slate-500 mb-4 text-center">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaUserCircle className="text-blue-500 text-2xl" />
              <div>
                <strong>First Name:</strong>
                <p>{userData.firstName}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaUserCircle className="text-blue-500 text-2xl" />
              <div>
                <strong>Last Name:</strong>
                <p>{userData.lastName}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <strong>Email:</strong>
                <p>{userData.email}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaPhone className="text-blue-500 text-2xl" />
              <div>
                <strong>Phone:</strong>
                <p>{userData.phone || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-2xl font-bold text-slate-500 mb-4 text-center">
            Address
          </h3>
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 rounded-lg shadow-md flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <p>{userData.address || 'No address provided'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;