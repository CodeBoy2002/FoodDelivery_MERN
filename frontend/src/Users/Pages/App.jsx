import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Home from './Home'
import Create from './Create.jsx'
import Delete from './Delete'
import Update from './Update'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/delete/:id' element={<Delete/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
  )
}

export default App