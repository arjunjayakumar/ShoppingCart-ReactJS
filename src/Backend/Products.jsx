import React,{useContext} from 'react'
import { Card } from '../UI/Card'
import { CartContext } from '../Context/CartContext'
import './Products.css'

export const Products = ({products,id}) => {
  let context=useContext(CartContext)
  let add2cart=()=>{
    if(context.productincart(id)){context.quantityincrement(id)}
    else{context.addtocart(products)}
  }

  return (
          <Card>
              <img src={products.img} alt="error" width='100px'/>
              <p>{products.name}</p>
              <p>{products.price}</p>
              <button onClick={add2cart}>Add to cart</button>
          </Card>
  )
}
