import React from 'react'
import Loading from './Loading'
import SingleImage from './SingleImage'
import SingleVideo from './SingleVideo'

const GridSection = ({ Media,mediaType, path }) => {
    console.log(Media);
    console.log(mediaType);
    return (
        Media && Media.total_results === 0 ?
            <h1 className=' col-span-3 text-xl font-semibold'>Sorry ! , No Media found</h1> : Media.length === 0 ?
                <Loading /> :
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {mediaType === 'image' ?
                        (Media.photos && Media.photos.map((image) => {
                            return <SingleImage path={path} key={image.id} id={image.id} photographer={image.photographer} downloadurl={image.src.large2x} backgroundColor={image.avg_color} src={image.src.large} />
                        })) :
                        Media.videos && Media.videos.map((video) => {
                            return <SingleVideo  path={path} key={video.id} id={video.id} photographer={video.user.name} downloadurl={video.video_files[0].link} backgroundColor={video.avg_color} src={video.video_files[0].link} />
                        })
                    }
                </div>
    )
}

export default GridSection