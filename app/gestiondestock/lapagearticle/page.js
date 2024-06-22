import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
  return (
    <div className='flex'>
        <div>
          <Sidebar/>
        </div>
        <div>
            je suis un article
        </div>
    </div>
  )
}

export default page