import React from "react";
import Sidebar from "@/components/Sidebar";
import { FiFilter } from "react-icons/fi";
import Searchbar from "@/components/Searchbar";
import Link from "next/link";
export default function reclamations() {
  return (
    <>
      <div className=" flex bg-gray-100">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <div className=" h-24 ">
            <Searchbar />
          </div>
          <div className="px-10 pt-5">
            <h1 className="text-3xl font-bold">Les réclamations</h1>
            <div className="mt-5 flex gap-2">
              <button className="text-lg font-medium text-orange-400">
              <Link href="/transaction/ventes">Vente &gt;</Link>
              </button> 
              <span className="text-lg font-medium disabled ">réclamations</span>
            </div>
          </div>
          <div className=' bg-white  h-[18%] rounded-xl m-auto flex justify-center items-center mx-10 my-5'>
            <form className='flex justify-center items-center space-x-10'>
              <div className=''>
                <input type="text" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Rechercher par client/code" required />
              </div>
              <select id="" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                <option selected>Types de payement</option>
                <option value="US">Lorem</option>
                <option value="CA">Lorem</option>
                <option value="FR">Lorem</option>
                <option value="DE">Lorem</option>
              </select>
              <select id="" class="bg-gray-50 border px-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                <option selected>Status</option>
                <option value="US">Lorem</option>
                <option value="CA">Lorem</option>
                <option value="FR">Lorem</option>
                <option value="DE">Lorem</option>
              </select>
              <select class="bg-gray-50 border border-gray-300 px-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                <option selected>Date limite</option>
                <option value="US">Lorem</option>
                <option value="CA">Lorem</option>
                <option value="FR">Lorem</option>
                <option value="DE">Lorem</option>
              </select>
            </form>
            <div className='flex px-4 justify-center items-center'>
              <div className='text-3xl text-yellow-300'>
                <FiFilter />
              </div>
              <p className=''>
                Filtre
              </p>
            </div>
          </div>
          <div className='px-10 py-5'>
          <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
              <thead className=" border-3 border-b mx-10">
                <tr>
                  
                  <th className="scope px-4 py-3">Nom de l’article</th>
                  <th className="scope px-4 py-3">Code de l’article</th>
                  <th className="scope px-4 py-3">Nom du client</th>
                  <th className="scope px-4 py-3">Statut</th>
                  <th className="scope px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <tr className="border-b">
                  <td className="scope px-16 py-3">
                    Sac à dos
                  </td>
                  <td className="scope px-4 py-3">Papeterie</td>
                  <td className="scope px-4 py-3"> Bibang Patrick</td>
                  
                  <td className="scope px-4 py-3 flex gap-5">
                    <button
                      type="button"
                      class="text-orange-500 flex font-medium  text-sm h-8 w-20 rounded-full border-2 border-orange-500 justify-center items-center"
                    >
                        Payé
                    </button>
                  </td>
                  <td className="scope px-4 py-3 text-xl">...</td>
                </tr>
                <tr className="border-b">
                  <td className="scope px-16 py-3">
                    Crayon HB
                  </td>
                  <td className="scope px-4 py-3">Matériel de géométrie</td>
                  <td className="scope px-4 py-3">Benga Bob</td>
                  <td className="scope px-4 py-3 flex gap-5 text-orange-500">
                    <button
                      type="button"
                      class="text-green-500 font-medium  text-sm border-green-500 h-7 w-24 rounded-full border-2 p-1 flex justify-center items-center"
                    >
                      En attente
                    </button>
                  </td>
                  <td className="scope px-4 py-3 text-xl">...</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between rounded-b-lg items-center p-4 bg-white px-10">
              <span>Page 1 / 1</span>
              <div className="flex items-center">
                <button
                  type="button"
                  className="p-1 text-gray-500 rounded hover:bg-gray-200"
                  aria-label="Previous page"
                >
                  &lt;
                </button>
                <span className="mx-2 bg-yellow-300 p-2 rounded">1</span>
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
    </>
  );
}
