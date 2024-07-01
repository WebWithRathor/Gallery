import React from 'react'

const SingleImage = ({ backgroundColor, src }) => {
    return (
        <div  style={{ backgroundColor}} className=" bg-blue-50 h-[70vh] overflow-hidden">
        <img src={src} className='h-full w-full object-cover' alt="" />
        </div>
    )
}

export default SingleImage