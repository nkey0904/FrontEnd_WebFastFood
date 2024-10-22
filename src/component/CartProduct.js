import React from 'react'
import {TbPlus, TbMinus} from 'react-icons/tb'

const CartProduct = ({id, name, image, category, qty, total, price}) => {
  return (
    <div className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-300'>
      <div className='p-3 bg-white rounded overflow-hidden'>
        <img src = {image} className='h-28 w-36 object-cover'/>
      </div>
      <div className='flex flex-col gap-1'>
          <h3 className='font-semibold text-slate-600 capitalize text-lg md:text-xl'>{name}</h3>
          <p className='text-slate-500 font-mediuml'>{category}</p>
          <p className='font-bold text-base'><span className='text-red-500'>$</span><span>{price}</span></p>
          <div className='flex gap-3 items-center'>
            <button className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "><TbPlus/></button>
            <p className='font-semibold p-1'>{qty}</p>
            <button className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "><TbMinus/></button>
          </div>
        </div>
      
    </div>
  )
}

export default CartProduct;