import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateproduct } from '../JS/productSlice/productSlice';

const Editproduct = ({product}) => {

  const dispatch = useDispatch();
  const [editprod, seteditprod] = useState({
    name:product?.name,
    price:product?.price,
    description:product?.description,
    image:product?.image
})
  return (
    <div>
<div>
    <input type="text" placeholder="price" onchange={(e)=>seteditprod({...editprod,price:e.target.value})}/>
    <input  type="text" placeholder="name" onChange={(e)=>seteditprod({...editprod,name:e.target.value})}/>
    <button onClick={() => dispatch(updateproduct({id:product?._id, product:editprod}))}>ok</button>
</div>
    </div>
  )
}

export default Editproduct