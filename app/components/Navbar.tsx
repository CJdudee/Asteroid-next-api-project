import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='bg-black p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
            <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-1'>
                <Link href='..'>RockOClock</Link>
            </h1>
            <h1 className='item-end align-bottom text-white '>BETA 0.0.1</h1>
        </nav>
    )
}