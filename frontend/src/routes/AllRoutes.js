import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import Profile from '../Pages/Profile/Profile';
import Navbar from '../Components/Navbar/Navbar';
import Wallet from '../Pages/Wallet/Wallet';
import Walkthrough from '../Pages/Walkthrough/Walkthrough';

const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/walkthrough' element={<Walkthrough/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes