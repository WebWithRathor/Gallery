import React from 'react'

const Pagination = ({pageNo,setpageNo}) => {
    return (
        <div className="pagination gap-10 justify-between fixed bottom-5 flex items-center w-[94.8%] bg-white p-2 rounded">
            <button onClick={(e) => pageNo != 1 && setpageNo(pageNo - 1)} className='capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl px-10 py-4 font-semibold'><i className='ri-arrow-left-line'></i><span className={`${pageNo === 1 ? 'line-through' : ''}`}>previous</span></button>
            <h1 className='text-xl font-serif'><span className='italic'>Page No : </span>{pageNo}</h1>
            <button onClick={(e) => setpageNo(pageNo + 1)} className=' px-10 py-4 capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl font-semibold'>Next <i className='ri-arrow-right-line'></i></button>
        </div>
    )
}

export default Pagination