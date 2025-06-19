import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginRedux } from '../redux/userSlice';
import loginSignupImage from '../assest/login-animation.gif';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    otp: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitStep1 = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      setLoading(true);
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login-step1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      toast(result.message);
      if (result.alert) {
        setOtpSent(true);
      }
      setLoading(false);
    } else {
      alert('Please enter required fields');
    }
  };

  const handleSubmitStep2 = async (e) => {
    e.preventDefault();
    const { email, otp } = data;
    if (email && otp) {
      setLoading(true);
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login-step2`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const result = await res.json();
      toast(result.message);
      if (result.alert) {
        dispatch(loginRedux(result));
        navigate('/');
      }
      setLoading(false);
    } else {
      alert('Please enter OTP');
    }
  };
  
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex m-auto">
          <img src={loginSignupImage} alt="login" className="w-full" />
        </div>
        <form
          className="w-full py-3 flex flex-col"
          onSubmit={otpSent ? handleSubmitStep2 : handleSubmitStep1}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
            disabled={otpSent}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.password}
            onChange={handleOnChange}
            disabled={otpSent}
          />

          {!otpSent && (
            <div className="flex justify-end">
              <Link to="/forgotpassword" className="text-sm text-blue-500 hover:text-blue-600">
                Quên mật khẩu?
              </Link>
            </div>
          )}

          {otpSent && (
            <>
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.otp}
                onChange={handleOnChange}
              />
            </>
          )}

          <button
            className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
            disabled={loading}
          >
            {otpSent ? 'Verify OTP' : 'Login'}
          </button>
        </form>

        {!otpSent && (
          <p className="text-left text-sm mt-2">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-500 underline">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;