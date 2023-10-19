'use client'

import Link from 'next/link'
import AsteroidPage from '../rocktheone/[asteroidId]/page'
import AstroidSearch from './AsteroidSearch'
import AstroidDate from './AsteroidDate'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathname = usePathname()

    return (
        
        <nav className=' bg-blue-900  pt-2 pr-4 pl-4 sticky  pb-1 '>

            <div className=' flex justify-evenly align-bottom flex-col md:flex-row  top-0 drop-shadow-xl'>

                <h1 className='hidden text-3xl font-bold  text-white lg:grid place-content-center mb-2 md:mb-1'>
                    <Link className='' href='/'>RockOClock</Link>
                </h1>

                <div className='text-center text-sm'>
                <AstroidSearch />
                    <p className='text-white '>Find by ID</p>
                </div>

                <div className='text-center '>
                    <AstroidDate />
                    <p className='text-white text-sm'>Find by date - only a week timeframe</p>
                </div>

                </div>
                <div className=''>

            <ul className='  w-full pb-1 lg:hidden ' >
                
                <div className={`flex justify-evenly ${pathname === '/' ? 'hidden' : ''} `}>

                <Link href='/' className='text-white hover:text-gray-300'>Home</Link>
                </div>

            </ul>
            
            </div>
            
            {/* <h1 className='items-end  align-bottom text-white '>BETA 0.0.1</h1> */}
        </nav>
        
        
    )
}