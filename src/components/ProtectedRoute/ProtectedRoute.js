import React from 'react'
import { Navigate } from 'react-router-dom'

import Layout from '../Layout/Layout'
import { UserAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to='/login' />
    }
    return (
        <Layout>
            {children}
        </Layout>)
}

export default ProtectedRoute