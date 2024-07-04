import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {

  const textRef = useRef(null);
  const textRef1 = useRef(null);
  document.addEventListener('scroll', (e) => {
    if (scrollY > 391) {
      textRef.current.style.color = 'black'
      textRef.current.style.backgroundColor = 'white'
      textRef1.current.style.color = 'black'
    } else {
      textRef.current.style.color = 'white'
      textRef.current.style.backgroundColor = 'transparent'
      textRef1.current.style.color = 'white'
    }

  })

  return (
    <>
      <h1 className='text-sm rotate-90 fixed z-50 font-[monument] left-full -translate-x-[65%] top-1/2 -translate-y-1/2 py-5 bg-black rounded-b-lg text-[#fdfcdc] w-fit px-10 tracking-wider'>Pagination.</h1>
      <div ref={textRef} className='w-full z-[999] text-white py-7 fixed flex  justify-between px-10'>
        <h1 className='font-medium tracking-[5px] text-[2vw] md:text-[.8vw] uppercase'>PixieVerse</h1>
        <div ref={textRef1} className="left flex gap-4 md:gap-10">
          <NavLink to='/' className={({isActive})=> isActive ? 'border-b' : ''}><h1 className='font-medium text-[2vw] md:text-md tracking-[2px] text-[.8vw] uppercase'>home</h1></NavLink>
          <NavLink to='/video' className={({isActive})=> isActive ? 'border-b' : ''}> <h1 className='font-medium text-[2vw] md:text-md tracking-[2px] text-[.8vw] uppercase'>video</h1></NavLink>
          <NavLink to='/search/all' className={({isActive})=> isActive ? 'border-b' : ''}><h1 className='font-medium text-[2vw] md:text-md tracking-[2px] text-[.8vw] uppercase'>images</h1></NavLink>
        </div>
      </div>
    </>
  )
}

export default Nav