import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'
import Articles from './pages/Articles/Articles';
import EditArticle from './pages/EditArticles/EditArticles'
import Settings from './pages/Settings/Settings'
import Statistics from './pages/Statistics/Statistics'
import Site from './pages/Site/Site'

import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*<Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />*/}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/articles" element={<ProtectedRoute><Articles /></ProtectedRoute>} />
        <Route path="/editarticle/:id" element={<ProtectedRoute><EditArticle /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/statistics" element={<ProtectedRoute><Statistics /></ProtectedRoute>} />
        <Route path="/site" element={<ProtectedRoute><Site /></ProtectedRoute>} />

      </Routes>
    </AuthContextProvider>
  )
}

export default App;
