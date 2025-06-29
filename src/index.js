import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/login";
import Newproduct from "./page/Newproduct";
import NewDiscount from "./page/NewDiscount";
import Signup from "./page/Signup";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Cart from "./page/Cart";
import Success from "./page/Success";
import Cancel from "./page/Cancel";
import ScrollToTop from "./utility/scrollToTop";
import VerifyOtp from "./page/VerifyOtp";
import ForgotPassword from "./page/ForgotPassword";
import ResetPassword from "./page/ResetPassword";
import UpdateIF from "./page/UpdateIF";
import Profile from "./page/Profile"
import PaymentResult from "./page/PaymentResult";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path='menu' element = {<Menu/>}/> */}
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<Newproduct />} />
      <Route path="newdiscount" element={<NewDiscount />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Cancel />} />
      <Route path="verifyotp" element={<VerifyOtp />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path ="/profile/:userId" element = {<Profile/>} />
      <Route path="updateif" element={<UpdateIF />} />
      <Route path="payment-result" element={<PaymentResult />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<ScrollToTop />} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
