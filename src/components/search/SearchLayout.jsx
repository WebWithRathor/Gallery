import React, { useEffect, useState } from 'react'
import SearchHead from './SearchHead';
import SearchFilter from './SearchFilter';
import GridSection from '../partials/GridSection';
import Pagination from '../partials/Pagination';
import Axios from '../../utils/axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SearchLayout = () => {
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
            <Pagination pageNo={pageNo} setpageNo={setpageNo} />
        </div>
    )
}

export default SearchLayout