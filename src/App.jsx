import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Login from './components/Login'
import ClientDetails from './components/ClientDetails'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/clients/:clientName' element={<ClientDetails />} />
    </Routes>
  )
}

export default App
