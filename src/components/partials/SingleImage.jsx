import React from 'react'
import { Link } from 'react-router-dom'

const SingleImage = ({ backgroundColor,downloadurl, id, src, photographer,path }) => {

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
        <div className='group relative'>
            <div className="overlay bg-gradient-to-t pointer-events-none from-black to-transparent justify-between items-end cursor-pointer text-white p-6 group-hover:flex hidden absolute h-[70vh] z-10 w-full">
                <h1 className=' text-lg'>{photographer}</h1>
                <button onClick={(e)=>downloadImage(downloadurl,`Photu_${id}`)} className='px-3 relative z-10 py-2 bg-white pointer-events-auto text-black rounded font-semibold'>Download</button>
            </div>
            <Link to={`${path === '/' ? '':path}/view/${id}`}>
                <div style={{ backgroundColor }} className="rounded relative bg-blue-50 h-[70vh] overflow-hidden">
                    <img src={src} className='h-full w-full object-cover' alt="" />
                </div>
            </Link>
        </div>
    )
}

export default SingleImage