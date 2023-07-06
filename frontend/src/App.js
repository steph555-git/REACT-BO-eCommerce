import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/*" element={<ProtectedRoute />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App;
