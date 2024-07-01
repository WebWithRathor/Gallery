import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Axios from '../../utils/axios';
import SearchHead from './SearchHead';
import SearchFilter from './SearchFilter';
import GridSection from '../partials/GridSection';

const Search = () => {
    const { query } = useParams();
    const navigate = useNavigate();
    const [orientation, setorientation] = useState('landscape');
    const [color, setcolor] = useState('all');
    const [size, setsize] = useState('small');
    const [Images, setImages] = useState([]);
    const [pageNo, setpageNo] = useState(1);
    const getImages = async (query) => {
        const { data } = await Axios.get(`/search?&page=${pageNo}&query=${query}&color=${color}&orientation=${orientation}&size=${size}`);
        setImages(data);
        console.log(data);
    }
    useEffect(() => {
        setImages([]);
        getImages(query);
    }, [query, pageNo, orientation, color, size])

    return (
        <div className='p-10  pb-28'>
            <Link to='/'><h1 className='mb-5 after:absolute after:top-full after:w-full after:h-[1px] relative after:bg-black w-fit after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-right after:hover:origin-left after:transition-transform '><i className="ri-arrow-left-s-line"></i>Back</h1></Link>
            <SearchHead query={query} setpageNo={setpageNo} />
            <SearchFilter orientation={orientation} color={color} setorientation={setorientation} setcolor={setcolor} setsize={setsize} size={size} />
            <GridSection Images={Images} />
            <div className="pagination gap-10 justify-between fixed bottom-5 flex items-center w-[94.8%] bg-white p-2 rounded">
                <button onClick={(e) => pageNo != 1 && setpageNo(pageNo - 1)} className='capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl px-10 py-4 font-semibold'><i className='ri-arrow-left-line'></i><span className={`${pageNo === 1 ? 'line-through' : ''}`}>previous</span></button>
                <h1 className='text-xl font-serif'><span className='italic'>Page No : </span>{pageNo}</h1>
                <button onClick={(e) => setpageNo(pageNo + 1)} className=' px-10 py-4 capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl font-semibold'>Next <i className='ri-arrow-right-line'></i></button>
            </div>
        </div>
    )
}

export default Search