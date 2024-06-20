import React from 'react'
import Sidebar from '@/components/Sidebar'

export default function page() {
  return (
    <>
      <div className='flex gap-4'>
        <Sidebar />
        <h1 className='text-3xl' >Bienvenue sur la page des parametres</h1>
      </div>
    </>
  )
}
