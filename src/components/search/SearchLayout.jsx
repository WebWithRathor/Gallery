import React, { useEffect, useState } from 'react'
import SearchHead from './SearchHead';
import SearchFilter from './SearchFilter';
import GridSection from '../partials/GridSection';
import Pagination from '../partials/Pagination';
import Axios from '../../utils/axios';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const SearchLayout = () => {
    const {pathname} = useLocation()
    const mediaType = pathname.includes('/videos') ? 'video' : 'image'
    const { query } = useParams();
    const [orientation, setorientation] = useState('landscape');
    const [color, setcolor] = useState('all');
    const [size, setsize] = useState('small');
    const [Media, setMedia] = useState([]);
    const [pageNo, setpageNo] = useState(JSON.parse(localStorage.getItem('pageNo'))||1);
    const getImages = async (query) => {
        const { data } = await Axios.get(`/search?&page=${pageNo}&query=${query}&color=${color}&orientation=${orientation}&size=${size}`);
        setMedia(data);
    }
    const getVideos = async (query) => {
        const { data } = await Axios.get(`/search?&page=${pageNo}&query=${query}&color=${color}&orientation=${orientation}&size=${size}`);
        setMedia(data);
    }
    useEffect(() => {
        setMedia([]);
        getImages(query);
        localStorage.setItem('pageNo', pageNo);
    }, [query, pageNo, orientation, color, size])

    return (
        <div className='p-10  pb-28'>
            <Link onClick={(e)=>localStorage.setItem('pageNo',1)} to='/'><h1 className='mb-5 after:absolute after:top-full after:w-full after:h-[1px] relative after:bg-black w-fit after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-right after:hover:origin-left after:transition-transform '><i className="ri-arrow-left-s-line"></i>Back</h1></Link>
            <SearchHead query={query} setpageNo={setpageNo} />
            <SearchFilter orientation={orientation} color={color} setorientation={setorientation} setcolor={setcolor} setsize={setsize} size={size} />
            <GridSection Media={Media} mediaType={mediaType} path={pathname} />
            <Pagination pageNo={pageNo} setpageNo={setpageNo} totalPages={Media.length === 0 ? '' : Media.total_results} />
            <Outlet/>
        </div>
    )
}

export default SearchLayout