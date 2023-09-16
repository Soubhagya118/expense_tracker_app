import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCartReducerFn,cartOnReducerFn,removeReducerFn} from '../../redux/cartReducer';
import { useNavigate } from 'react-router-dom';


const Cart = (props) => {
  const reduxxcartData= useSelector(state=>state.cart);
  const expenseItems=useSelector(state=>state.expenses.items)

  const totalAmount= reduxxcartData?.carts?.reduce((a,c)=>a+((+c.money)*(+c.quantity)),0);
  console.log("totalAmount in CArt.........................",totalAmount)
  const cartData=reduxxcartData?.carts;

  const navigate=useNavigate();

  const dispatch=useDispatch();

  
  const closeCartHandler=()=>{
    dispatch(cartOnReducerFn(false));
    navigate("/")

  }
  return (
    <div className='bg-transparent w-full'>
              <h1 className='text-center text-3xl my-2'>Cart</h1>
        <section className='grid m-auto w-2/4 my-2 h-auto shadow-xl border-2 border-black-30 bottom-2 border-black-900 '>
          <ul className='h-auto max-h[32rem] overflow-auto'>
          {cartData?.map((ele)=><li key={ele?.id} className='h-10 text-justify flex gap-5 m-auto justify-between mt-3'>

            <div className='text-start ml-2 pl-10 flex-1'>
             <p >money:- {+ele?.money}</p>
              </div>
              <div className='text-start flex-1'>
              <p  className='text-start'>description:- {ele?.description}</p>

              </div>
          <div className='text-start '>
        <p className='text-start'>catagorey:- {ele?.catagorey}</p>

</div>
<div className='text-start flex'>
<button className='border-2 border-gray-600 mx-5 px-2' onClick={()=>dispatch(addToCartReducerFn(
  {id:ele.id,money:ele.money,description:ele.description,catagorey:ele.catagorey,quantity:1}
  ))}>+</button>
<button className='border-2 border-gray-600 mx-5 px-2' onClick={()=>dispatch(removeReducerFn(
  {id:ele.id,money:ele.money,description:ele.description,catagorey:ele.catagorey,quantity:1,expenseItems}
))}>-</button>
</div>

 
</li>)}

          </ul>
          <div className='text-center flex justify-center gap-5 mt-5'>
           <h1 className='m-auto text-lg'>Total Amount = <span className=''>{totalAmount}</span></h1>
          <button onClick={closeCartHandler} 
          className='border-2 border-blue-500 px-3 cursor-pointer bg-blue-500 text-white rounded-md'
          >Close</button>
            <button           className='border-2 border-blue-500 px-3 cursor-pointer bg-blue-500 text-white rounded-md'>Order</button>
          </div>
          
        </section>
    </div>
  )
}

export default Cart
