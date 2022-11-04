import React from 'react'
import {Route, Routes} from "react-router-dom"
import Contact from './Pages/Contact'
import Linktree from './Pages/Linktree'

const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Linktree/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
     
    
    </div>
  )
}

export default App