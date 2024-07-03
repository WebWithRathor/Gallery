import React, { useEffect, useState } from 'react'
import Axios from '../../utils/axios';
import GridHeading from './GridHeading';
import GridSection from '../partials/GridSection';
import Nav from './Nav';
import Banner from './Banner';
import Pagination from '../partials/Pagination';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {

    const [pageNo, setpageNo] = useState(1);
    const [Images, setImages] = useState([]);
    const getImages = async () => {
        const { data } = await Axios.get(`/curated?page=${pageNo}`);
        setImages(data);
    }
    useEffect(() => {
        getImages();
    }, [pageNo])

    return (
        <div className="h-full">
            <Nav />
            <Banner />
            <div className='min-h-screen w-full pt-20 py-32 px-10'>
                <GridHeading />
                <GridSection Images={Images}  />
                <Pagination pageNo={pageNo} setpageNo={setpageNo} />
            </div>
        </div>
    )
}

export default HomeLayout