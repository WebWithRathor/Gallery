import React, { useEffect, useState } from 'react'
import Axios from '../../utils/axios';
import GridHeading from './GridHeading';
import GridSection from '../partials/GridSection';
import Nav from './Nav';
import Banner from './Banner';
import Pagination from '../partials/Pagination';
import { Outlet, useLocation} from 'react-router-dom';

const HomeLayout = () => {
    const {pathname} = useLocation()
    const mediaType = pathname.includes('/videos') ? 'video' : 'image'
    const [pageNo, setpageNo] = useState(JSON.parse(localStorage.getItem('pageNo')) || 1);
    const [Media, setMedia] = useState([]);


    const getImages = async () => {
        const { data } = await Axios.get(`/curated?page=${pageNo}`);
        setMedia(data);
    }

    const getVideos = async () => {
        const { data } = await Axios.get(`/videos/popular?page=${pageNo}`);
        setMedia(data);
    }
    
    useEffect(() => {
        if(mediaType === 'video'){
            getVideos();
        }else{
            getImages();
        }
        localStorage.setItem('pageNo', pageNo);
    }, [pageNo,mediaType])
    
    return (
        <div className="h-full">
            <Nav />
            <Banner />
            <div className='min-h-screen w-full pt-20 py-32 px-10'>
                <GridHeading />
                <GridSection mediaType={mediaType} Media={Media} path={pathname}  />
                <Pagination pageNo={pageNo} setpageNo={setpageNo} totalPages={Media.length === 0 ? '' : Media.total_results} />
            </div>
            <Outlet />
        </div>
    )
}

export default HomeLayout