import React from 'react';
import HomeCard from '../component/HomeCard';
import { useSelector } from 'react-redux';
import CardFeature from '../component/CardFeature';
import {GrPrevious}  from'react-icons/gr';
import {GrNext}  from'react-icons/gr';

const Home = () => {
  const productData = useSelector((state)=>state.product.productList);
  const homeProductCartList = productData.slice(1,5)
  const homeProductCartListVegetables = productData.filter(e1 => e1.category === 'vegetable', [])
  console.log(homeProductCartListVegetables)
  
  const loadingArray = new Array(3).fill(null)
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' className='h-7'/>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'> The Fasted Delivery in <span className='text-red-600 text-'>Your Home</span></h2>
          <p className='py-3 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries</p>
            <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        {
          homeProductCartList[0] ? homeProductCartList.map((e1)=>{
            return(
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
          : 
          loadingArray.map((e1, index)=>{
            return (
              <HomeCard
                key = {index}
                loading={"Loading..."}
              />
            )
          })
        }
        </div>
      </div>

      <div className = "">
        <div>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetables</h2>
        </div>
        <div className=''>
          <button><GrPrevious/></button>
          <button><GrNext/></button>
        </div>
        <div className='flex gap-5 overflow-scroll'>
          {
            homeProductCartListVegetables.map(e1=>{
              return(
                <CardFeature
                  key = {e1._id}
                  name = {e1.name}
                  category = {e1.category}
                  price = {e1.price}
                  image = {e1.image}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home