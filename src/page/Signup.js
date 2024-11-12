import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import {toast} from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image:""
  });
  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((preve)=>{
      return {
        ...preve,
        [name]: value
      }
    })
  };

  const handleUploadProfileImage = async (e)=>{
    const data = await ImagetoBase64(e.target.files[0]);
    setData((preve)=>{
      return {
       ...preve,
        image: data
      };
    });
  };
console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const{firstName, email, password, confirmPassword} = data
    if(firstName && email && password && confirmPassword) {
      if(password === confirmPassword) {

        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body : JSON.stringify(data),
        })

        const dataRes = await fetchData.json()
        // alert(dataRes.message);
        toast(dataRes.message);
        if(dataRes.alert){
          navigate("/login")
        }
        
      }
      else {
        alert("Passwords do not match")
      }
    }
    else {
      alert("Please enter required fields")
    }
  }
  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer">
          <img src={data.image ? data.image : loginSignupImage} className="w-full h-full" />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id = "profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
          
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="">
            First Name
          </label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            id="password"
            name="password"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.password}
            onChange={handleOnChange}
          />

          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type={"password"}
            id="confirmpassword"
            name="confirmPassword"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.confirmPassword}
            onChange={handleOnChange}
          />

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
