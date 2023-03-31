import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import DropdownProfil from './DropdownProfil';
import DropdownProgram from './DropdownProgram';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
        <nav className='container '>
            <div className='justify-between mx-auto w-full px-4 xl:items-center xl:flex lg:px-16 xl:px-20 z-50 fixed bg-white top-0' >
                <div>
                    <div className='flex items-center justify-between py-3 xl:py-5 xl:block'>
                        {/* Logo */}
                        <Link href="" className='flex items-center'>
                            <img src="/img/navbar/Logo.png" className='w-12 md:w-14 lg:w-16' alt="Logo" /> 
                            <div className='leading-4 lg:leading-5 font-bold text-base pl-1 lg:text-lg'>
                                <h1>Yayasan</h1>
                                <p>Daar Elsakinah</p>
                                <p>Sukabumi</p>
                            </div>
                        </Link>
                        
                        {/* Hamburger Menu */}
                        <div className='xl:hidden'>
                            <button className='p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400'
                            onClick={() => setNavbar (!navbar)}>
                                {navbar ? (
                                    <Image src="/img/navbar/x.svg" width={30} height={30} alt="Logo" />
                                ) : (
                                    <Image src="/img/navbar/y.svg" width={30} height={30} alt='' className='focus:border-none active:border-none' />
                                )}
                            </button> 
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 xl:block xl:pb-0 xl:mt-0 ${
                        navbar ? 'p-12 xl:p-0 block' : 'hidden'
                    }`} >
                        <ul className='h-screen xl:h-auto items-center justify-center xl:flex'>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold xl:py-5  py-2 lg:px-4 xl:px-6 text-center hover:text-[#00923F] focus:text-[#00923F]'>
                                <Link href="/" onClick={() => setNavbar (!navbar)}>
                                    Beranda
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold xl:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#00923F] focus:text-[#00923F]'>
                                <DropdownProfil />
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold xl:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#00923F] focus:text-[#00923F]'>
                                <DropdownProgram />
                                {/* <Link href="/Ekstrakulikuler/" onClick={() => setNavbar (!navbar)}>
                                    Jadwal Pengajian
                                </Link> */}
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#00923F] focus:text-[#00923F]'>
                                <Link href="/unduhan" onClick={() => setNavbar (!navbar)}>
                                    Unduhan
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#00923F] focus:text-[#00923F]'>
                                <Link href="/donasi" onClick={() => setNavbar (!navbar)}>
                                    Donasi
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#00923F] focus:text-[#00923F]'>
                                <Link href="/kontak" onClick={() => setNavbar (!navbar)}>
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}