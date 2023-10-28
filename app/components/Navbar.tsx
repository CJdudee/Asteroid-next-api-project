'use client'

import Link from 'next/link'
import AsteroidPage from '../rocktheone/[asteroidId]/page'
import AstroidSearch from './AsteroidSearch'
import AstroidDate from './AsteroidDate'
import { usePathname } from 'next/navigation'

import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'


export default function Navbar() {
    const [open, setOpen] = useState(false)

    const pathname = usePathname()

    return (
        
        <nav className=' bg-blue-800  pt-2 pl-2 md:p-0 sticky  '>
            <div className={`block min-[768px]:hidden `}>
                <button className={` ${open ? ' absolute' : ''} hover:text-gray-300`} onClick={() => {setOpen(!open)}}>

                <RxHamburgerMenu className={` w-9 h-9 `}/>
                </button>

                {open && (
                    <div className='w-full h-full flex justify-evenly flex-col pb-2 '>
                        <div className='text-center'>
                        <AstroidSearch />
                    </div>
                    <div className='flex justify-center'>
                        <AstroidDate />
                    </div>

                    </div>
                )}

            </div>

            <div className='hidden md:flex justify-evenly pb-2  gap-1'>

                <h1 className='hidden text-3xl font-bold mt-3  text-white lg:grid place-content-center '>
                    <Link className='hover:text-gray-300' href='/'>RockOClock</Link>
                </h1>


                <div className='text-center  '>
                    <AstroidSearch />
                    
                </div>

                <div className='text-center '>
                    <AstroidDate />
                    
                </div>

            </div>

            <div className=''>

                <ul className='w-full  lg:hidden ' >
                    
                    <div className={`flex justify-evenly ${pathname === '/' ? 'hidden' : ''} `}>

                    <Link href='/' className='text-white hover:text-gray-300'>Home</Link>

                    </div>

                </ul>
            
            </div>
            
            {/* <h1 className='items-end  align-bottom text-white '>BETA 0.0.1</h1> */}
        </nav>
        
        
    )
}