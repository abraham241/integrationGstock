import React from 'react'
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Searchbar() {
  return (
    <>
        <div className='bg-white p-4 flex justify-between items-center h-24  w-full px-16'>
            <div className='relative w-1/2 pl-16'>
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
            <div className='ml-4'>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='text-3xl text-yellow-300'> 
                        <FaBell />
                    </div>
                    <div className='flex gap-2  justify-center items-center'>
                        <div className='w-10 h-10 font-bold rounded-full bg-red-100 flex justify-center items-center'> CA</div>
                        <p className=' text-black'>Librairie Centr’Affaires</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}
