import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Users from './Users/Pages/App'
import Staffs from './Staffs/Pages/App'

const App = () => {
  return (
    <Routes>
        <Route path='/users/*' element={<Users/>}/>
        <Route path='/staff/*' element={<Staffs/>}/>
    </Routes>
  )
}

export default App