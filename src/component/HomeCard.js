import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({name, image, category, price, loading, id}) => {
  return (
    <div className='bg-white shadow-md p-2 rounded min-w-[150px] w-full max-w-[200px]'>
       {
        name ? (<>
          <div className='flex flex-col h-full'>
            <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0", behavior : 'smooth'})}>
              <div className='flex-grow-0 flex-shrink-0 w-40 h-40 mx-auto min-h-[150px] max-h-[200px]  overflow-hidden flex justify-center items-center '>
                <img src={image} className='h-full w-full object-cover'/>
              </div>
              <div className='mb-auto flex-grow flex flex-col items-center justify-center'>
                <h3 className='max-w-[150px] font-semibold text-slate-600 text-center capitalize text-lg mt-4 whitespace-nowrap overflow-hidden text-ellipsis'>{name}</h3>
                <p className='text-center text-slate-500 font-medium'>{category}</p>
                <p className='text-center font-bold'><span className='text-red-500'>$</span><span>{price}</span></p>
              </div>
            </Link>
          </div>
        </>
        
       )
       : (
      <div className='flex justify-center items-center h-full min-h-[150px] w-40'>
        <p>{loading}</p>
      </div>
        )
      }
    </div>
  )
}

export default HomeCard