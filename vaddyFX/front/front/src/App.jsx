import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login.jsx'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Registration from './components/registration.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App