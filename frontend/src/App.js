import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'
import Articles from './pages/Articles/Articles';
import NewArticleAI from './pages/NewArticleAI/NewArticleAI';
import NewArticle from './pages/NewArticle/NewArticle';
import EditArticle from './pages/EditArticles/EditArticles'
import Settings from './pages/Settings/Settings'
import Statistics from './pages/Statistics/Statistics'
import Site from './pages/Site/Site'

import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import Step2 from './pages/NewArticleAI/Step2';
import './App.css';

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/articles" element={<ProtectedRoute><Articles /></ProtectedRoute>} />
        <Route path="/newarticleai" element={<ProtectedRoute><NewArticleAI /></ProtectedRoute>} />
        <Route path="/newarticle" element={<ProtectedRoute><NewArticle /></ProtectedRoute>} />
        <Route path="/editarticle/:id" element={<ProtectedRoute><EditArticle /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/statistics" element={<ProtectedRoute><Statistics /></ProtectedRoute>} />
        <Route path="/site" element={<ProtectedRoute><Site /></ProtectedRoute>} />
        <Route path="/step2" element={<ProtectedRoute><Step2 /></ProtectedRoute>} />

      </Routes>
    </AuthContextProvider>
  )
}

export default App;
