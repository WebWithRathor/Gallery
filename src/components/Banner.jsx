import React from 'react'

const Banner = () => {
  return (
    <div className='h-[60vh] text-white relative flex flex-col items-center justify-center '>
        <img className='h-full z-[-1] w-full object-cover absolute' src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="overlay z-[-1] h-full w-full bg-black opacity-30 absolute top-0 left-0"></div>
        <h1 className=' text-7xl font-[monument] tracking-wide uppercase'>PhotoGraphy</h1>
        <div className="search flex w-fit bg-white rounded-lg mt-6 p-1">
        <button className='px-3 py-2 bg-black rounded-lg text-white'><i className="ri-search-line mr-1.5"></i>Search</button>
        <input placeholder='Search Images' className='text-lg text-black w-[20vw] px-3 py-1 outline-none ' type="text" name="" id="" />
        </div>
    </div>
  )
}

export default Banner