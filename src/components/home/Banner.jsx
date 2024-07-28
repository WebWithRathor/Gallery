import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [query, setquery] = useState('');
  const [Type, setType] = useState('image')
  const navigate = useNavigate();
  const navigateHandle = () => {
    if (query) {
      localStorage.setItem('pageNo', 1);
      navigate(`/${Type}/search/${query}`);

    }
  }

  return (
    <div className='h-[60vh] overflow-hidden text-white relative flex flex-col items-center justify-center '>
      <img className='h-full z-[-1] w-full object-cover absolute' src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="overlay z-[-1] h-full w-full bg-black opacity-30 absolute top-0 left-0"></div>
      <h1 className=' md:text-7xl text-2xl font-[monument] tracking-wide uppercase'>PhotoGraphy</h1>
      <p className='mt-2 md:w-full w-[80%] text-center'>The internet’s source for visuals.
        Powered by creators everywhere.</p>
      <div className="search flex w-fit bg-white rounded-lg mt-6 p-1">
        <div className='border px-2 md:px-4 text-black py-2 group rounded relative text-md border-black'><span className='capitalize'>{Type}</span><i className="ri-arrow-down-s-line"></i>
          <div className="options z-10 absolute scale-0 group-hover:scale-100 origin-top-left transition-all bg-white left-0 py-1 rounded top-[105%] border shadow-inner w-full">
            <h1 onClick={(e) => setType(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-1.5 md:text-md text-sm md:px-4 hover:bg-gray-100'>Image</h1>
            <h1 onClick={(e) => setType(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-1.5 md:text-md text-sm md:px-4 hover:bg-gray-100'>Video</h1>
          </div>
        </div>
        <input onChange={(e) => setquery(e.target.value)} value={query} placeholder='Search Media' className='text-lg text-black w-[50vw] md:w-[20vw] px-3 py-1 outline-none ' type="text" name="" id="" />
        <button onClick={navigateHandle} className='px-3 py-2 bg-black rounded-lg text-white'><i className="ri-search-line mr-1.5"></i>Search</button>
      </div>
    </div>
  )
}

export default Banner