import React from 'react'
import { Link } from 'react-router-dom'

const SingleImage = ({ backgroundColor,id, src, photographer }) => {
    return (
        <Link to={`/view/${id}`}>
            <div style={{ backgroundColor }} className="rounded group relative bg-blue-50 h-[70vh] overflow-hidden">
                <div className="overlay bg-black/[.4] flex-col justify-end cursor-pointer text-white p-6 group-hover:flex hidden absolute h-full w-full">
                    <h1 className=' text-lg'>{photographer}</h1>
                </div>
                <img src={src} className='h-full w-full object-cover' alt="" />
            </div>
        </Link>
    )
}

export default SingleImage