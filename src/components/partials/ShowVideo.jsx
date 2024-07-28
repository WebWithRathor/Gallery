import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Axios from '../../utils/axios';

const ShowVideo = () => {
    const { id } = useParams();
    let {pathname} = useLocation();
    pathname = pathname.split('/view')[0] === '' ? '/' : pathname.split('/view')[0];
    const [video, setvideo] = useState(null)
    const getImg = async () => {
        const { data } = await Axios.get(`/videos/videos/${id}`)
        setvideo(data)
    }
    useEffect(() => {
        getImg();
    }, [])

    const downloadvideo = (url, filename) => {
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
                console.error('Error while downloading the video', err);
            });
    };


    return (
        video ? <div className='h-screen fixed top-0 left-0 z-[999] w-full bg-black/[.7]'>
            <Link className='absolute top-5 z-[99] right-5' to={pathname}><i className="ri-close-line text-white text-4xl"></i></Link>
            <video controls  src={video.video_files[0].link} className='h-full w-full object-contain' alt="" />
            <div className='border px-4 py-2 group rounded absolute top-[90%] left-1/2 -translate-x-1/2 bg-white'>Download <i className="ri-arrow-down-s-line"></i>
                <div className="options z-10 absolute md:scale-x-0 md:group-hover:scale-x-100 scale-y-0 group-hover:scale-y-100 origin-bottom md:origin-left transition-all bg-white left-full rounded top-[-300%] md:top-0 flex md:flex-row flex-col border shadow-inner w-max">
                    <h1 onClick={(e) => downloadvideo(video.video_files[0].link, `video_${video.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>1080p</h1>
                    <h1 onClick={(e) => downloadvideo(video.video_files[1].link, `video_${video.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>720p</h1>
                    <h1 onClick={(e) => downloadvideo(video.video_files[2].link, `video_${video.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>480p</h1>
                    <h1 onClick={(e) => downloadvideo(video.video_files[3].link, `video_${video.id}`)} className='py-2 px-4 cursor-pointer hover:bg-gray-100'>360p</h1>
                </div>
            </div>
        </div> : <h1>Loading</h1>
    )
}

export default ShowVideo