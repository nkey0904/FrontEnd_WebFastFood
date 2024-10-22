import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'



const Cart = () => {
  const productCartItem = useSelector((state)=>state.product.cartItem);
  console.log(productCartItem)
  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
      <div className='my-4'>
        {/* display cart items */}
        <div className='w-full max-w-3xl'>
          {
            productCartItem.map(e1=>{
              return(
                <CartProduct 
                  key={e1._id}
                  id={e1._id}
                  name={e1.name}
                  image={e1.image}
                  category={e1.category}
                  qty={e1.qty}
                  total={e1.total}
                  price={e1.price}
                />
              )
            })
          }
        </div>

        {/* total cart item */}
        <div className=''></div>
      </div>
    </div>
  )
}

export default Cart