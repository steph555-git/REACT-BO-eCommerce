import React, { useState } from 'react';
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

import { setSubNav } from '../src/redux/slices/subNav.slice'
import { useDispatch } from 'react-redux'

import './App.css';

function App() {
  const dispatch = useDispatch()

  //const [stateSubNav, setStateSubNav] = useState([])

  const homeSubNav = [{ label: 'Liste des leads', path: 'listeleads' }, { label: 'RGPD', path: 'rgpd' }]
  const articlesSubNav = [{ label: 'Liste des articles', path: '' }, { label: 'Nouvel article', path: '' }, { label: 'Nouvel article IA', path: '' }]
  const settingsSubNav = [{ label: 'Paramètres blog', path: '' }]
  const statisticsSubNav = [{ label: 'Stats Leads', path: '' }]

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<ProtectedRoute><Home onClick={dispatch(setSubNav(homeSubNav))} /></ProtectedRoute>} />
        <Route path="/articles" element={<ProtectedRoute><Articles onClick={dispatch(setSubNav(articlesSubNav))} /></ProtectedRoute>} />
        <Route path="/editarticle/:id" element={<ProtectedRoute><EditArticle /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings onClick={dispatch(setSubNav(settingsSubNav))} /></ProtectedRoute>} />
        <Route path="/statistics" element={<ProtectedRoute><Statistics onClick={dispatch(setSubNav(statisticsSubNav))} /></ProtectedRoute>} />
        <Route path="/site" element={<ProtectedRoute><Site /></ProtectedRoute>} />

      </Routes>
    </AuthContextProvider>
  )
}

export default App;
