import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";
import ProductSearch from "../component/ProductSearch";
import { capitalizeWords } from "../utility/capitalizeWords";

const Menu = () => {
  const navigate = useNavigate();
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const [searchResults, setSearchResults] = useState([]);

  const menuRef = useRef(null);

  const productDisplay = productData.filter((e1) => e1._id === filterby)[0];
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };
  const handleSearchResults = (data) => {
    // console.log("Search results:", data);
    setSearchResults(data);
  };
  const handleViewDetails = (productId) => {
    navigate(`/menu/${productId}`);
    setTimeout(() => {
      if (menuRef.current) {
        const headerHeight = 80;
        const elementPosition = menuRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };
  
  const handleBuyProduct = ()=>{
    dispatch(addCartItem(productDisplay));
    navigate(`../../cart`);
  }
  
  return (
    <div className="p-2 md:p-4">
      <div className="max-w-4xl mx-auto">
        <ProductSearch onSearch={handleSearchResults} />

        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">Results:</h2>

          {searchResults.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {searchResults.map((product) => (
                <li
                  key={product._id}
                  className="flex flex-col items-start p-4 bg-white shadow-md rounded-lg hover:bg-gray-50 transition duration-200 ease-in-out"
                >
                  <span className="text-lg font-medium">{capitalizeWords(product.name)}</span>
                  <button className="text-blue-400 hover:text-blue-700 font-semibold" onClick={()=> handleViewDetails(product._id)}>
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mb-4">No products found</p>
          )}
        </div>
      </div>

      <div ref={menuRef} className="w-full max-w-4xl m-auto flex md:flex bg-white">
        <div className="max-w-md overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            alt={productDisplay.name}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">$</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            <button 
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px] "
              onClick={handleBuyProduct}
            >
              Buy
            </button>
            <button
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px] "
              onClick={handleAddCartProduct}
            >
              Add Cart
            </button>
          </div>
          <div className="">
            <p className="text-slate-600 font-medium">Description : </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
