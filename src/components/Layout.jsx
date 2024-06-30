import React from 'react'
import Banner from './Banner'
import GridSection from './GridSection'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className='h-full'>
      <Nav />
      <Banner />
      <GridSection />
    </div>
  )
}

export default Layout