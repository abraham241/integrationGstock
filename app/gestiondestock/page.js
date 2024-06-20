import React from 'react'
import Sidebar from '@/components/Sidebar'
import Searchbar from '@/components/Searchbar'

export default function page() {
  return (
    <>
      <div className='flex gap-4' >
        <Sidebar />
        <Searchbar />
      </div>
    </>

  )
}
