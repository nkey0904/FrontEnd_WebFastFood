import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const email = location.state?.email; // Nhận email từ state
  if (!email) {
    navigate('/signup'); // Nếu không có email, quay lại trang signup
  }

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }

    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const dataRes = await fetchData.json();
    toast(dataRes.message);

    if (fetchData.status === 200) {
      navigate('../login'); // Chuyển đến trang chính nếu xác thực thành công
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Verify OTP</h1>

        <p className="text-center mt-2 text-gray-500">
          Enter the OTP sent to your email: <b>{email}</b>
        </p>

        <input
          type="text"
          className="mt-4 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          onClick={handleVerifyOtp}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
