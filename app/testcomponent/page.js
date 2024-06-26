"use client"; // Ajoutez ceci en haut du fichier

import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

import { HiOutlinePencilAlt } from "react-icons/hi";
import Image from 'next/image';
const Tab1Content = () => {
  return <div>
    <div className='flex'>
      <form className='flex justify-center items-center space-x-3 py-5'>
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
    <div>
      <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
        <thead className=" border-3 border-b mx-10">
          <tr>
            <th className="scope px-4 py-3">
              <div className="flex items-center">
               
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th className="scope px-2 py-3">ID de l’achat</th>
            <th className="scope px-7 py-3">Date de paiement</th>
            <th className="scope px-5 py-3">Méthode</th>
            <th className="scope px-16 py-3 ">Statut</th>
            <th className="scope px-7 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <tr className="border-b">
            <td className="scope px-4 py-3">
           
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Sac à dos</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                18 juin 2024
              </p>
            </td>
            <td className="scope px-2 py-3">Airtel Money</td>
            <td className="scope px-8 py-3">
              <td className="scope px-2 py-3 flex gap-5">
                <button
                  type="button"
                  class="text-green-500 flex font-medium  text-sm h-7 w-24 rounded-full border-2 border-green-500 justify-center items-center"
                >
                  Livré
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>

          </tr>
          <tr className="border-b">
            <td className="scope px-4 py-3">
            
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Crayon HB</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                08 mai 2024
              </p>
            </td>
            <td className="scope px-10 py-3 ">Visa</td>
            <td className="scope px-2 py-3">
              <td className="scope px-2 py-3 flex text-orange-500">
                <button
                  type="button"
                  class="text-yellow-500 font-medium  text-sm border-yellow-500 h-7 w-36 rounded-full border-2 p-1 flex justify-center items-center"
                >
                  Livraison en courss
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>
        
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
  </div>;
};

const Tab2Content = () => {
  return <div>
    <div className='flex justify-end'>
      <form className='flex justify-center items-center space-x-3 py-5'>
      
        <select id="" class=" w-64 bg-gray-50 border px-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
          <option selected>Type de paiement</option>
          <option value="US">Lorem</option>
          <option value="CA">Lorem</option>
          <option value="FR">Lorem</option>
          <option value="DE">Lorem</option>
        </select>
        <select class=" w-52 bg-gray-50 border border-gray-300 px-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
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
    <div>
    <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
        <thead className=" border-3 border-b mx-10">
          <tr>
            <th className="scope px-4 py-3">
              <div className="flex items-center">
               
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th className="scope px-2 py-3">ID de l’achat</th>
            <th className="scope px-7 py-3">Date de paiement</th>
            <th className="scope px-5 py-3">Méthode</th>
            <th className="scope px-16 py-3 ">Statut</th>
            <th className="scope px-7 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <tr className="border-b">
            <td className="scope px-4 py-3">
           
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Sac à dos</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                18 juin 2024
              </p>
            </td>
            <td className="scope px-2 py-3">Airtel Money</td>
            <td className="scope px-8 py-3">
              <td className="scope px-2 py-3 flex gap-5">
                <button
                  type="button"
                  class="text-green-500 flex font-medium  text-sm h-7 w-24 rounded-full border-2 border-green-500 justify-center items-center"
                >
                  Livré
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>

          </tr>
          <tr className="border-b">
            <td className="scope px-4 py-3">
            
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Crayon HB</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                08 mai 2024
              </p>
            </td>
            <td className="scope px-10 py-3 ">Visa</td>
            <td className="scope px-2 py-3">
              <td className="scope px-2 py-3 flex text-orange-500">
                <button
                  type="button"
                  class="text-yellow-500 font-medium  text-sm border-yellow-500 h-7 w-36 rounded-full border-2 p-1 flex justify-center items-center"
                >
                  Livraison en courss
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>
        
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
  </div>;
};

const Tab3Content = () => {
  return <div>
    <div className='flex justify-end'>
      <form className='flex justify-center items-center space-x-3 py-5'>
      
        <select id="" class="w-64 bg-gray-50 border px-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
          <option selected>type de paiement</option>
          <option value="US">Lorem</option>
          <option value="CA">Lorem</option>
          <option value="FR">Lorem</option>
          <option value="DE">Lorem</option>
        </select>
        <select class="w-52 bg-gray-50 border border-gray-300 px-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
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
    <div>
    <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
        <thead className=" border-3 border-b mx-10">
          <tr>
            <th className="scope px-4 py-3">
              <div className="flex items-center">
               
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th className="scope px-2 py-3">ID de l’achat</th>
            <th className="scope px-7 py-3">Date de paiement</th>
            <th className="scope px-5 py-3">Méthode</th>
            <th className="scope px-16 py-3 ">Statut</th>
            <th className="scope px-7 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <tr className="border-b">
            <td className="scope px-4 py-3">
           
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Sac à dos</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                18 juin 2024
              </p>
            </td>
            <td className="scope px-2 py-3">Airtel Money</td>
            <td className="scope px-8 py-3">
              <td className="scope px-2 py-3 flex gap-5">
                <button
                  type="button"
                  class="text-green-500 flex font-medium  text-sm h-7 w-24 rounded-full border-2 border-green-500 justify-center items-center"
                >
                  Livré
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>

          </tr>
          <tr className="border-b">
            <td className="scope px-4 py-3">
            
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Crayon HB</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                08 mai 2024
              </p>
            </td>
            <td className="scope px-10 py-3 ">Visa</td>
            <td className="scope px-2 py-3">
              <td className="scope px-2 py-3 flex text-orange-500">
                <button
                  type="button"
                  class="text-yellow-500 font-medium  text-sm border-yellow-500 h-7 w-36 rounded-full border-2 p-1 flex justify-center items-center"
                >
                  Livraison en courss
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>
        
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
  </div>;
};

const Tab4Content = () => {
  return <div>
    <div className='flex justify-end'>
      <form className='flex justify-center items-center space-x-3 py-5'>
      
        <select id="" class="w-64 bg-gray-50 border px-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
          <option selected>type de paiement</option>
          <option value="US">Lorem</option>
          <option value="CA">Lorem</option>
          <option value="FR">Lorem</option>
          <option value="DE">Lorem</option>
        </select>
        <select class="w-52 bg-gray-50 border border-gray-300 px-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
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
    <div>
    <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
        <thead className=" border-3 border-b mx-10">
          <tr>
            <th className="scope px-4 py-3">
              <div className="flex items-center">
               
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th className="scope px-2 py-3">ID de l’achat</th>
            <th className="scope px-7 py-3">Date de paiement</th>
            <th className="scope px-5 py-3">Méthode</th>
            <th className="scope px-16 py-3 ">Statut</th>
            <th className="scope px-7 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <tr className="border-b">
            <td className="scope px-4 py-3">
           
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Sac à dos</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                18 juin 2024
              </p>
            </td>
            <td className="scope px-2 py-3">Airtel Money</td>
            <td className="scope px-8 py-3">
              <td className="scope px-2 py-3 flex gap-5">
                <button
                  type="button"
                  class="text-green-500 flex font-medium  text-sm h-7 w-24 rounded-full border-2 border-green-500 justify-center items-center"
                >
                  Livré
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>

          </tr>
          <tr className="border-b">
            <td className="scope px-4 py-3">
            
              <label for="checkbox-all-search" class="sr-only">
                checkbox
              </label>
            </td>
            <td className="scope px-2 py-3">Crayon HB</td>
            <td className="scope px-2 py-7 flex gap-1 justify-center items-center">
              <p className="flex items-center">
                08 mai 2024
              </p>
            </td>
            <td className="scope px-10 py-3 ">Visa</td>
            <td className="scope px-2 py-3">
              <td className="scope px-2 py-3 flex text-orange-500">
                <button
                  type="button"
                  class="text-yellow-500 font-medium  text-sm border-yellow-500 h-7 w-36 rounded-full border-2 p-1 flex justify-center items-center"
                >
                  Livraison en courss
                </button>
              </td>
            </td>
            <td className="scope px-2 py-3">Voir les details</td>
        
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
  </div>;
};


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 -mb-px text-sm font-medium border-b-2 focus:outline-none ${activeTab === tab.label
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border border-t-0">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`${activeTab === tab.label ? 'block' : 'hidden'
              }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const tabs = [
    { label: 'Onglet 1', content: <Tab1Content /> },
    { label: 'Onglet 2', content: <Tab2Content /> },
    { label: 'Onglet 3', content: <Tab3Content /> },
    { label: 'Onglet 4', content: <Tab4Content /> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Application Next.js avec des Onglets</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Home;
