import React from 'react'

const SingleImage = ({ backgroundColor, src, photographer}) => {
    return (
        <div style={{ backgroundColor }} className="rounded group relative bg-blue-50 h-[70vh] overflow-hidden">
            <div className="overlay bg-black/[.4] flex-col justify-end cursor-pointer text-white p-6 group-hover:flex hidden absolute h-full w-full">
                <h1 className=' text-lg'>{photographer}</h1>
            </div>
            <img src={src} className='h-full w-full object-cover' alt="" />
        </div>
    )
}

export default SingleImage