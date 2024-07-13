import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Axios from '../../utils/axios';

const ShowImg = () => {
    const { id } = useParams();
    let {pathname} = useLocation();
    pathname = pathname.split('/view')[0] === '' ? '/' : pathname.split('/view')[0];
    const [image, setImage] = useState(null)
    const getImg = async () => {
        const { data } = await Axios.get(`/photos/${id}`)
        setImage(data)
    }
    useEffect(() => {
        getImg();
    }, [])

    const downloadImage = (url, filename) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                const url = window.URL.createObjectURL(blob);
                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch(err => {
                console.error('Error while downloading the image', err);
            });
    };


    return (
        image ? <div className='h-screen fixed top-0 left-0 z-[999] w-full bg-black/[.7]'>
            <Link className='absolute top-5 right-5' to={pathname}><i className="ri-close-line text-white text-4xl"></i></Link>
            <img src={image.src.large2x} className='h-full w-full object-contain' alt="" />
            <div className='border px-4 py-2 group rounded absolute top-[90%] left-1/2 -translate-x-1/2 bg-white'>Download <i className="ri-arrow-down-s-line"></i>
                <div className="options z-10 absolute md:scale-x-0 md:group-hover:scale-x-100 scale-y-0 group-hover:scale-y-100 origin-bottom md:origin-left transition-all bg-white left-full rounded top-[-300%] md:top-0 flex md:flex-row flex-col border shadow-inner w-max">
                    <h1 onClick={(e) => downloadImage(image.src.large2x, `Photu_${image.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>1080p</h1>
                    <h1 onClick={(e) => downloadImage(image.src.large, `Photu_${image.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>720p</h1>
                    <h1 onClick={(e) => downloadImage(image.src.medium, `Photu_${image.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>480p</h1>
                    <h1 onClick={(e) => downloadImage(image.src.small, `Photu_${image.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>360p</h1>
                </div>
            </div>
        </div> : <h1>ahdhashgfh guisahduiash ayugydyagw sd agdas bd g shfc</h1>
    )
}

export default ShowImg