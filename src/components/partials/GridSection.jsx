import React from 'react'
import Loading from './Loading'
import SingleImage from './SingleImage'

const GridSection = ({ Images,path }) => {
    return (
        Images && Images.total_results === 0 ?
            <h1 className=' col-span-3 text-xl font-semibold'>Sorry ! , No images found</h1> : Images.length === 0 ?
                <Loading /> :
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {Images.photos.map((image) => {
                        return <SingleImage path={path} key={image.id} id={image.id} photographer={image.photographer} downloadurl={image.src.large2x} backgroundColor={image.avg_color} src={image.src.large} />
                    })}
                </div>
    )
}

export default GridSection