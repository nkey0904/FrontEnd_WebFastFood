import React, { useRef } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import AllProduct from "../component/AllProduct";
import { Link } from "react-router-dom";

const Home = () => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const productData = useSelector((state) => state.product.productList);

  const productDataCopy = [...productData];
  const homeProductCartList = shuffleArray(productDataCopy).slice(0, 6);
  const homeProductCartListBurger = productData.filter(
    (e1) => e1.category === "burger",
    []
  );

  const loadingArray = new Array(3).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  //filter data display

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            {" "}
            The Fasted Delivery in{" "}
            <span className="text-red-600 text-">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            <Link to={"menu/67191d28b840d3988a9efd5c"}>Order Now</Link>
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((e1) => {
                return (
                  <HomeCard
                    key={e1._id}
                    id={e1._id}
                    image={e1.image}
                    name={e1.name}
                    price={e1.price}
                    category={e1.category}
                  />
                );
              })
            : loadingArray.map((e1, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Delicious burger for you!
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg rounded p-1"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg rounded p-1"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListBurger[0]
            ? homeProductCartListBurger.map((e1) => {
                return (
                  <CardFeature
                    key={e1._id}
                    name={e1.name}
                    id={e1._id}
                    category={e1.category}
                    price={e1.price}
                    image={e1.image}
                  />
                );
              })
            : loadingArrayFeature.map((e1, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
