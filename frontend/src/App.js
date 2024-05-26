
import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import AuthRoutes from './routes/authRoutes';

function App() {
  const [auth, setAuth] = useState(false);
  console.log(auth)
  return (
    <div className="App bg-black">
      <Routes>
        {auth ? (
          // Render AllRoutes if authenticated
          <Route path="/*" element={<AllRoutes />} />
        ) : (
          // Render AuthRoutes if not authenticated
          <Route path="/*" element={<AuthRoutes setAuth={setAuth}/>} />
        )}
      </Routes>
    </div>
  );
}

export default App;
