import React, { useEffect, useRef, useState } from 'react'
import GridHeading from './GridHeading'
import Axios from '../utils/axios'

const GridSection = () => {
    const [pageNo, setpageNo] = useState(1);
    const [images,setImages] = useState([]);
    const getImages = async()=>{
      const{ data }= await  Axios.get(`/curated?page=${pageNo}`);
      setImages(data.photos);
    }
    console.log(images);
     useEffect(()=>{
        if(images.length === 0) getImages();
     },[pageNo,images])

    return (
        <div className='min-h-screen w-full pt-20 p-10'>
            <GridHeading />
            <div className=" flex flex-wrap">
            {images.length ===0 ? 
                <h1>Loading</h1> : 
                images.map((e)=>{
                
                    return <img className='w-1/3' key={e.id} src={e.src.large2x} alt="" />
                })
            }
            </div>
        </div>
    )
}

export default GridSection