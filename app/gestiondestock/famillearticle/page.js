import React from 'react'
import Sidebar from '@/components/Sidebar'
import Searchbar from '@/components/Searchbar'

export default function  famillearticle() {
  return (
    <>
      <div className=' flex bg-gray-100'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='w-full'>
          <div className=' h-24 '>
            <Searchbar />
          </div>
          <div className='px-10 pt-5'>
            <h1 className='text-3xl font-bold'>Famille Articles</h1>
          </div>
        </div>
      </div>
      
    </>
  )
}
