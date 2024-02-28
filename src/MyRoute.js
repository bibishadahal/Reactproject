import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Layouts from './pages/Layouts'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import Show from './context/Show'
import DataCounter from './hooks/DataCounter'
import TestNav from './redux/TestNav'


const MyRoute = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='Products' element={<Product/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='/*' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='context/test' element={<Show/>}/>
            <Route path='hooks/reducer' element={<DataCounter/>}/>
            <Route path='redux/first' element={<TestNav/>}/>

          </Route>
          <Route path='/*' element={<NotFound/>}/>
          {/* <Route path='pricing' element={<pricing/>}/> */}
            
        </Routes>
    </Router>
  )
}

export default MyRoute