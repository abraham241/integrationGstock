import Sidebar from '@/components/Sidebar'
import React from 'react'
import Searchbar from '@/components/Searchbar'
import { FiFilter } from "react-icons/fi";
import { IoPrintSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from '@mui/material';


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


          <div className='mt-[-1%] w-[92%] justify-between px-5 bg-white space-x-3 h-[18%] rounded-xl m-auto flex justify-center items-center space-x-4'>
            <form className='flex justify-center items-center space-x-10'>
              <div className='w-[50%]'>
                <input type="text" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher par client/code" required />
              </div>
              <select id="countries" class="w-[151%] px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Types de payement</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select id="countries" class=" bg-gray-50 px-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Status</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select id="countries" class="bg-gray-50 px-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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


          <div className='pb-[4%] w-[92%] m-auto' >


            <div className="relative overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[#FFE15D] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className=" px-10 py-3">
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
                      Sac à dos
                    </th>
                    <td className="px-6 py-4">
                      6AB22
                    </td>
                    <td className="w-[40%] px-6 py-4">
                      Bibang Patrick
                    </td>
                    <td className="w-[40%] px-6 py-4">
                      08 juin 2024
                    </td>
                    <td className="w-[200%] px-6 py-4">
                      Airtel Money
                    </td>
                    <td className="px-6 py-4">
                      <button type="button" class="text-[#31DE42] bg-white border border-[#31DE42] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Payer</button>
                    </td>
                    <td className="px-6  py-4">
                      <div className='flex ml-[-25%]  '>
                        <Button className='text-[#FF5202]'>
                          <IoPrintSharp />
                        </Button>
                        <Button className='text-[#FF5202]'>
                          <MdOutlineFileDownload />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Crayon HB
                    </th>
                    <td className="px-6 py-4">
                      6AB22
                    </td>
                    <td className="px-6 py-4">
                      Benga Bob
                    </td>
                    <td className="px-6 py-4">
                      08 juin 2024
                    </td>
                    <td className="w-[70%] px-6 py-4">
                      Visa
                    </td>
                    <td className="px-6 py-4">
                      <button type="button" class="w-[120%] ml-[-20%] text-[#FF8C04] bg-white border border-[#FF8C04] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        En attente</button>
                    </td>
                    <td className="px-6 py-4">
                      <div className='flex ml-[-25%]'>
                        <Button className='text-[#FF5202]'>
                          <IoPrintSharp />
                        </Button>
                        <Button className='text-[#FF5202]'>
                          <MdOutlineFileDownload />
                        </Button>
                      </div>
                    </td>
                  </tr>

                </tbody>

              </table>
              <div className="flex justify-between rounded-b-lg items-center p-4 bg-white px-10">
                <span>Page 1 / 1</span>
                <div className="flex items-center  ">
                  <button
                    type="button"
                    className="p-1 text-gray-500 rounded hover:bg-gray-200"
                    aria-label="Previous page"
                  >
                    &lt;
                  </button>
                  <span className="mx-2 px-1 rounded bg-[#FFCF02]">1</span>
                  <button
                    type="button"
                    className="p-1 text-gray-500 rounded hover:bg-gray-200"
                    aria-label="Next page"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default page