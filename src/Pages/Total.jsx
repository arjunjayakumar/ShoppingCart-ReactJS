import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'

export const Total = () => {
    const context=useContext(CartContext)
    // const totalcalc=(item)=>item.reduce((acc,curr)=>acc+(curr.qty*curr.price+45),0)
    // const total=totalcalc(context.cartitems)
    const total=context.total(context.cartitems)
    
  return (
    <>
      Totalprice:-{total[0]}
      <p>Shipping Charges:-{total[1]?"100":"0"}</p>
    </>
  )
}
