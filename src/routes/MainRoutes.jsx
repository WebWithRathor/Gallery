import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchLayout from '../components/search/SearchLayout'
import HomeLayout from '../components/home/HomeLayout'
import ShowImg from '../components/partials/ShowImg'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeLayout/>}>
              <Route path='/view/:id' element={<ShowImg/>}/>
            </Route>
            <Route path='/search/:query' element={<SearchLayout/>}>
              <Route path='/search/:query/view/:id' element={<ShowImg/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default MainRoutes