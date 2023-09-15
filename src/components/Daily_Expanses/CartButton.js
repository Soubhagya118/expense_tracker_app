import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addToCartReducerFn} from '../../redux/cartReducer';

const CartButton = ({id,money,description,catagorey}) => {
  const addToCart = useSelector(state=>state.cart.carts);
  const dispatch =useDispatch();
  const cartButtonHandler=()=>{
    dispatch(addToCartReducerFn({id:id,money:(+money),description:description,catagorey:catagorey,quantity:1}));
    

  }
  return (
    <button onClick={cartButtonHandler} className='mx-1 boreder-2 border-black bg-blue-500 rounded-md p-1 text-white'>
      Add to Cart
      {console.log("state.carts",addToCart)}
    </button>
  )
}

export default CartButton
