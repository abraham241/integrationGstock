import React from "react";
import Sidebar from "@/components/Sidebar";
import Searchbar from "@/components/Searchbar";
import Recherchebar from "@/components/Recherchebar";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
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
                <Link href="/">Ajouter une promotion</Link>
              </button>
            </div>
          </div>

          {/* appel de la barre de recherche des familles article */}
          <div className="px-10 pt-5">
            <Recherchebar />
          </div>
        </div>
      </div>
    </>
  );
}
