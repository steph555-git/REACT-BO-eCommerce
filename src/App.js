import React from 'react';
import { Routes, Route} from 'react-router-dom'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/DashBoard/Dashboard';
import Articles from './pages/Articles/Articles';

import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*<Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />*/}
        <Route path="/articles" element={<ProtectedRoute><Articles /></ProtectedRoute>} />


      </Routes>
    </AuthContextProvider>
  )
}

export default App;
