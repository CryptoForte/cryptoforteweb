// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import Contents from './pages/Contents'
import Aboutus from './pages/Aboutus'

function App() {

  return (
    <div>
      < Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/events' element={< Events />} />
        <Route path='/contents' element={< Contents />} />
        <Route path='/about-us' element={< Aboutus />} />
      </Routes>
    </div>
  )
}

export default App
