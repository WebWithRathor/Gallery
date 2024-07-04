import React, { useEffect } from 'react'

const Pagination = ({pageNo,setpageNo,totalPages}) => {
    return (
        <div className="pagination z-[99] md:gap-10 justify-between fixed bottom-5 flex items-center w-[79%] md:w-[94.8%] bg-white p-2 rounded">
            <button onClick={(e) => pageNo != 1 && setpageNo(pageNo - 1)} className='capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded md:rounded-xl md:px-10 md:py-4 px-2 py-1 font-semibold'><i className='ri-arrow-left-line'></i><span className={`${pageNo === 1 ? 'line-through' : ''}`}>previous</span></button>
            <h1 className='md:text-xl text-sm font-serif'><span className='italic'>Page No : </span>{pageNo}</h1>
            <button onClick={(e) => Math.ceil(totalPages/15) === pageNo ? '' : setpageNo(pageNo + 1)} className={` ${Math.ceil(totalPages/15) === pageNo ? 'line-through':''} md:px-10 md:py-4 px-2 py-1 capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded md:rounded-xl font-semibold`}>Next <i className='ri-arrow-right-line'></i></button>
        </div>
    )
}

export default Pagination