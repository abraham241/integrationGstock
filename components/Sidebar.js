'use client'
import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
// import logo from '/images/logo.png';


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTransax, setIsOpenTransax] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdownTransx = () => {
        setIsOpenTransax(!isOpenTransax);
    };

    return (
        <div className='bg-yellow-300 h-[670px] w-72 flex  flex-col items-start p-10'>
            <div className='mb-[40%] '>
                <Image src="/logo.png" alt="logo" width={150} height={150} />
            </div>
            <div className='flex flex-col items-start gap-3 h-full'>
                <div className='flex justify-start items-center gap-2 hover:bg-slate-800 hover:text-white p-2 w-56 pl-3'>
                    <LuLayoutDashboard />
                    <Link href="/">Dashboard</Link>
                </div>
                <div className='flex justify-start items-center gap-1 w-56  hover:text-white pl-2'>
                    
                    <div className="relative inline-block">
                        <button
                            type="button"
                            className=" py-2 text-black gap-2 p-1 text-sm inline-flex items-center h-12  hover:text-white hover:bg-slate-800"
                            onClick={toggleDropdown}
                        ><FaCartArrowDown />
                            Gestion de stocks
                            <svg className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'xl:-rotate-360' : 'xl:-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.95 9.95a1 1 0 011.414 1.414l-4.95 4.95a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 111.414-1.414L10 14.086l4.536-4.536a1 1 0 011.414 0z" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="origin-top-right  right-0 mt-2 w-44 ">
                                <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li>
                                        <Link
                                            href="/gestiondestock/famillearticle"
                                            className="block px-4 py-2 text-sm text-black "
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Familles d'articles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/gestiondestock/pagearticle"
                                            className="block px-4 py-2 text-sm text-black "
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Articles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/gestiondestock/promotion"
                                            className="block px-4 py-2 text-sm text-black"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Promotions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-start items-center gap-1   hover:text-white p-2 w-56'>
                    
                    <div className="relative inline-block">
                        <button
                            type="button"
                            className="p-1  py-2 text-black gap-2 text-sm inline-flex items-center  hover:text-white hover:bg-slate-800"
                            onClick={toggleDropdownTransx}
                        ><FaFileInvoiceDollar /> 
                            Transactions
                            <svg className={`w-4 h-4 ml-2 transition-transform ${isOpenTransax ? 'xl:-rotate-360' : 'xl:-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.95 9.95a1 1 0 011.414 1.414l-4.95 4.95a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 111.414-1.414L10 14.086l4.536-4.536a1 1 0 011.414 0z" />
                            </svg>
                        </button>

                        {isOpenTransax && (
                            <div className="origin-top-right  right-0 mt-2 w-44 ">
                                <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li>
                                        <Link
                                            href="/transaction/ventes"
                                            className="block px-4 py-2 text-sm text-black"
                                            onClick={() => setIsOpenTransax(false)}
                                        >
                                            Ventes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/transaction/reclamations"
                                            className="block px-4 py-2 text-sm text-black"
                                            onClick={() => setIsOpenTransax(false)}
                                        >
                                        reclamations
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-start items-start gap-2 hover:bg-slate-800 hover:text-white p-2 w-44'>
                    <IoSettingsOutline />
                    <Link href="/parametre">Paramètres</Link>
                </div>
                <div className='flex justify-start items-start gap-2 hover:bg-slate-800 hover:text-white p-2 w-44'>
                    <IoIosLogOut />
                    <Link href="/logout">Se déconnecter</Link>
                </div>
            </div>
        </div>
    );
}

