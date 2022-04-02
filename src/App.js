import { useState } from 'react';
import './App.css';
import { Cart } from './Pages/Cart';
import { Header } from './Pages/Header';
import { Productlist } from './Pages/Productlist';

function App() {
  const data=[
    {"id":101,
    "name":"Book",
    "img":"https://img.icons8.com/color/48/000000/book.png",
    "price":1000,
    "qty":1},
    {"id":102,
    "name":"Pen",
    "img":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-pen-back-to-school-flaticons-lineal-color-flat-icons-4.png",
    "price":10,
    "qty":1},
    {"id":103,
    "name":"Pencil",
    "img":"https://img.icons8.com/color/48/000000/pencil--v1.png",
    "price":5,
    "qty":1},
    {"id":104,
    "name":"Ruler",
    "img":"https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-ruler-art-and-design-studio-xnimrodx-blue-xnimrodx.png",
    "price":7,
    "qty":1}
  ]

  const [products,setProducts]=useState(data)
  return (
    <>
      <Header/>
      <div className='mainbody'>
        <Productlist products={products} className="pdtlist"/>
      </div>
      
      <div className='cart'>
        <Cart/>
      </div>
    </>
    
  );
}

export default App;
