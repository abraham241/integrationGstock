import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
        <div className='bg-yellow-300 h-screen w-52'>
            <div>
                <img src="../public/images/logo.png" alt="logo" width={150}   height={150} />
            </div>
            <div className='flex flex-col gap-2 align-items-right pt-44'>
                <div className='flex justify-center items-center gap-2'>
                    <LuLayoutDashboard />
                    <Link href="/">Dashboard</Link>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaCartArrowDown />
                    <Link href="/gestiondestock">Gestion de stock</Link>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaFileInvoiceDollar />
                    <Link href="/transaction">Transactions</Link>
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
    </>
  )
}
