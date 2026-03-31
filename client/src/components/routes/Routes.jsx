import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Homeroutes } from './Homeroutes'
import Contact from '../modules/home/pages/Contact/Contact'

export const Routes = () => {
  return (
    <ReactRoutes>
        <Route path="/" element={<Homeroutes />} />
        <Route path="/contact" element={<Contact />} />
    </ReactRoutes>
  )
}