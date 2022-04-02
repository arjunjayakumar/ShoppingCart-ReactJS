import React, { useContext } from 'react'
import { Cartlist } from '../Backend/Cartlist'
import { CartContext } from '../Context/CartContext'
import { Total } from './Total'
import "./Cart.css"
export const Cart = () => {
  const context=useContext(CartContext)

  return (
    <>
      <div>
        <div>Items in cart:-<button className='btn btn-primary'>{context.totalitems}</button></div>
        <div className='crtitems'>{context.cartitems.map(product=><Cartlist product={product} key={product.id} id={product.id}/>)}</div>
      </div>
      <div className='total'>
        <Total/>
      </div>
    </>
  )
}
