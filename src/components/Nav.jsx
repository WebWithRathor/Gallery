import React from 'react'

const Nav = () => {
  return (
    <>
        <h1 className='text-sm rotate-90 fixed z-50 font-[monument] left-full -translate-x-[65%] top-1/2 -translate-y-1/2 py-5 bg-black rounded-b-lg text-[#fdfcdc] w-fit px-10 tracking-wider'>Pagination.</h1>
    <div className='w-full text-white py-7 fixed flex  justify-between px-10'>
        <h1 className='font-medium tracking-[5px] text-[.8vw] uppercase'>PixieVerse</h1>
        <div className="left flex gap-10">
            <h1 className='font-medium tracking-[2px] text-[.8vw] uppercase'>home</h1>
            <h1 className='font-medium tracking-[2px] text-[.8vw] uppercase'>video</h1>
            <h1 className='font-medium tracking-[2px] text-[.8vw] uppercase'>images</h1>
        </div>
    </div>
    </>
  )
}

export default Nav