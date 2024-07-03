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
    const [pageNo, setpageNo] = useState(JSON.parse(localStorage.getItem('pageNo')) || 1);
    const [Images, setImages] = useState([]);
    const getImages = async () => {
        const { data } = await Axios.get(`/curated?page=${pageNo}`);
        setImages(data);
    }
    useEffect(() => {
        getImages();
        localStorage.setItem('pageNo', pageNo);
    }, [pageNo])

    return (
        <div className="h-full">
            <Nav />
            <Banner />
            <div className='min-h-screen w-full pt-20 py-32 px-10'>
                <GridHeading />
                <GridSection Images={Images} path={pathname}  />
                <Pagination pageNo={pageNo} setpageNo={setpageNo} totalPages={Images.length === 0 ? '' : Images.total_results} />
            </div>
            <Outlet />
        </div>
    )
}

export default HomeLayout