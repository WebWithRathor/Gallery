import React from 'react'

const SearchFilter = ({color,setcolor,orientation,setorientation,size,setsize}) => {
  return (
    <div className="filters flex justify-end my-7 w-full gap-5">
                <div className='border px-2 md:px-4 py-2 group rounded relative border-black'>Orientation : <span className='capitalize'>{orientation}</span><i className="ri-arrow-down-s-line"></i>
                    <div className="options z-10 absolute scale-0 group-hover:scale-100 origin-top-left transition-all bg-white left-0 py-1 rounded top-[105%] border shadow-inner w-full">
                        <h1 onClick={(e) => setorientation(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Landscape</h1>
                        <h1 onClick={(e) => setorientation(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Portrait</h1>
                        <h1 onClick={(e) => setorientation(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Square</h1>
                    </div>
                </div>
                <div className='border px-2 md:px-4 py-2 group rounded relative border-black'>Size : <span className='capitalize'>{size}</span><i className="ri-arrow-down-s-line"></i>
                    <div className="options z-10 absolute scale-0 group-hover:scale-100 origin-top-left transition-all bg-white left-0 py-1 rounded top-[105%] border shadow-inner w-full">
                        <h1 onClick={(e) => setsize(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Large</h1>
                        <h1 onClick={(e) => setsize(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Medium</h1>
                        <h1 onClick={(e) => setsize(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Small</h1>
                    </div>
                </div>
                <div className='border px-2 md:px-4 py-2 group rounded relative border-black'>Color : <span className='capitalize'>{color}</span><i className="ri-arrow-down-s-line"></i>
                    <div className="options z-10 absolute scale-0 group-hover:scale-100 origin-top-left transition-all bg-white left-0 py-1 rounded top-[105%] border shadow-inner w-full">
                        <h1 onClick={(e) => setcolor(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>All</h1>
                        <h1 onClick={(e) => setcolor(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Red</h1>
                        <h1 onClick={(e) => setcolor(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Black</h1>
                        <h1 onClick={(e) => setcolor(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>White</h1>
                        <h1 onClick={(e) => setcolor(e.target.textContent.toLowerCase())} className='cursor-pointer py-1 px-2 md:px-4 hover:bg-gray-100'>Turquoise</h1>
                    </div>
                </div>
            </div>
  )
}

export default SearchFilter