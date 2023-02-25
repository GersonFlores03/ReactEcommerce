import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import AppNavar from './components/AppNavar'
import Loding from './components/Loding'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/RutasProtec'
import Signup from './pages/Signup'
import User from './pages/User'

function App() {


 const isloading = useSelector(state => state.isloading)

  return (
    <div className="App">
      <HashRouter>
        <AppNavar/>
       { isloading && <Loding/>}  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route element={<ProtectedRoutes/>}>
              <Route path='/purchases' element={<Purchases />}/>
               <Route path='/user' element={<User/>} />
          </Route>

        
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
