import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchLayout from '../components/search/SearchLayout'
import HomeLayout from '../components/home/HomeLayout'
import ShowImg from '../components/partials/ShowImg'
import ShowVideo from '../components/partials/ShowVideo'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeLayout/>}>
              <Route path='/view/:id' element={<ShowImg/>}/>
            </Route>
            <Route path='/videos' element={<HomeLayout/>}>
              <Route path='/videos/view/:id' element={<ShowVideo/>}/>
            </Route>
            <Route path='/image/search/:query' element={<SearchLayout/>}>
              <Route path='/image/search/:query/view/:id' element={<ShowImg/>}/>
            </Route>
            <Route path='/video/search/:query' element={<SearchLayout/>}>
              <Route path='/video/search/:query/view/:id' element={<ShowVideo/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default MainRoutes