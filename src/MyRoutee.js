import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Second1 } from './Second1'


const MyRoutee = () => {
  return (
    <Router>
        <Routes>
            <Route path='/second1' element={<Second1/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutee