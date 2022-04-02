import React from 'react'
import { Products } from '../Backend/Products'
import "./Productlist.css"

export const Productlist = ({products}) => {
  return (
    <div className='pdts'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {products.map((items)=><Products products={items} key={items.id} id={items.id}/>)}
          </div>
        </div>
      </div> 
    </div> 
  )
}
