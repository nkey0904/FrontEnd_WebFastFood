import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { resetCart } from '../redux/productSlide';

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetCart());   
    toast.success("Payment Successful!"); 
    setTimeout(() => {
      navigate("/");  
    }, 4000);
    
  }, [dispatch, navigate]);
  return (
    <div className='bg-green-200 w-full max-w-md m-auto h-36 flex justify-center items-center font-semibold text-lg'>
        <p>Payment is Successfully</p>
    </div>
  )
}

export default Success