import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Search from '../components/Search'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/search/:query' element={<Search/>}/>
        </Routes>
    </>
  )
}

export default MainRoutes