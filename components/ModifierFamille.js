import React from 'react'

export default function ModifierFamille() {
  return (
    <div className='w-full bg-white h-full'>
      <div className='pt-3'>
        <h1 className='text-3xl pt-3 font-bold ml-10 mb-[2%] '>
          Modifier une famille
        </h1>
        <hr />
      </div>
      <div className='mt-8 w-[98%] ml-[-0.8%]'>
        <form className="rounded-md p-[3%] bg-white ml-10">
          <div className="mb-7 flex">
            <label for="email" className=" w-[30%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de famille</label>
            <input type="email" id="email" className="ml-[-10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-7 flex">
            <label for="email" className=" w-[30%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code de la famille</label>
            <input type="email" id="email" className="ml-[-10%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5 flex">
            <label for="message" className="w-[30%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows="4" className="ml-[-10%] block  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[60%] p-[4%] "></textarea>
          </div>
        </form>
      </div>
      <div className=' flex justify-center ml-[5%] space-x-5 pb-[1.5%] mt-[-2%] '>
        <button type="button" className="focus:outline-none text-white w-60 bg-[#FF5202] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Annuler</button>
        <button type="button" className="focus:outline-none text-white w-96 bg-[#FFCF02] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Ajouter une famille</button>
      </div>

    </div>
  )
}
