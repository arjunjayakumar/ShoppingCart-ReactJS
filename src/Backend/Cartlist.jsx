import React,{useContext} from 'react'
import { Card } from '../UI/Card'
import { CartContext } from '../Context/CartContext'

export const Cartlist = ({product,id}) => {
  let context=useContext(CartContext)

  const inc=()=>{context.quantityincrement(id);console.log(context.cartitems)}
  const dec=()=>{context.quantitydecrement(id);console.log(product)}
  return (
      <Card>
        <img src={product.img} alt="error" />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button className='btn btn-dark' onClick={inc}>+</button>{product.qty}<button onClick={dec}>-</button>
      </Card>
  )
}
