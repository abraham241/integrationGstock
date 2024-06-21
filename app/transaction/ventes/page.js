import Sidebar from '@/components/Sidebar'
import React from 'react'
import Searchbar from '@/components/Searchbar'
import { FiFilter } from "react-icons/fi";



function page() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full'>
        <div className='w-full'>
          <Searchbar />
        </div>
        <div className='w-full flex flex-col justify-items-center bg-slate-100 h-[85.5%] '>
          <div className='pt-6'>
            <h1 className='text-3xl font-bold ml-10 mb-[5%] '>
              Les ventes
            </h1>
          </div>

          
          <div className='mt-[-1%] w-[92%] bg-white space-x-3 h-[18%] rounded-xl m-auto flex justify-center items-center space-x-4'>
            <form className='flex justify-items-center items-center space-x-16'>
              <div className='w-[50%]'>
                <input type="text" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher par client/code" required />
              </div>
              <select id="countries" class="w-[150%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Types de payement</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Status</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Date limite</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <div className='flex gap-2 justify-center items-center'>
              <div className='text-3xl text-yellow-300'>
                <FiFilter />
              </div>
              <p className=''>
                Filtre
              </p>
            </div>

          </div>


          <div className='pb-[10%] w-[92%] m-auto' >


            <div className="relative overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[#FFE15D] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                    Nom de l’article                    </th>
                    <th scope="col" className="px-6 py-3">
                    Code de l’article
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Nom du client
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Date de l’achat
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Type de paiement
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Statut
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Facture
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      $2999
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                      White
                    </td>
                    <td className="px-6 py-4">
                      Laptop PC
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Page 1 / 1
                    </th>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4">
                      
                    </td>
                    <td className="px-6 py-4 bg-[#FFE15D]">
                    1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default page