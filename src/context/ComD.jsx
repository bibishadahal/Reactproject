import React,{useContext} from 'react'
import { GlobalContext } from './GlobalValue'

const ComD = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <h2>The name of my student is {data.name}</h2>
    <h2>The address of my student is {data.address}</h2>
    </>
  )
}

export default ComD