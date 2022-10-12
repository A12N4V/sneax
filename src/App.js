import React, {useState, useEffect} from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage';

export default function App() {
  let prices = ['466', '1023','306','160','290','360','1256','2100','2446','302','298']
  let [cart, changeCart] = useState([])
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
     changeCart(cart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  function AddToCart(productId){
    let product = ['/shoes/'+2497+parseInt(productId)+'.jpg',prices[productId]]
    changeCart((prevProducts) => {return [...prevProducts, product]})
    console.log(cart)
  }

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/buy" element={<CardPage />} />
      <Route path="/products" element={<ProductPage addtocart={(e)=>{AddToCart(e.target.id)}}/>} />
      <Route path="/cart"  element={<CartPage cart={cart} />} />
    </Routes>

  )

}
//