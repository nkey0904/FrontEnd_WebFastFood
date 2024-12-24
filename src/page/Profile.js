import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/updateInfoSlice';
import { FaUserCircle, FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams(); // Lấy userId từ URL
  console.log(userId);
  
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.updateif);

  useEffect(() => {
    if (!userId) {
      console.error("userId is undefined or null");
      return;
    }
  
    fetch(`http://localhost:8080/get-customer-info/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        dispatch(setUserInfo(data));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.message);
      });
  }, [userId, dispatch]);
  
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 pb-20">
      <div className="flex-grow w-full max-w-3xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="relative">
          <div className="h-44 bg-gradient-to-r from-orange-200 via-rose-300 to-orange-200"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          </div>
        </div>

        <div className="text-center mt-20 px-6 pt-0 pb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">
            {userData.fullName || 'N/A'}
          </h2>
          <p className="text-lg text-gray-600 italic">{userData.email || 'N/A'}</p>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-2xl font-bold text-slate-500 mb-4 text-center">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaUserCircle className="text-blue-500 text-2xl" />
              <div>
                <strong>Full Name:</strong>
                <p>{userData.fullName || 'N/A'}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <strong>Email:</strong>
                <p>{userData.email || 'N/A'}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaPhone className="text-blue-500 text-2xl" />
              <div>
                <strong>Phone:</strong>
                <p>{userData.phone || 'N/A'}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaBirthdayCake className="text-blue-500 text-2xl" />
              <div>
                <strong>Date of Birth:</strong>
                <p>{userData.dob ? new Date(userData.dob).toLocaleDateString() : 'N/A'}</p>
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
            <div>
              <strong>Address:</strong>
              <p>{userData.address || 'No address provided'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
