'use client'
import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';

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
        <div className='bg-yellow-300 h-screen w-52'>
            <div>
                <img src="/images/logo.png" alt="logo" width={150} height={150} />
            </div>
            <div className='flex flex-col gap-2 align-items-right pt-44'>
                <div className='flex justify-center items-center gap-2'>
                    <LuLayoutDashboard />
                    <Link href="/">Dashboard</Link>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaCartArrowDown />
                    <div className="relative inline-block">
                        <button
                            type="button"
                            className="px-4 py-2 text-black rounded-lg text-sm inline-flex items-center"
                            onClick={toggleDropdown}
                        >
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
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Familles d'articles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/gestiondestock/famillearticle"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Articles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/gestiondestock/promotion"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                <div className='flex justify-center items-center gap-2'>
                    <FaFileInvoiceDollar />
                    <div className="relative inline-block">
                        <button
                            type="button"
                            className="px-4 py-2 text-black rounded-lg text-sm inline-flex items-center"
                            onClick={toggleDropdownTransx}
                        >
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
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsOpenTransax(false)}
                                        >
                                            Ventes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/transaction/reclamations"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                <div className='flex justify-center items-center gap-2'>
                    <IoSettingsOutline />
                    <Link href="/parametre">Paramètres</Link>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <IoIosLogOut />
                    <Link href="/logout">Se déconnecter</Link>
                </div>
            </div>
        </div>
    );
}

