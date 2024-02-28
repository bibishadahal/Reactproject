import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './reducers/TestItem'
import Student from './Student'
import Form from './Form'
import ItemProduct from './reducers/ItemProduct'


const TestNav = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    
    <h1>the number of item in cart is {data.cartCount}</h1>
    <TestItem/>
    <Student/>
    <Form/>
    <ItemProduct/>
    </>
  )
}

export default TestNav