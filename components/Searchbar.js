import React from 'react'

export default function Searchbar() {
  return (
    <>
    <div className='bg-white p-4 flex justify-center items-center h-20'>
        <input
            id="search"
            type="text"
            placeholder="Search"
            className="w-96 h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 p-5" 
        />
    </div>
    </>
  )
}
