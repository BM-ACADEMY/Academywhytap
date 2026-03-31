import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Homeroutes } from './Homeroutes'
import { Layout as HomeLayout } from '../modules/home/layout/Layout'
import Adminroutes from './Adminroutes'
import AdminLogin from '../modules/admin/auth/Login'
import AdminSignup from '../modules/admin/auth/Signup'

export const Routes = () => {
  return (
    <ReactRoutes>
        {/* Main Site Routes - All delegated to Homeroutes */}
        <Route element={<HomeLayout />}>
            <Route path="/*" element={<Homeroutes />} />
        </Route>



        {/* Protected Admin Routes (Dedicated Admin Sidebar/Layout) */}
        <Route path="/admin/*" element={<Adminroutes />} />
    </ReactRoutes>
  )
}