import React from 'react'

import {toast} from 'react-hot-toast'

import {FcDeleteDatabase} from "react-icons/fc"
import { remove } from '../redux/Slices/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({item}) {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
    <div className='flex md:flex-row flex-col gap-10 mx-auto border-b-2 md:w-[90%] md:justify-between justify-center item-center border-slate-500 p-10'>

      
        <div className=' w-[27%]'>
          <img src={item.image} alt="pic" className='object-cover ' />
        </div>
        

      <div className='flex flex-col md:w-[65%] w-[90%] gap-5'>
      <p className="text-gray-700 font-semibold text-xl w-[90%]">{item.title}</p>
      <div className="text-gray-600">
      <p className=''>{item.description.split(" ").slice(0,15).join(" ")+ "..."}</p>
      </div>
      <div className='flex justify-between items-center pr-5 py-2'>
        <p className='"text-green-600 text-lg font-bold"'>
          ${item.price}
        </p>

        <div  className="text-red-700 bg-red-300 h-8 w-8  rounded-full cursor-pointer" onClick={removeFromCart} >
          <FcDeleteDatabase size="20px"/>
        </div>
      </div>

      </div>
    </div>
  )
}

export default CartItem
