import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

import './style.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<List />} />
      <Route path='/list/:ID' element={<Hotel />} />
    </Routes>
  )
}

export default App
