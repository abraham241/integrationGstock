import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import logo from '../public/logo.png';


export default function Sidebar() {
  return (
    <>
        <div className='bg-yellow-300 h-screen w-60 p-7'>
            <div>
                <img src={logo} alt="logo" width={150}   height={150} />
            </div>
            <div className='flex flex-col items-start gap-5'>
                <div className='flex justify-start items-start gap-2 hover:bg-slate-800 hover:text-white p-2 w-44'>
                    <LuLayoutDashboard />
                    <Link href="/">Dashboard</Link>
                </div>
                <div className='flex justify-start items-start gap-2 hover:bg-slate-800 hover:text-white p-2 w-44'>
                    <FaCartArrowDown />
                    <Link href="/gestiondestock">Gestion de stock</Link>
                </div>
                <div className='flex justify-start items-start gap-2 hover:bg-slate-800 hover:text-white p-2 w-44'>
                    <FaFileInvoiceDollar />
                    <Link href="/transaction">Transactions</Link>
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
    </>
  )
}
