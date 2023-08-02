import Link from 'next/link'
import AsteroidPage from '../rocktheone/[asteroidId]/page'
import AstroidSearch from './AsteroidSearch'
import AstroidDate from './AsteroidDate'

export default function Navbar() {
    return (
        
        <nav className='bg-black pt-2 pr-4 pl-4 sticky'>

            <div className='sticky flex justify-evenly align-bottom flex-col md:flex-row  top-0 drop-shadow-xl'>

                <h1 className='hidden text-3xl font-bold  text-white xl:grid place-content-center mb-2 md:mb-1'>
                    <Link href='..'>RockOClock</Link>
                </h1>

                <div className='text-center text-sm'>
                <AstroidSearch />
                    <p className='text-white'>Find by ID</p>
                </div>

                <div className='text-center '>
                    <AstroidDate />
                    <p className='text-white text-sm'>Find by date</p>
                </div>

                </div>
            <ul className=' bg-black pb-1 xl:hidden ' >
                
                <div className='flex justify-evenly flex-wrap'>

                <Link href='/' className='text-white'>Home</Link>
                </div>
            </ul>
            
            
            {/* <h1 className='items-end  align-bottom text-white '>BETA 0.0.1</h1> */}
        </nav>
        
        
    )
}