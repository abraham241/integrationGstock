"use client"; // Ajoutez ceci en haut du fichier

import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Image from 'next/image';
const Tab1Content = () => {
  return <div> <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
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
</table></div>;
};

const Tab2Content = () => {
  return <div> <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
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
</table></div>;
};

const Tab3Content = () => {
  return <div> <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
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
</table></div>;
};
const Tab4Content = () => {
  return <div> <table className="w-full text-sm bg-yellow-300 rounded-md  text-left text-black dark:text-gray-400">
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
</table></div>;
};

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 -mb-px text-sm font-medium border-b-2 focus:outline-none ${
              activeTab === tab.label
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
            className={`${
              activeTab === tab.label ? 'block' : 'hidden'
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
