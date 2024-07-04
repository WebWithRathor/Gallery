import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchHead = ({query,setpageNo}) => {
    const navigate = useNavigate()
    const [search, setsearch] = useState('');
    const searchHandle = () => {
        if (search != '') {
            navigate(`/search/${search}`)
            setpageNo(1)
            setsearch('')
        }
    }

    return (
        <div className="searchHead flex gap-10 md:flex-row flex-col items-end justify-between">
            <h1 className='text-5xl font-serif font-extralight italic'>Searched : {query}</h1>
            <div className="search flex   border border-black rounded-lg overflow-hidden">
                <input onChange={(e) => setsearch(e.target.value)} value={search} placeholder='Search' className='px-3 md:w-[15vw] outline-none ' type="text" />
                <button onClick={searchHandle} className='md:px-5 md:py-2 px-2.5 py-2 bg-black text-white'> <i className="ri-search-line"></i> Search</button>
            </div>
        </div>
    )
}

export default SearchHead