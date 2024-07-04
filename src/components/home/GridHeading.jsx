import React from 'react'
import { Link } from 'react-router-dom'

const GridHeading = () => {
    return (
        <div className="mostsearch flex gap-10 mb-14 items-start md:items-end">
            <h1 className='md:text-5xl text-lg font-serif font-extralight italic'>Most Searched :</h1>
            <div className="recom flex gap-3 md:gap-5 flex-wrap">
               <Link onClick={(e)=>localStorage.setItem('pageNo',1)} to={`/search/wallpapers`}><h1 className='font-semibold px-2 md:px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-1 md:py-2 border-2 border-black text-sm md:text-md rounded-xl'>Wallpapers</h1></Link>
               <Link onClick={(e)=>localStorage.setItem('pageNo',1)} to={`/search/nature`}><h1 className='font-semibold px-2 md:px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-1 md:py-2 border-2 border-black text-sm md:text-md rounded-xl'>Nature</h1></Link>
               <Link onClick={(e)=>localStorage.setItem('pageNo',1)} to={`/search/travel`}><h1 className='font-semibold px-2 md:px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-1 md:py-2 border-2 border-black text-sm md:text-md rounded-xl'>Travel</h1></Link>
               <Link onClick={(e)=>localStorage.setItem('pageNo',1)} to={`/search/pastels`}><h1 className='font-semibold px-2 md:px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-1 md:py-2 border-2 border-black text-sm md:text-md rounded-xl'>Pastels</h1></Link>
            </div>
        </div>
    )
}

export default GridHeading