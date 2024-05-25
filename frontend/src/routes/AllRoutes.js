import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import Profile from '../Pages/Profile/Profile';
import Navbar from '../Components/Navbar/Navbar';
import Cart from '../Pages/Cart/Cart';
import Wallet from '../Pages/Wallet/Wallet';

const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes