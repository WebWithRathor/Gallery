import React from 'react'

const GridHeading = () => {
    return (
        <div className="mostsearch flex gap-10 items-end">
            <h1 className='text-5xl font-serif font-extralight italic'>Most Searched :</h1>
            <div className="recom flex gap-5">
                <h1 className='font-semibold px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-gray-900 after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-2 border-2 border-gray-900 rounded-xl'>Wallpapers</h1>
                <h1 className='font-semibold px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-gray-900 after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-2 border-2 border-gray-900 rounded-xl'>Nature</h1>
                <h1 className='font-semibold px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-gray-900 after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-2 border-2 border-gray-900 rounded-xl'>Travel</h1>
                <h1 className='font-semibold px-8 after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-gray-900 after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 py-2 border-2 border-gray-900 rounded-xl'>Pastels</h1>
            </div>
        </div>
    )
}

export default GridHeading