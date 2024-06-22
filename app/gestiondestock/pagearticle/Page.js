import Sidebar from '@/components/Sidebar'
import React from 'react'

function Page() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div>
        je suis la page article
      </div>
    </div>
  )
}

export default Page