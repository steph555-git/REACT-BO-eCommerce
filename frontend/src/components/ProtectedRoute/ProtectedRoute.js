import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Articles from '../../pages/Articles/Articles';
import NewArticleAI from '../../pages/NewArticleAI/NewArticleAI';
import NewArticle from '../../pages/NewArticle/NewArticle';
import EditArticle from '../../pages/Edit/EditArticles'
import EditLead from '../../pages/Edit/EditLead';
import Settings from '../../pages/Settings/Settings'
import Statistics from '../../pages/Statistics/Statistics'
import Site from '../../pages/Site/Site'
import Step2 from '../../pages/NewArticleAI/Step2';

import Layout from '../Layout/Layout'
import { UserAuth } from '../../context/AuthContext'

const ProtectedRoute = () => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to='/login' />
    }
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/listeleads" element={<Home />} />
                <Route path="/home/lead/:id" element={<EditLead />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/listearticles" element={<Articles />} />
                <Route path="/articles/newarticleai" element={<NewArticleAI />} />
                <Route path="/articles/newarticle" element={<NewArticle />} />
                <Route path="/articles/editarticle/:id" element={<EditArticle />} />
                <Route path="/settings" element={<Settings />} />
                {/*<Route path="/settings/paramsblog" element={<SettingsBlog />} />
                <Route path="/settings/paramsavis" element={<SettingsAvis />} />
                <Route path="/settings/arborescence" element={<SettingsArbo />} />*/}
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/site" element={<Site />} />
                <Route path="/step2" element={<Step2 />} />
            </Routes>
        </Layout>)
}

export default ProtectedRoute