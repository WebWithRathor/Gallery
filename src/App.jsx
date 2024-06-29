import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='h-screen w-full '>
    <Nav/>
    <MainRoutes/>
    </div>
  )
}

export default App