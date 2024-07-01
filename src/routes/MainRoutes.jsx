import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchLayout from '../components/search/SearchLayout'
import HomeLayout from '../components/home/HomeLayout'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeLayout/>}/>
            <Route path='/search/:query' element={<SearchLayout/>}/>
        </Routes>
    </>
  )
}

export default MainRoutes