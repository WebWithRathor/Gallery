import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Axios from '../utils/axios';

const Search = () => {
    const { query } = useParams();
    const navigate = useNavigate();
    const [orientation, setorientation] = useState('');
    const [color, setcolor] = useState('');
    const [size, setsize] = useState('low');
    const [search, setsearch] = useState('');
    const searchHandle = () => {
        if (search != '') {navigate(`/search/${search}`)
            setpageNo(1)}
    }
    const [Images, setImages] = useState([]);
    const [pageNo, setpageNo] = useState(1);
    const getImages = async (query) => {
        const { data } = await Axios.get(`/search?&page=${pageNo}&query=${query}&color=${color}&orientation=${orientation}&size=${size}`);
        setImages(data)
    }
    useEffect(() => {
        getImages(query);
        setsearch('');
    }, [query,pageNo])

    return (
        <div className='p-10  pb-28'>
            <Link to='/'><h1 className='mb-5 after:absolute after:top-full after:w-full after:h-[1px] relative after:bg-black w-fit after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-right after:hover:origin-left after:transition-transform '><i className="ri-arrow-left-s-line"></i>Back</h1></Link>
            <div className="mostsearch flex gap-10 items-end justify-between">
                <h1 className='text-5xl font-serif font-extralight italic'>Searched : {query}</h1>
                <div className="search flex border border-black rounded-lg overflow-hidden">
                    <input onChange={(e) => setsearch(e.target.value)} value={search} placeholder='Search' className='px-3 w-[15vw] outline-none ' type="text" />
                    <button onClick={searchHandle} className='px-5 py-2 bg-black text-white'> <i className="ri-search-line"></i> Search</button>
                </div>
            </div>
            <div className="filters flex justify-end my-7 w-full gap-5">
                <h1 className='border px-4 py-2 rounded border-black'>Orientation : All<i className="ri-arrow-down-s-line"></i></h1>
                <h1 className='border px-4 py-2 rounded border-black'>Size : All<i className="ri-arrow-down-s-line"></i></h1>
                <h1 className='border px-4 py-2 rounded border-black'>Color : All<i className="ri-arrow-down-s-line"></i></h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {Images.length === 0 ?
                    <h1 className=' col-span-3 text-xl font-semibold'>Sorry ! , No images found</h1> : Images.photos.map((e) => {
                        return <div key={e.id} className=" bg-blue-50 h-[70vh] overflow-hidden">
                            <img src={e.src.large} className='h-full w-full object-cover' alt="" />
                        </div>
                    })
                }

            </div>
            <div className="pagination gap-10 justify-between fixed bottom-5 flex items-center w-[94.8%] bg-white p-2 rounded">
                <button onClick={(e) => pageNo != 1 && setpageNo(pageNo - 1)} className='capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl px-10 py-4 font-semibold'><i className='ri-arrow-left-line'></i><span className={`${pageNo === 1 ? 'line-through' : ''}`}>previous</span></button>
                <h1 className='text-xl font-serif'><span className='italic'>Page No : </span>{pageNo}</h1>
                <button onClick={(e) => setpageNo(pageNo + 1)} className=' px-10 py-4 capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl font-semibold'>Next <i className='ri-arrow-right-line'></i></button>
            </div>
        </div>
    )
}

export default Search