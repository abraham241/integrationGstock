import React from "react";
import Sidebar from "@/components/Sidebar";
import Searchbar from "@/components/Searchbar";
import Recherchebar from "@/components/Recherchebar";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function promotion() {
  return (
    <>
      <div className=" flex bg-gray-100">
        {/* appel de la sidebar */}
        <div className="">
          <Sidebar />
        </div>

        <div className="w-full">
          {/* appel de la barre de recherche */}
          <div className=" h-24 ">
            <Searchbar />
          </div>
          <div className="px-10 pt-5">
            <h1 className="text-3xl font-bold">Les promotions</h1>
          </div>
          <div className="flex justify-end px-10 py-7">
            <div className=" pt-5 flex gap-4">
              <button
                type="button"
                class="text-white bg-orange-500 flex gap-2 items-center   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
              >
                <div className="text-xl">
                  <MdDelete />
                </div>
                Suprimer
              </button>
              <button
                type="button"
                class="text-white bg-yellow-400 flex gap-2 items-center   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
              >
                <div className="text-xl">
                  <IoIosAddCircleOutline />
                </div>
                <Link href="/gestiondestock/promotion/Ajouterpromotion">Ajouter une promotion</Link>
              </button>
            </div>
          </div>

          {/* appel de la barre de recherche des familles article */}
          <div className="px-10 pt-5">
            <Recherchebar />
          </div>
          <div className="px-10 py-5">
            <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
              <thead className=" border-3 border-b mx-10">
                <tr>
                  <th className="scope px-4 py-3">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4  bg-gray-100 border-gray-300 rounded dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th className="scope px-2 py-3">Nom de la promotion</th>
                  <th className="scope px-2 py-3">Prix de la promotion</th>
                  <th className="scope px-2 py-3">Date de début</th>
                  <th className="scope px-2 py-3">Date de fin</th>
                  <th className="scope px-4 py-3 ">Statut</th>
                  <th className="scope px-2 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <tr className="border-b">
                  <td className="scope px-4 py-3">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </td>
                  <td className="scope px-2 py-3">Sac à dos</td>
                  <td className="scope px-2 py-3 flex gap-1 justify-center items-center">
                    <Image src="/Rectangle.png" alt="logo" width={30} height={30} className='rounded-full' />
                    <p className="flex items-center">
                      Promo de la rentrée
                    </p>
                  </td>
                  <td className="scope px-2 py-3">18 juin 2024</td>
                  <td className="scope px-2 py-3">30 juin 2024</td>
                  <td className="scope px-2 py-3">
                  <td className="scope px-2 py-3 flex gap-5">
                    <button
                      type="button"
                      class="text-green-500 flex font-medium  text-sm h-7 w-24 rounded-full border-2 border-green-500 justify-center items-center"
                    >
                        Active
                    </button>
                  </td>
                  </td>
                  {/* <td className="scope px-2 py-3">100</td> */}
                  <td className="scope px-2 py-3  flex gap-5">
                    <button
                      type="button"
                      class="text-orange-500 flex font-medium  text-sm"
                    >
                      <div className="text-xl">
                        <MdDelete />
                      </div>
                    </button>
                    <button
                      type="button"
                      class="text-orange-500 flex font-medium  text-sm"
                    >
                      <div className="text-xl">
                        <HiOutlinePencilAlt />
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="scope px-4 py-3">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </td>
                  <td className="scope px-2 py-3">Crayon HB</td>
                  <td className="scope px-2 py-3 flex gap-1 justify-center items-center">
                    <Image src="/Rectangle.png" alt="logo" width={30} height={30} className='rounded-full' />
                    <p className="flex items-center">
                      Promo de la rentrée
                    </p>
                  </td>
                  <td className="scope px-2 py-3">18 juin 2024</td>
                  <td className="scope px-2 py-3">30 juin 2024</td>
                  <td className="scope px-2 py-3">
                  <td className="scope px-2 py-3 flex text-orange-500">
                    <button
                      type="button"
                      class="text-yellow-500 font-medium  text-sm border-yellow-500 h-7 w-24 rounded-full border-2 p-1 flex justify-center items-center"
                    >
                      Expirée
                    </button>
                  </td>
                  </td>
                  {/* <td className="scope px-2 py-3">100</td> */}
                  <td className="scope px-2  py-3 flex gap-5 text-orange-500  items-center">
                    <button
                      type="button"
                      class="text-orange-500 flex font-medium  text-sm"
                    >
                      <div className="text-xl">
                        <MdDelete />
                      </div>
                    </button>
                    <button
                      type="button"
                      class="text-orange-500 flex font-medium  text-sm"
                    >
                      <div className="text-xl">
                        <HiOutlinePencilAlt />
                      </div>
                    </button>
                  </td>
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
                <span className=" bg-yellow-500 rounded p-2">1</span>
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
