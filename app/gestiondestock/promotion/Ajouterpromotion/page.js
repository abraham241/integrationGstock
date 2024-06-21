import Searchbar from '@/components/Searchbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
    return (
        <div className='flex'>
            {/* sidebar */}
            <div className=''>
               <div className='fixed'>  <Sidebar /> </div>
                <div className='bg-yellow-300 h-[670px] w-72 z-[2]'>
                    je suis la
                </div>
            </div>


            {/* body */}


            <div className='w-full'>
                <div className='w-full'>
                    <Searchbar />
                </div>
                <div className='w-full flex flex-col justify-items-center bg-slate-100 pb-[5%] '>
                    <div className='pt-6'>
                        <h1 className='text-3xl font-bold ml-10 mb-[5%] '>
                            Ajouter une promotion
                        </h1>

                    </div>
                    <div className='mt-4 w-[98%] ml-[-0.8%]'>
                        <form className="rounded-md p-[3%] pb-[4%] bg-white ml-10">
                           <div className='flex mb-[4%] w-[98%]'> 
                            <label for="countries" className="w-[29%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select id="countries" className="w-[57.5%] pl-[20%] mr-[-5%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            </div>

                            <div className="flex items-center justify-center w-[85%] h-[10%] mb-[10%] ">
                            <label for="countries" className="w-[50%] mt-[-34%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Affiche de la promotion</label>
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="w-[80%] h-[10%] flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                            <div className="mt-[-6%] flex">
                                <label for="email" className=" w-[30%] block  text-sm font-medium text-gray-900 dark:text-white">Nom de la promotion</label>
                                <input type="email" id="email" className="ml-[-2%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[57%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mt-[3%] flex">
                                <label for="email" className=" w-[30%] block  text-sm font-medium text-gray-900 dark:text-white">Prix de la promotion</label>
                                <input type="email" id="email" className="ml-[-2%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[57%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mt-[3%] flex">
                                <label for="email" className=" w-[30%] block  text-sm font-medium text-gray-900 dark:text-white">Début de la promotion</label>
                                <input type="date" id="email" className="ml-[-2%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[57%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mt-[3%] flex">
                                <label for="email" className=" w-[30%] block  text-sm font-medium text-gray-900 dark:text-white">Fin de la promotion</label>
                                <input type="date" id="email" className="ml-[-2%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[57%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            
                        </form>
                    </div>
                    <div className='mt-5 flex justify-end px-6 pt-[3%] '>
                        <button type="button" className="focus:outline-none text-white w-32 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Annuler</button>
                        <button type="button" className="focus:outline-none text-white w-52 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Ajouter une famille</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page