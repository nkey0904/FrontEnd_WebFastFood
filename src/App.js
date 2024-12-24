import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch } from "react-redux";
import Footer from "./component/Footer";
import ScrollToTop from "./utility/scrollToTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/product`
        );
        const resData = await res.json();
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <ScrollToTop />
          {/* Outlet sẽ hiển thị các thành phần con */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
