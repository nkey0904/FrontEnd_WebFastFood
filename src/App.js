<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./component/Footer";
=======
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './component/Footer';
import ScrollToTop from './utility/scrollToTop';
>>>>>>> 1fb8748e2e2fde8452b69ed545684ec8fca383f4

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, []);
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <ScrollToTop />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
