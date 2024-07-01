import React from 'react'

const Loading = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="div bg-gray-300 rounded animate-pulse h-[70vh] w-full"></div>
        <div className="div bg-gray-300 rounded animate-pulse h-[70vh] w-full"></div>
        <div className="div bg-gray-300 rounded animate-pulse h-[70vh] w-full"></div>
    </div>
  )
}

export default Loading