import Searchbar from '@/components/Searchbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
  return (
    <div className='flex'>
      {/* sidebar */}
      <div>
        <Sidebar />
      </div>


      {/* body */}


      <div className='w-full h-5/6 '>
        <div className='w-full'>
          <Searchbar />
        </div>
        <div className='w-full bg-slate-300 h-full'>
          <div className='pt-8'>
            <h1 className='text-3xl font-bold ml-10 '>
              Ajouter un article à une famille
            </h1>
            <p className='ml-20 mt-5'>
              Ajouter une famille d’article ici
            </p>
          </div>
          <div className='mt-8 w-[98%] ml-[-0.8%]'>
            <form className="rounded-md p-[3%] bg-white ml-10">
              <div className="mb-5 flex">
                <label for="email" className=" w-[30%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de famille</label>
                <input type="email" id="email" className="ml-[-10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="mb-5 flex">
                <label for="email" className=" w-[30%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code de la famille</label>
                <input type="email" id="email" className="ml-[-10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="mb-5 flex">
                <label for="message" className="w-[30%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="message" rows="4" className="ml-[-10%] block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[60%] p-[4%] "></textarea>
              </div>
            </form>
          </div>
          <div className='mt-5 flex justify-end px-6'>
            <button type="button" className="focus:outline-none text-white w-32 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Annuler</button>
            <button type="button" className="focus:outline-none text-white w-52 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Ajouter une famille</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default page