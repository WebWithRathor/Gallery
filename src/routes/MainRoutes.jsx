import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}/>
        </Routes>
    </>
  )
}

export default MainRoutes