import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import { Helmet } from 'react-helmet'
import CardContainer from '../components/CardContainer'

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Ecommerce-HomePage</title>
    </Helmet>
    <Carousel/>
    
    <CardContainer/>
    </>
  )
}

export default HomePage