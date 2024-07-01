import React from 'react'

const GridSection = ({Images}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {Images && Images.total_results === 0 ?
                <h1 className=' col-span-3 text-xl font-semibold'>Sorry ! , No images found</h1> : Images.length === 0 ?
                    <div className='h-full w-full object-cover rounded bg-gray-300 animate-pulse' ></div> : Images.photos.map((e) => {
                        return <div key={e.id} className=" bg-blue-50 h-[70vh] overflow-hidden">
                            <img src={e.src.large} className='h-full w-full object-cover' alt="" />
                        </div>
                    })
            }
        </div>
    )
}

export default GridSection