import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup'

const AuthRoutes = ({ setAuth }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Login setAuth={setAuth} />} /> 
    </Routes>
  );
};

export default AuthRoutes;
