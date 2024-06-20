import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

export default function Recherchebar() {
  return (
    <>
        <div className=''>
            <div className=''>
                <input
                id="search"
                type="text"
                placeholder="Saisissez votre recherche ici" 
                className="w-full h-12 pr-10 pl-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl">
                <IoSearch />
                </span>
            </div>
            <div className='text-3xl text-yellow-300'>
                <FiFilter />
            </div> 
        </div>
    </>
  )
}
