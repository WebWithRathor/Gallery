import React, { useEffect, useRef, useState } from 'react'
import GridHeading from './GridHeading'
import Axios from '../utils/axios'

const GridSection = () => {
    const [pageNo, setpageNo] = useState(1);
    const [images, setImages] = useState([]);
    const getImages = async () => {
        const { data } = await Axios.get(`/curated?page=${pageNo}`);
        setImages(data.photos);
    }
    useEffect(() => {
        getImages();
    }, [pageNo])

    return (
        <div className='min-h-screen w-full pt-20 py-32 px-10'>
            <GridHeading />
            <div className=" grid grid-cols-3 gap-5 items-center  mt-20">
                {images.length === 0 ?
                    <h1>Loading</h1> :
                    images.map((e) => {
                        return <div style={{backgroundColor:`${e.avg_color}`}} key={e.id} className={`h-[70vh] flex items-center justify-center relative overflow-hidden`} >
                            <div className="overlay hidden h-full w-full bg-black absolute opacity-20">

                            </div>
                            <img className='object-cover h-full w-full' src={e.src.large}  alt="" />
                        </div>
                    })
                }
      <div className="pagination gap-10 justify-between fixed bottom-5 flex items-center w-[94.8%] bg-white p-2 rounded">
                <button onClick={(e) => pageNo != 1 && setpageNo(pageNo - 1)} className='capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl px-10 py-4 font-semibold'><i className='ri-arrow-left-line'></i><span className={`${pageNo === 1 ? 'line-through' : ''}`}>previous</span></button>
                <h1 className='text-xl font-serif'><span className='italic'>Page No : </span>{pageNo}</h1>
                <button onClick={(e) => setpageNo(pageNo + 1)} className=' px-10 py-4 capitalize after:absolute after:top-full after:w-full after:aspect-square after:left-0 relative after:bg-black after:rounded-full after:scale-0 after:hover:scale-110 overflow-hidden z-0 after:z-[-1] transition-all after:transition-all cursor-pointer hover:text-white after:hover:top-1/2 after:-translate-y-1/2 border-2 border-black rounded-xl font-semibold'>Next <i className='ri-arrow-right-line'></i></button>
            </div>
            </div>
        </div>
    )
}

export default GridSection